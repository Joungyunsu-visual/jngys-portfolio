/* =============================================
   JNGYS Portfolio — Minimal Script
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Scroll fade-in
    const fadeEls = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0)';
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        obs.observe(el);
    });

    // Smooth scroll nav
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ─── Variables & Selectors ──────────────────────────────────────────
    const modal = document.getElementById('work-modal');
    const modalBody = document.getElementById('modal-body');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const toggle = document.getElementById('lang-toggle');
    const heroDesc = document.querySelector('.hero-desc');
    const logo = document.querySelector('.nav-logo');

    let currentLang = 'en';
    let openLightbox;
    let closeLightboxFunc;

    // ─── Split pane persistent hover ──────────────────────────────────────
    const splitSection = document.querySelector('.split-section');
    const paneLeft = document.getElementById('pane-work');
    const paneRight = document.getElementById('pane-project');
    
    if (splitSection && paneLeft && paneRight) {
        // Initialize default state
        splitSection.classList.add('expand-left');
        
        paneLeft.addEventListener('mouseenter', () => {
            splitSection.classList.remove('expand-right');
            splitSection.classList.add('expand-left');
            const scrollWork = document.getElementById('scroll-work');
            const scrollProject = document.getElementById('scroll-project');
            if (scrollWork) scrollWork.scrollTop = 0;
            if (scrollProject) scrollProject.scrollTop = 0;
        });
        
        paneRight.addEventListener('mouseenter', () => {
            splitSection.classList.remove('expand-left');
            splitSection.classList.add('expand-right');
            const scrollWork = document.getElementById('scroll-work');
            const scrollProject = document.getElementById('scroll-project');
            if (scrollWork) scrollWork.scrollTop = 0;
            if (scrollProject) scrollProject.scrollTop = 0;
        });
    }

    // ─── Helpers ────────────────────────────────────────────────────────

    // Cloudinary URL helper
    function cl(url, type) {
        if (!url) return '';
        if (type === 'thumb') return url.replace('/upload/', '/upload/c_fill,w_700,q_auto,f_auto/');
        if (type === 'full') return url.replace('/upload/', '/upload/w_1600,q_auto,f_auto/');
        return url;
    }

    function blurReveal(element, text) {
        if (!element) return;
        element.innerHTML = '';
        const words = text.split(' ');
        words.forEach((word) => {
            const span = document.createElement('span');
            span.innerHTML = word + '&nbsp;';
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            const randomDelay = Math.random() * 1.5;
            span.style.transition = `opacity 1.5s ease ${randomDelay}s`;
            element.appendChild(span);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    span.style.opacity = '1';
                });
            });
        });
    }

    // ─── Core Logic ─────────────────────────────────────────────────────

        function buildCards(items, gridElement) {
            gridElement.innerHTML = '';
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'work-card';
                card.setAttribute('data-id', item.title);
                card.setAttribute('data-title', item.title);
                card.setAttribute('data-year', item.year || '');
                card.setAttribute('data-desc', item.desc || '');
                card.setAttribute('data-main-img', item.main || '');
                card.setAttribute('data-video', item.video || '');
                card.setAttribute('data-extra', item.images ? JSON.stringify(item.images) : '[]');
                if (item.credits) {
                    card.setAttribute('data-credits', JSON.stringify(item.credits));
                }

                const mainImgSrc = item.main ? item.main : (item.images && item.images.length > 0 ? item.images[0] : '');

                card.innerHTML = `
                    <div class="work-image-placeholder">
                        <img src="${mainImgSrc}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="work-meta">
                        <h3 class="work-title">${item.title}</h3>
                        <span class="work-year">${item.year || ''}</span>
                    </div>
                `;

                // Add click listener
                card.addEventListener('click', () => {
                    openModal(card);
                });

                gridElement.appendChild(card);
            });
        }
    function buildCards() {
        const gridWork = document.getElementById('grid-work');
        const gridProject = document.getElementById('grid-project');
        if (!gridWork || !gridProject) return;

        gridWork.innerHTML = '';
        gridProject.innerHTML = '';

        WORKS.forEach(work => {
            const card = document.createElement('a');
            card.className = 'work-card fade-in';
            card.href = '#';
            card.setAttribute('data-category', work.category);

            if (work.images && work.images.length) {
                const fullRes = work.images.map(u => cl(u, 'full'));
                card.setAttribute('data-images', JSON.stringify(fullRes));
            }
            if (work.video) card.setAttribute('data-video', work.video);
            if (work.desc) card.setAttribute('data-desc', work.desc);
            if (work.credits) card.setAttribute('data-credits', JSON.stringify(work.credits));

            const thumbSrc = cl(work.main, 'thumb');

            const imageHTML = work.main
                ? `<img src="${thumbSrc}" alt="${work.title}">`
                : `<span class="placeholder-label">Image</span>`;

            card.innerHTML = `
                <div class="work-image-placeholder">${imageHTML}</div>
                <div class="work-meta">
                    <span class="work-title">${work.title}</span>
                    <span class="work-year">${work.year}</span>
                </div>`;

            if (work.category === 'work') gridWork.appendChild(card);
            else if (work.category === 'project') gridProject.appendChild(card);
        });

        attachCardListeners();
    }



    function attachCardListeners() {
        const newCards = document.querySelectorAll('.work-card');
        newCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            obs.observe(card);
        });

        if (!modal || !modalBody) return;

        newCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const titleElement = card.querySelector('.work-title');
                const yearElement = card.querySelector('.work-year');
                const title = titleElement ? titleElement.textContent : 'Untitled';
                const year = yearElement ? yearElement.textContent : '';
                const imgEl = card.querySelector('img');
                const mainImgSrc = imgEl ? imgEl.src : '';
                let extraImages = [];
                const imagesAttr = card.getAttribute('data-images');
                if (imagesAttr) { try { extraImages = JSON.parse(imagesAttr); } catch (e) { } }
                const desc = card.getAttribute('data-desc') || '';
                let credits = null;
                const creditsAttr = card.getAttribute('data-credits');
                if (creditsAttr) { try { credits = JSON.parse(creditsAttr); } catch (e) { } }
                const videoSrc = card.getAttribute('data-video') || '';

                let contentHTML = ``;
                
                if (videoSrc) {
                    if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
                        let ytId = '';
                        if (videoSrc.includes('youtu.be/')) {
                            ytId = videoSrc.split('youtu.be/')[1].split('?')[0];
                        } else if (videoSrc.includes('youtube.com/watch')) {
                            ytId = new URL(videoSrc).searchParams.get('v');
                        }
                        if (ytId) {
                            contentHTML += `<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; margin-bottom:24px;">
                                <iframe src="https://www.youtube.com/embed/${ytId}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                            </div>`;
                        }
                    } else {
                        contentHTML += `<video src="${videoSrc}" class="modal-main-img" controls playsinline style="background:#000;"></video>`;
                    }
                } else if (mainImgSrc) {
                    contentHTML += `<img src="${mainImgSrc}" alt="${title}" class="modal-main-img">`;
                }

                // Text section right below main image
                contentHTML += `<div class="modal-text-wrap" style="margin-bottom: 40px; padding: 0 16px;">`;
                contentHTML += `
                    <div class="modal-header" style="text-align:center; margin-bottom:24px;">
                        <h3 class="modal-title" style="margin-bottom:4px;">${title}</h3>
                        <p class="modal-year" style="margin-bottom:0;">${year}</p>
                    </div>
                `;
                
                if (desc) contentHTML += `<div class="modal-desc" style="text-align:center; margin-bottom:24px;">${desc}</div>`;
                if (credits) {
                    contentHTML += `<div class="modal-credits">`;
                    for (const [role, name] of Object.entries(credits)) {
                        contentHTML += `<div class="credit-item" style="display:flex; justify-content:center; margin-bottom:8px;">
                            <span class="credit-role" style="min-width:140px; text-align:right; margin-right:16px;">${role}</span>
                            <span style="min-width:140px; text-align:left;">${name}</span>
                        </div>`;
                    }
                    contentHTML += `</div>`;
                }
                contentHTML += `</div>`;
                
                if (extraImages.length > 0) {
                    contentHTML += `<div class="modal-image-flow">`;
                    extraImages.forEach(src => {
                        contentHTML += `<img src="${src}" class="flow-item" alt="Extra Image" loading="lazy">`;
                    });
                    contentHTML += `</div>`;
                }

                modalBody.innerHTML = contentHTML;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';

                const modalImages = modalBody.querySelectorAll('img');
                modalImages.forEach(img => {
                    if (img.classList.contains('flow-item')) {
                        const checkRatio = () => {
                            if (img.naturalHeight > img.naturalWidth) {
                                img.classList.add('portrait');
                            } else {
                                img.classList.add('landscape');
                            }
                        };
                        if (img.complete && img.naturalHeight) {
                            checkRatio();
                        } else {
                            img.addEventListener('load', checkRatio);
                        }
                    }

                    img.addEventListener('click', () => {
                        if (openLightbox) openLightbox(img.src);
                    });
                });
            });
        });
    }


    // ─── Initialization ───────────────────────────────────────────────

    // Initial Animation
    if (heroDesc) {
        blurReveal(heroDesc, heroDesc.getAttribute(`data-${currentLang}`));
    }

    // Logo click listener
    if (logo) {
        logo.addEventListener('click', (e) => {
            const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
            if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Desktop: explicitly switch to WORK
                if (splitSection) {
                    splitSection.classList.remove('expand-right');
                    splitSection.classList.add('expand-left');
                }
                
                // Mobile: click WORK tab
                const workTabBtn = document.querySelector('.mobile-tab[data-target="work"]');
                if (workTabBtn) {
                    workTabBtn.click();
                }
            }
            // else: naturally navigate to href="index.html"
        });
    }

    // Initial render: WORK, PROJECT elements
    buildCards();

    // ─── Mobile: Hamburger Toggle ─────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('show');
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('show');
            });
        });
    }

    // ─── Mobile: WORK / PROJECT Tab Dissolve ──────────────────────────
    const mobileTabs = document.querySelectorAll('.mobile-tab');
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

    function setMobilePane(target) {
        if (!paneLeft || !paneRight) return;
        if (target === 'work') {
            paneLeft.classList.add('mobile-visible');
            paneLeft.classList.remove('mobile-hidden');
            paneRight.classList.add('mobile-hidden');
            paneRight.classList.remove('mobile-visible');
        } else {
            paneRight.classList.add('mobile-visible');
            paneRight.classList.remove('mobile-hidden');
            paneLeft.classList.add('mobile-hidden');
            paneLeft.classList.remove('mobile-visible');
        }
    }

    // Initialize mobile state
    if (isMobile()) {
        setMobilePane('work');
    }

    mobileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mobileTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            setMobilePane(tab.getAttribute('data-target'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle resize: clean up mobile classes when switching back to desktop
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            if (paneLeft) { paneLeft.classList.remove('mobile-visible', 'mobile-hidden'); }
            if (paneRight) { paneRight.classList.remove('mobile-visible', 'mobile-hidden'); }
        } else {
            const activeTab = document.querySelector('.mobile-tab.active');
            if (activeTab) setMobilePane(activeTab.getAttribute('data-target'));
        }
    });

    // ─── Language Toggle (sync desktop + mobile) ──────────────────────
    const toggleMobile = document.getElementById('lang-toggle-mobile');

    function switchLang() {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        document.documentElement.setAttribute('lang', currentLang);
        const label = currentLang === 'en' ? 'KR' : 'EN';
        if (toggle) toggle.textContent = label;
        if (toggleMobile) toggleMobile.textContent = label;
        const translatables = document.querySelectorAll('[data-en][data-ko]');
        translatables.forEach(el => {
            if (el.classList.contains('hero-desc')) {
                blurReveal(el, el.getAttribute(`data-${currentLang}`));
            } else {
                el.textContent = el.getAttribute(`data-${currentLang}`);
            }
        });
        // Close mobile nav after language switch
        if (hamburger) hamburger.classList.remove('open');
        if (mobileNav) mobileNav.classList.remove('show');
    }

    if (toggle) {
        toggle.addEventListener('click', switchLang);
    }
    if (toggleMobile) {
        toggleMobile.addEventListener('click', switchLang);
    }

    // Modal Close logic
    if (modal) {
        const closeModal = modal.querySelector('.close-modal');
        const closeFunc = () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        };
        if (closeModal) closeModal.addEventListener('click', closeFunc);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeFunc(); });
    }

    // Lightbox Logic
    if (lightbox && lightboxImg) {
        const closeBtn = lightbox.querySelector('.close-lightbox');
        closeLightboxFunc = () => {
            lightbox.classList.remove('show');
            setTimeout(() => {
                if (!lightbox.classList.contains('show')) lightboxImg.src = '';
            }, 400);
        };
        if (closeBtn) closeBtn.addEventListener('click', closeLightboxFunc);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxImg) closeLightboxFunc();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('show')) {
                closeLightboxFunc();
            } else if (modal && modal.classList.contains('show')) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        }
    });

});
