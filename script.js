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
        splitSection.classList.add('expand-left');

        let hoverTimer = null;

        paneLeft.addEventListener('mouseenter', () => {
            if (hoverTimer) clearTimeout(hoverTimer);
            hoverTimer = setTimeout(() => {
                if (splitSection.classList.contains('expand-left')) return;
                splitSection.classList.remove('expand-right');
                splitSection.classList.add('expand-left');
                document.getElementById('scroll-project')?.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('scroll-work')?.scrollTo({ top: 0, behavior: 'smooth' });
            }, 80);
        });

        paneRight.addEventListener('mouseenter', () => {
            if (hoverTimer) clearTimeout(hoverTimer);
            hoverTimer = setTimeout(() => {
                if (splitSection.classList.contains('expand-right')) return;
                splitSection.classList.remove('expand-left');
                splitSection.classList.add('expand-right');
                document.getElementById('scroll-project')?.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('scroll-work')?.scrollTo({ top: 0, behavior: 'smooth' });
            }, 80);
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

    // Build the detail popup: title → hero → text beside first image → justified image rows → more
    const paragraphs = (v) => (Array.isArray(v) ? v : v ? [v] : []).map(t => `<p>${t}</p>`).join('');
    const loadImage = (src) => new Promise(res => {
        const im = new Image();
        im.onload = () => res({ src, ratio: im.naturalWidth / im.naturalHeight });
        im.onerror = () => res({ src, ratio: 1.5 });
        im.src = src;
    });
    // Clamp ratios so paired images are cropped a little instead of leaving gaps
    const clampRatio = (r) => Math.min(Math.max(r, 0.7), 1.6);

    // Group images into rows of 1 (landscape) or 2 (pairs). A portrait never stands alone:
    // it pairs with the next image, or with the previous single image if it is last.
    function buildRows(items) {
        const rows = [];
        for (let i = 0; i < items.length; i++) {
            const cur = items[i];
            const next = items[i + 1];
            if (cur.ratio < 1 && next) {
                rows.push([cur, next]);
                i++;
            } else if (cur.ratio < 1) {
                const prev = rows[rows.length - 1];
                if (prev && prev.length === 1) prev.push(cur);
                else rows.push([cur]);
            } else if (next && next.ratio < 1 && !items[i + 2]) {
                rows.push([cur, next]);
                i++;
            } else {
                rows.push([cur]);
            }
        }
        return rows;
    }

    const rowHTML = (row, title) => {
        if (row.length === 1 && row[0].ratio < 1) {
            // lone portrait (only image): centered, not full width
            return `<div class="wd-imgrow wd-imgrow-solo"><figure style="aspect-ratio:${row[0].ratio}"><img src="${row[0].src}" alt="${title}" class="wd-zoom"></figure></div>`;
        }
        const figs = row.map(it => {
            const r = row.length === 1 ? it.ratio : clampRatio(it.ratio);
            return `<figure style="flex:${r} 1 0; aspect-ratio:${r}"><img src="${it.src}" alt="${title}" class="wd-zoom"></figure>`;
        }).join('');
        return `<div class="wd-imgrow">${figs}</div>`;
    };

    async function showWorkModal(work) {
        if (!modal || !modalBody) return;
        modal.setAttribute('data-slug', work.slug || '');
        const title = work.title;

        let hero = '';
        const videoSrc = work.video || '';
        if (videoSrc && (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be'))) {
            let ytId = '';
            if (videoSrc.includes('youtu.be/')) ytId = videoSrc.split('youtu.be/')[1].split('?')[0];
            else ytId = new URL(videoSrc).searchParams.get('v');
            if (ytId) hero = `<div class="wd-video"><iframe src="https://www.youtube.com/embed/${ytId}" allowfullscreen></iframe></div>`;
        } else if (videoSrc) {
            hero = `<video src="${videoSrc}" class="wd-hero-media" controls playsinline></video>`;
        } else if (work.main) {
            hero = `<img src="${cl(work.main, 'full')}" alt="${title}" class="wd-hero-media wd-zoom">`;
        }

        const meta = [work.year, work.genre ? work.genre.split('/').map(g => g.trim()).join(' · ') : '']
            .filter(Boolean).map(m => `<p>${m}</p>`).join('');

        const rows = [...(work.info || [])];
        if (work.credits) Object.entries(work.credits).forEach(([role, name]) => rows.push([role, name]));
        const infoHTML = rows.length
            ? `<dl class="wd-info">${rows.map(([l, v]) => `<div><dt>${l}</dt><dd>${v}</dd></div>`).join('')}</dl>`
            : '';

        const hasText = work.descKo || work.descEn;
        const textHTML = hasText
            ? `<div class="wd-copy">
                   ${work.descKo ? `<div class="wd-ko" lang="ko">${paragraphs(work.descKo)}</div>` : ''}
                   ${work.descEn ? `<div class="wd-en" lang="en">${paragraphs(work.descEn)}</div>` : ''}
               </div>`
            : '';

        const same = WORKS.filter(w => w.category === work.category);
        const idx = same.findIndex(w => w.slug === work.slug);
        const more = [1, 2, 3].map(n => same[(idx + n) % same.length]).filter(w => w && w.slug !== work.slug);
        const moreHTML = more.length ? `
            <section class="wd-more">
                <h2>More ${work.category === 'project' ? 'projects' : 'works'}</h2>
                <div class="wd-more-grid">
                    ${more.map(w => `<a href="#work/${w.slug}" class="wd-more-item" data-slug="${w.slug}">
                        <img src="${cl(w.main, 'thumb')}" alt="${w.title}" loading="lazy">
                        <span>${w.title}</span><span class="wd-more-year">${w.year}</span>
                    </a>`).join('')}
                </div>
            </section>` : '';

        modalBody.innerHTML = `
            <article class="wd">
                <header class="wd-head">
                    <h1 class="wd-title">${title}</h1>
                    <div class="wd-meta">${meta}</div>
                </header>
                ${hero ? `<div class="wd-hero">${hero}</div>` : ''}
                <div class="wd-body"></div>
                ${infoHTML}
                ${moreHTML}
            </article>`;

        modal.classList.add('show');
        modal.scrollTop = 0;
        document.body.style.overflow = 'hidden';

        // Images need their ratios before rows can be built
        const token = Symbol();
        showWorkModal.token = token;
        const items = await Promise.all((work.images || []).map(u => loadImage(cl(u, 'full'))));
        if (showWorkModal.token !== token) return; // another work was opened meanwhile

        let bodyHTML = '';
        let rest = items;
        if (hasText && items.length) {
            // creatorlink-style: first image on the left, text on the right
            bodyHTML += `<div class="wd-split"><figure><img src="${items[0].src}" alt="${title}" class="wd-zoom"></figure>${textHTML}</div>`;
            rest = items.slice(1);
        } else if (hasText) {
            bodyHTML += `<div class="wd-split wd-split-text">${textHTML}</div>`;
        }
        bodyHTML += buildRows(rest).map(r => rowHTML(r, title)).join('');
        modalBody.querySelector('.wd-body').innerHTML = bodyHTML;

        modalBody.querySelectorAll('.wd-zoom').forEach(img => {
            img.addEventListener('click', () => { if (openLightbox) openLightbox(img.src); });
        });
        modalBody.querySelectorAll('.wd-more-item').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                history.pushState(null, '', '#work/' + a.dataset.slug);
                openModalBySlug(a.dataset.slug);
            });
        });
    }
    // Open modal by slug (for deep linking)
    function openModalBySlug(slug) {
        const work = WORKS.find(w => w.slug === slug);
        if (work) {
            showWorkModal(work);
        }
    }

    function buildCards() {
        const gridWork = document.getElementById('grid-work');
        const gridProject = document.getElementById('grid-project');
        if (!gridWork || !gridProject) return;

        gridWork.innerHTML = '';
        gridProject.innerHTML = '';

        // Featured items first (in this order), the rest shuffled on every load
        const FEATURED = {
            project: ['the-murderers-report-movie', 'patek-philippe-brand-media-art', 'newmix-coffee', 'the-hyundai-ooh'],
            work: ['atelier-nodeul-opening-exhibition', 'paradise-art-lab-festival', 'seoul-light-bitseom-festival',
                'crystals', 'huracan', 'saic-audi-beyond-human-emotion-history'],
        };
        const shuffle = (arr) => {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        };
        const ordered = ['project', 'work'].flatMap(cat => {
            const items = WORKS.filter(w => w.category === cat);
            const featured = FEATURED[cat].map(slug => items.find(w => w.slug === slug)).filter(Boolean);
            return [...featured, ...shuffle(items.filter(w => !featured.includes(w)))];
        });

        ordered.forEach(work => {
            const card = document.createElement('a');
            card.className = 'work-card fade-in';
            card.href = '#';
            card.setAttribute('data-category', work.category);
            card.setAttribute('data-slug', work.slug || '');

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
        setupMasonry([gridWork, gridProject]);
    }

    // Row-first masonry: each card spans grid rows (4px units) matching its height,
    // so the grid keeps left→right reading order while columns stay packed.
    function setupMasonry(grids) {
        const layout = (grid) => {
            const rowUnit = parseFloat(getComputedStyle(grid).gridAutoRows) || 4;
            const gap = 32;
            // clear pinned columns first: a card pinned to column 2 creates an implicit track,
            // which would make a 1-column pane still report 2 columns
            const cards = grid.querySelectorAll('.work-card');
            cards.forEach(card => { card.style.gridColumn = ''; });
            const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
            grid.querySelectorAll('.work-card').forEach((card, i) => {
                // pin columns so importance order alternates strictly left, right, left…
                card.style.gridColumn = cols > 1 ? String((i % cols) + 1) : 'auto';
                card.style.gridRowEnd = 'auto';
                const h = card.getBoundingClientRect().height;
                card.style.gridRowEnd = `span ${Math.ceil((h + gap) / rowUnit)}`;
            });
        };
        grids.forEach(grid => {
            if (!grid) return;
            grid.querySelectorAll('img').forEach(img => {
                if (!img.complete) img.addEventListener('load', () => layout(grid), { once: true });
            });
            // column count changes with the pane hover animation → relayout on width change
            new ResizeObserver(() => layout(grid)).observe(grid);
            layout(grid);
        });
        // the column template switches the moment expand-left/right changes
        const split = document.querySelector('.split-section');
        if (split) {
            new MutationObserver(() => grids.forEach(g => g && layout(g)))
                .observe(split, { attributes: true, attributeFilter: ['class'] });
        }
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
                const slug = card.getAttribute('data-slug');
                if (slug) {
                    // Update URL hash (this triggers hashchange which opens the modal)
                    history.pushState(null, '', '#work/' + slug);
                    openModalBySlug(slug);
                }
            });
        });
    }


    // ─── Initialization ───────────────────────────────────────────────

    // Initial Animation
    if (heroDesc) {
        blurReveal(heroDesc, heroDesc.getAttribute(`data-${currentLang}`));
    }

    // Logo naturally navigates to the intro page (index.html)

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
    const closeFunc = () => {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
        // Remove hash without triggering hashchange scroll
        if (window.location.hash) {
            history.pushState(null, '', window.location.pathname + window.location.search);
        }
    };
    if (modal) {
        const closeModal = modal.querySelector('.close-modal');
        if (closeModal) closeModal.addEventListener('click', closeFunc);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeFunc(); });
    }

    // Lightbox Logic
    if (lightbox && lightboxImg) {
        const closeBtn = lightbox.querySelector('.close-lightbox');
        openLightbox = (src) => {
            lightboxImg.src = src;
            lightbox.classList.add('show');
        };
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
                closeFunc();
            }
        }
    });

    // ─── Deep Link: Hash-based routing ────────────────────────────────
    function handleHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#work/')) {
            const slug = hash.replace('#work/', '');
            openModalBySlug(slug);
        }
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        if (window.location.hash.startsWith('#work/')) {
            handleHash();
        } else {
            // Hash removed — close modal
            if (modal && modal.classList.contains('show')) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        }
    });

    // Check hash on page load
    handleHash();

});
