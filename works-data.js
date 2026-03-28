/* =============================================
   JNGYS Portfolio — Works Data
   All work items live here. Edit this file to
   add, remove, or update portfolio entries.

   Cloudinary URL pattern:
     Thumbnail (grid):  /upload/q_auto,f_auto,w_700/
     Full-size (modal): /upload/q_auto,f_auto,w_1600/
   ============================================= */

// Helper: inject Cloudinary transforms into a URL
function cl(url, size = 'thumb') {
    if (!url) return url;
    // Skip if it's a video URL (handled separately), or already has transforms
    if (url.includes('/video/upload/')) return url;
    const transform = size === 'thumb' ? 'q_auto,f_auto,w_700' : 'q_auto,f_auto,w_1600';
    return url.replace('/upload/', `/upload/${transform}/`);
}

const WORKS = [
    // ─── 2025 ──────────────────────────────────────────────────────────────
    {
        slug: 'atelier-nodeul-opening-exhibition',
        title: 'Atelier Nodeul Opening Exhibition',
        year: 2025,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058228/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_xwqbfj.webp',
        descKo: "<b>자연의 호흡과 도시의 맥박이 교차하는 섬, 노들</b><br>서울의 중심을 관통하는 한강과 그 위를 부유하는 상징적인 공간 노들섬을 배경으로, 자연의 환경과 도시의 역동성이 맺는 관계를 미디어아트로 풀어냈습니다. 끊임없이 이동하는 사람들과 차들, 도시의 주요한 혈맥인 한강의 흐름 속에서 섬이 품고 있는 '바람'과 '조화'에 주목했습니다.<br><br><b>전시 작품</b><br><b>1. 로즐린 (Roslyn) 연작</b><br>Concept: 색채의 전이와 연결<br>Description: 노들섬이라는 물리적 공간에서 시작된 시각적 에너지가 한강의 수면으로 유려하게 이어지는 과정을 담았습니다. 공간을 채우는 섬세한 색감의 확장을 통해, 단절되어 있던 섬과 강의 경계를 허물고 시각적인 조화를 유도합니다.<br><br><b>2. 후라칸 (Huracan)</b><br>Concept: 보이지 않는 바람의 시각화<br>Description: 한강을 스치는 차갑고 예리한 물바람과, 쉼 없이 교차하는 도시의 빠르고 역동적인 호흡을 융합했습니다. 도시와 자연이 부딪히며 만들어내는 거칠지만 생동감 넘치는 바람의 에너지를 시각적으로 포착해 낸 작업입니다.",
        descEn: "<b>An Island Where the Breath of Nature and the Pulse of the City Intersect, Nodeul</b><br>Set against the backdrop of Nodeul Island, a symbolic space floating above the Han River that pierces the center of Seoul, this media art explores the relationship between the natural environment and urban dynamism. Amidst the endless movement of people and vehicles, and the flow of the Han River—the city's main artery—we focused on the 'wind' and 'harmony' embraced by the island.<br><br><b>Exhibition Works</b><br><b>1. Roslyn Series</b><br>Concept: Transition and Connection of Color<br>Description: It captures the process by which visual energy originating from the physical space of Nodeul Island flows gracefully onto the surface of the Han River. Through the expansion of delicate colors filling the space, it breaks down the boundaries between the island and the river, inducing visual harmony.<br><br><b>2. Huracan</b><br>Concept: Visualization of the Invisible Wind<br>Description: It fuses the cold, sharp water breeze brushing past the Han River with the fast, dynamic breath of the endlessly crossing city. This work visually captures the rough yet vibrant energy of the wind created by the collision between the city and nature.",
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058231/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%ED%9B%84%EB%9D%BC%EC%B9%B8_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_ynwg8t.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773810711/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_4__%EA%B2%B0%EA%B3%BC_jvlrhw.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058231/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%ED%9B%84%EB%9D%BC%EC%B9%B8_3__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_ljoar2.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773810701/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_3__%EA%B2%B0%EA%B3%BC_uvcbcz.webp',
        ],
    },
    {
        slug: 'the-murderers-report-movie',
        title: "The Murderer's Report Movie",
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050590/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B805_ahjjfu.jpg',
        genre: 'Film Art Direction / Media Art Collaboration',
        descKo: "<b>Film:</b> &lt;살인자 리포트&gt; (주연: 정성일, 조여정)<br><br><b>Concept:</b> 영화의 서사와 호흡하는 미디어아트, 감정선의 시각적 변주<br><br><b>Description:</b><br>정성일, 조여정 주연의 영화 <i>&lt;살인자 리포트&gt;</i> 극 중에 등장하는 주요 미디어아트 작업을 총괄한 프로젝트입니다. 스크린 속 공간을 채우는 단순한 시각적 배경을 넘어, 작가가 구축해 온 기존의 미디어아트 컬렉션들이 영화의 극적인 흐름에 직접적으로 개입하고 서사를 이끌어가는 중요한 매개체로 활용되었습니다.<br><br>작품은 극의 전개와 인물들의 감정선에 발맞추어 총 세 가지의 각기 다른 테마로 변모합니다. 제너러티브 아트 특유의 유기적인 움직임과 형태의 변화가 영화의 긴장감과 몰입도를 극대화하며, 서사의 층위를 한층 더 깊게 만드는 역할을 수행합니다.<br><br>작가 고유의 작업 세계가 상업 영화의 미장센과 완벽하게 융합된 이 프로젝트는 영화의 핵심적인 장면들 곳곳에 비중 있게 등장할 뿐만 아니라, 영화의 얼굴이라 할 수 있는 메인 포스터의 배경으로도 선정되어 그 미학적 가치를 증명했습니다.",
        descEn: "<b>Film:</b> <i>The Murderer's Report</i> (Starring: Jung Sung-il, Cho Yeo-jeong)<br><br><b>Concept:</b> Media art that breathes with the film's narrative, visual variations of emotional lines<br><br><b>Description:</b><br>This is a project that directed the main media artwork appearing in the film <i>The Murderer's Report</i>, starring Jung Sung-il and Cho Yeo-jeong. Going beyond a simple visual background filling the screen, the artist's existing media art collections interceded directly into the dramatic flow of the film and were used as an important medium to lead the narrative.<br><br>The artwork transforms into three distinctly different themes in step with the development of the play and the emotional lines of the characters. The organic movement and formal changes unique to generative art maximize the film's tension and immersion, playing a role in deepening the layers of the narrative.<br><br>Perfectly fusing the artist's unique working world with the mise-en-scène of commercial film, this project not only appears prominently in key scenes of the film but was also selected as the background for the main poster—the face of the film—proving its aesthetic value.",
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050592/%ED%8F%AC%EC%8A%A4%ED%84%B0_o1d1xu.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050597/edit_size02_p14ocj.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050588/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B804_wwd2ra.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050585/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B803_l701ux.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050583/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B802_nygocs.jpg',
        ],
    },
    {
        slug: 'patek-philippe-brand-media-art',
        title: 'Patek Philippe Brand Media Art',
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050566/Patek_pqk8gp.png',
        genre: 'Interactive Media Art / Brand Collaboration',
        descKo: "<b>Brand:</b> 파텍필립 (Patek Philippe)<br><br><b>Concept:</b> 상징적 사각 프레임의 3차원적 재해석과 관객 주도형 인터랙션<br><br><b>Description:</b><br>최상위 하이엔드 타임피스 브랜드 파텍필립(Patek Philippe)과 함께한 인터랙티브 미디어아트 프로젝트입니다. 브랜드의 오랜 헤리티지를 보여주는 우아한 사각 프레임의 실루엣에서 영감을 받아, 이를 3차원의 정육면체 큐브 공간으로 확장하고 재해석했습니다.<br><br>작품은 큐브를 이루는 세 개의 면을 캔버스 삼아 다각도로 전개됩니다. 관람객이 큐브 안팎에서 자유롭게 움직이고 머무는 동안, 화면 속 미디어아트는 관람객의 행위에 실시간으로 반응하며 유기적인 상호작용을 만들어냅니다.<br><br>정교하게 맞물려 돌아가는 시계의 무브먼트처럼 관람객의 우연한 움직임과 디지털 알고리즘이 정밀하게 교감하며 매 순간 고유한 시각적 경험을 창조합니다. 파텍필립이 지향하는 시공간의 철학을 3차원의 공감각적인 미디어아트로 몰입감 있게 풀어낸 작업입니다.",
        descEn: "<b>Brand:</b> Patek Philippe<br><br><b>Concept:</b> 3D reinterpretation of the symbolic square frame and audience-driven interaction<br><br><b>Description:</b><br>This is an interactive media art project in collaboration with the top-tier high-end timepiece brand Patek Philippe. Inspired by the elegant silhouette of the square frame that demonstrates the brand's long heritage, it was expanded and reinterpreted into a three-dimensional cubic space.<br><br>The artwork unfolds from multiple angles using the three faces forming the cube as a canvas. While audiences move freely inside and outside the cube, the media art on the screen responds in real-time to their actions, creating organic interaction.<br><br>Like a finely interlocking clock movement, the serendipitous movements of audiences and digital algorithms precisely commune, creating a unique visual experience at every moment. It is a work that immersively unravels Patek Philippe's philosophy of time and space through three-dimensional, synesthetic media art.",
    },
    {
        slug: 'huracan',
        title: 'Huracan',
        year: 2025,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050549/Storm_Feild_03_krdsbi.jpg',
        descKo: "<b>Medium & Tech:</b> Video, TouchDesigner, GLSL Shader, Algorithm-based generative work<br><b>Specification:</b> 10 min, Variable installation, 6000 × 3000 px<br><br><b>Concept:</b> 디지털 생태계로 번역된 자연의 운동과 힘<br><br><b>Description:</b><br>'후라칸(Huracan)'은 알고리즘으로 생성된 수십만 개의 입자가 만들어내는 거대한 소용돌이를 탐구합니다. 무수히 많은 입자들이 유기적인 흐름 속에서 충돌하고 균형을 이루며, 마치 인공위성에서 내려다본 지구의 대기나 휘몰아치는 눈보라를 연상시키는 추상적인 힘의 무늬를 만들어냅니다. 음영과 깊이감을 처리하는 셰이더(Shader) 기술을 통해, 자연의 움직임과 힘을 우주적 규모의 디지털 미학적 경험으로 번역해 낸 작업입니다.",
        descEn: "<b>Medium & Tech:</b> Video, TouchDesigner, GLSL Shader, Algorithm-based generative work<br><b>Specification:</b> 10 min, Variable installation, 6000 × 3000 px<br><br><b>Concept:</b> The movement and force of nature translated into a digital ecosystem<br><br><b>Description:</b><br>'Huracan' explores a massive vortex of algorithmically generated particles. Hundreds of thousands of particles collide and balance in an organic flow, creating abstract fields of force that resemble satellite views of Earth's atmosphere or swirling snowscapes. Through shader-based depth and shading, this work translates natural movements and forces into a cosmic-scale digital aesthetic experience.",
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050556/Storm_Feild_07_dfw0pk.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050553/Storm_Feild_05_ba6uid.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050542/rotate4_a0i7r8.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050530/random_mvr8pd.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050509/0726_3_qjzkyc.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050523/Mulit03_0827_tpolqk.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050521/Mulit02_0827_bniizd.jpg',
        ],
    },

    // ─── 2024 ──────────────────────────────────────────────────────────────
    {
        slug: 'abstraction',
        title: 'Abstraction',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813577/Visang_Abstraction_5__%EA%B2%B0%EA%B3%BC_rsh8fk.webp',
        genre: 'Public Art / Media Art',
        descKo: "<b>Location & Status:</b><br>- 과천 비상교육 신사옥 (설치 완료)<br>- 세종 신라스테이 (2026년 오픈 예정)<br><br><b>Concept:</b> 제3의 회화, 찰나의 미학<br><br><b>Description:</b><br>'로즐린(Roslyn)' 시리즈의 미학적 연장선에 놓인 작업으로, 전통적인 캔버스의 한계를 넘어선 '제3의 회화'를 실험합니다. 디지털 매체가 가진 유동성을 활용하여 일상 속에서 스쳐 지나가는 찰나의 아름다움을 포착하고, 이를 영구적인 공공의 공간(Public Space)에 투영합니다. 건축물과 유기적으로 호흡하며, 관람객에게 매 순간 변화하는 시각적 경험을 선사하는 미디어 공공미술 작품입니다.",
        descEn: "<b>Location & Status:</b><br>- Gwacheon Visang New Headquarters (Installation Complete)<br>- Sejong Shilla Stay (Opening 2026)<br><br><b>Concept:</b> The third painting, the aesthetics of fleeting moments<br><br><b>Description:</b><br>As an aesthetic extension of the 'Roslyn' series, this work experiments with a 'third painting' that transcends the limitations of traditional canvases. By utilizing the fluidity of digital media, it captures the transient beauty of fleeting moments in everyday life and projects it into a permanent public space. It is a media public artwork that breathes organically with the architecture, offering viewers a visual experience that changes every moment.",
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813586/Visang_Abstraction_2__%EA%B2%B0%EA%B3%BC_kbrkho.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813583/Visang_Abstraction_7__%EA%B2%B0%EA%B3%BC_emjpwl.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048713/Visang_Abstraction_Visang_8_qib3x4.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048710/Visang_Abstraction_Visang_6_rxugnb.jpg'
        ]
    },
    {
        slug: 'gosan',
        title: 'Gosan',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048766/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_6_tayhcg.jpg',
        genre: 'Live Visual / VJing / Media Art',
        descKo: "<b>Event:</b> 실리카겔(Silica Gel) 콘서트 'Syn.THE.Size III' (May 17-19)<br><b>Associated Music:</b> 실리카겔 - '고산' (Album: <i>POWER ANDRE 99</i>)<br><br><b>Concept:</b> 압도적 설경의 시각화, 시선과 인공지능의 교차<br><br><b>Description:</b><br>'고산'은 밴드 실리카겔의 앨범 <i>POWER ANDRE 99</i> 수록곡을 위한 라이브 시각 작업입니다. 이름이 뜻하는 거대한 '높은 산'에서 마주한 웅장하고 차가운 설경, 그리고 그 경이로운 풍경을 응시하는 '눈(Gaze)'의 심상을 겹쳐내어 시각적으로 구현했습니다.<br><br>이 작업은 창작의 영역을 확장하기 위한 새로운 매체적 실험의 일환입니다. 작가가 구축해 온 제너러티브 아트 기반의 작업 프로세스에 생성형 AI 이미지를 유기적으로 믹스하여, 인간의 의도된 연산과 AI의 예측 불가능한 이미지 생성이 충돌하고 융합하는 낯설고도 매혹적인 질감을 만들어냈습니다.<br><br>해당 작품은 단독 콘서트 'Syn.THE.Size III'의 무대 위 라이브 VJing 퍼포먼스에 사용되어, 음악이 가진 공간감과 서사를 증폭시키며 관객들에게 강렬한 공감각적 몰입감을 선사했습니다.",
        descEn: "<b>Event:</b> Silica Gel Concert 'Syn.THE.Size III' (May 17-19)<br><b>Associated Music:</b> Silica Gel - 'Gosan' (Album: <i>POWER ANDRE 99</i>)<br><br><b>Concept:</b> Visualization of an overwhelming snowscape, the intersection of gaze and artificial intelligence<br><br><b>Description:</b><br>'Gosan' is a live visual work for the track from the band Silica Gel's album <i>POWER ANDRE 99</i>. It visually superimposes the grand and cold snowscape encountered on a massive 'high mountain', as its name implies, and the imagery of the 'Gaze' observing that wondrous scenery.<br><br>This work is part of a new media experiment to expand the realm of creation. By organically mixing generative AI images into the artist's generative art-based workflow, it creates an unfamiliar yet fascinating texture where deliberate human computation collides and merges with unpredictable AI image generation.<br><br>It was used in a live VJing performance on stage at the solo concert 'Syn.THE.Size III', amplifying the spatiality and narrative of the music and providing the audience with an intense synesthetic immersion.",
        credits: {
            'VJ': '@team__node',
            'Organized by': '@msbsound @noahsfilmo'
        },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048765/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_5_y5s6ug.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048767/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_1_cgc34b.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048768/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_2_r2putj.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048769/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_3_njegmu.jpg'
        ]
    },
    {
        slug: 'paradise-art-lab-festival',
        title: 'Paradise Art Lab Festival',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048771/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_7_tt4gsf.jpg',
        genre: "Media Facade / Generative Art",
        descKo: "파라다이스 아트랩(Paradise Art Lab) 2024 장충 선정작<br><br>'공생하는 무늬'는 살아 숨 쉬는 세계가 품고 있는 유기적인 패턴을 탐구하는 거대한 미디어 파사드 작업입니다. 영국의 수학자 앨런 튜링(Alan Turing)이 제안한 '반응-확산 시스템(Reaction-Diffusion System)' 이론을 근간으로 삼아, 자연계에서 자발적으로 발생하는 복잡하고도 아름다운 무늬들을 '확산(Diffusion)'과 '억제(Inhibition)'라는 두 가지 수학적 규칙의 상호작용으로 재해석하여 화면 위에 시각화했습니다.",
        descEn: "Paradise Art Lab 2024 Jangchung Selected Work<br><br>'Patterns of Symbiosis' is a massive media facade artwork that explores the organic patterns embraced by the living world. Based on the 'Reaction-Diffusion System' theory proposed by British mathematician Alan Turing, spontaneously occurring complex and beautiful patterns in nature are reinterpreted and visualized on screen through the interaction of two mathematical rules: 'Diffusion' and 'Inhibition'.",
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048778/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_6_ubxbgk.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048775/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_4_olnuhi.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048776/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_5_ikwxf0.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048772/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_1_m95ous.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048775/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_3_to0ufu.jpg',
        ],
    },
    {
        slug: 'newmix-coffee',
        title: 'Newmix Coffee',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048763/newmix_nj6b7p.jpg',
        credits: {
            Team: '@newmixcoffee.kr',
            Sound: 'Studio Namsan, Jeon Yongheyeon',
            Space: '@ggjh.kr',
            'Media Art': 'Joung Yunsu',
            Adviser: 'Kim bongjin',
            Photograph: 'Park yoochun',
        },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048761/newmix_%EC%84%B1%EC%88%98_7_qgxlju.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048760/newmix_%EC%84%B1%EC%88%98_6_wzq8nm.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048759/newmix_%EC%84%B1%EC%88%98_5_bdfxgh.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048758/newmix_%EC%84%B1%EC%88%98_4_moiyau.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048757/newmix_%EC%84%B1%EC%88%98_3_ykmsx6.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048756/newmix_%EC%84%B1%EC%88%98_2_kuphf3.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048755/newmix_%EC%84%B1%EC%88%98_1_twr4hn.jpg',
        ],
    },
    {
        slug: 'villa-somme-ulleungdo',
        title: 'Villa Somme Ulleungdo',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9422_%EA%B2%B0%EA%B3%BC_hfbjar.webp',
        genre: 'Immersive Media Art / Wellness Installation',
        descKo: "<b>Location:</b> 울릉도 빌라쏘메(Villa Somme) 리조트 내 '면역공방'<br><br><b>Concept:</b> 음양오행(陰陽五行)의 시각화, 치유와 명상을 위한 40분의 시청각적 여정<br><br><b>Description:</b><br>울릉도의 최고급 휴양 시설인 빌라쏘메(Villa Somme) 리조트의 프리미엄 스톤 테라피 공간인 '면역공방'을 위해 기획된 몰입형 미디어아트 작업입니다. 천연 파동석 위에 누워 체내 독소를 배출하고 에너지를 회복하는 공간의 특수성을 고려하여, 관람객이 깊은 명상과 완벽한 휴식에 이를 수 있도록 장장 40분에 달하는 호흡의 시청각적 서사를 구축했습니다.<br><br>작품은 동양 철학의 근원인 '음양오행(陰陽五行)' 사상을 관통합니다. 생명의 근원인 물(水)에서 시작해 나무(木)의 생명력, 불(火)의 역동성, 흙(土)의 포용력, 그리고 금(金)의 단단함으로 이어지며 끊임없이 순환하고 상생하는 대자연의 에너지를 유기적이고 웅장하게 시각화했습니다.<br><br>공간의 따뜻한 열기와 함께 몸이 정화되는 동안 펼쳐지는 이 기나긴 시각적 여정은, 관람객을 단순한 관찰자가 아닌 자연의 거대한 순환 속에 동화되는 주체로 이끕니다. 미디어아트와 웰니스(Wellness)가 결합하여 궁극의 치유를 선사하는 이 작품은 현재 울릉도 빌라쏘메 리조트 공간 내에서 상설로 운영되며 특별한 공감각적 체험을 제공하고 있습니다.",
        descEn: "<b>Location:</b> 'Immunity Spa' in Villa Somme Resort, Ulleungdo<br><br><b>Concept:</b> Visualization of Yin-Yang and the Five Elements, a 40-minute audiovisual journey for healing and meditation<br><br><b>Description:</b><br>This is an immersive media art work designed for the 'Immunity Spa', a premium stone therapy space at Villa Somme Resort, the top-tier luxury retreat in Ulleungdo. Considering the spatial specificity where visitors lie on natural wave stones to expel bodily toxins and recover energy, a respiratory audiovisual narrative spanning a full 40 minutes was constructed so that audiences can reach deep meditation and perfect rest.<br><br>The artwork penetrates the thought of 'Yin-Yang and the Five Elements', the root of Eastern philosophy. Starting from water (水), the source of life, to the vitality of wood (木), the dynamism of fire (火), the embrace of earth (土), and the solidity of metal (金), it organically and magnificently visualizes the endlessly circulating and mutually beneficial energy of Mother Nature.<br><br>This lengthy visual journey, unfolding while the body is purified by the warm heat of the space, leads the audience to become subjects assimilating into the massive cycle of nature rather than mere observers. Combining media art and wellness to provide ultimate healing, this artwork is currently permanently operating within the Villa Somme Resort in Ulleungdo, offering a special synesthetic experience.",
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649413/DSC9178_%EA%B2%B0%EA%B3%BC_r0lndo.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649411/DSC9253_%EA%B2%B0%EA%B3%BC_c9rqtp.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649410/DSC9375_1__%EA%B2%B0%EA%B3%BC_isxizx.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649408/DSC9451_%EA%B2%B0%EA%B3%BC_hpeqpw.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649406/DSC9588_%EA%B2%B0%EA%B3%BC_qxlngs.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649404/DSC9912_%EA%B2%B0%EA%B3%BC_pcxcxv.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649403/DSC9028_%EA%B2%B0%EA%B3%BC_b86boy.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649402/DSC9361_%EA%B2%B0%EA%B3%BC_nk4jvv.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649409/DSC9398_%EA%B2%B0%EA%B3%BC_p4xs9r.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9407_%EA%B2%B0%EA%B3%BC_jfa7f7.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649394/DSC8973_%EA%B2%B0%EA%B3%BC_bvjpf2.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649390/008_%EA%B2%B0%EA%B3%BC_tatkpv.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649392/DSC9160_%EA%B2%B0%EA%B3%BC_dwr1dh.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649389/009_%EA%B2%B0%EA%B3%BC_etbsdd.webp',
        ],
    },
    {
        slug: 'a-museum-manila',
        title: 'A Museum Manila',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649616/4%E1%84%80%E1%85%AA%E1%86%AB__6244_1__%EA%B2%B0%EA%B3%BC_rdybiv.webp',
        genre: 'Interactive Media Art / Visual Art',
        descKo: "<b>Location:</b> a:museum (마닐라, 필리핀)<br><br><b>Concept:</b> 관람객의 발끝에서 역동적으로 피어나는 물감의 향연<br><br><b>Description:</b><br>필리핀 마닐라의 대규모 몰입형 전시 공간인 'a:museum'에 상설 전시된 인터랙티브 플로어(Floor) 작업입니다. 라이다(LiDAR) 센서로 인식된 관람객의 걸음과 움직임에 실시간으로 반응하도록 시각(Visual) 연출을 담당했습니다.<br><br>관람객이 바닥을 디딜 때마다 다채로운 색상의 물감이 터지듯 번지고, 주변의 색들과 유기적으로 섞여 들어가는 화려한 시각적 효과를 구현했습니다. 복잡한 설명 없이도 관람객이 공간을 거닐며 직관적으로 거대한 추상화를 완성해 나가는 즐거운 공감각적 체험을 선사합니다.",
        descEn: "<b>Location:</b> a:museum (Manila, Philippines)<br><br><b>Concept:</b> A dynamic feast of paint blooming at the audience's feet<br><br><b>Description:</b><br>This is an interactive floor artwork permanently exhibited at 'a:museum', a large-scale immersive exhibition space in Manila, Philippines. It was visually directed to respond in real-time to the steps and movements of the audience, captured by LiDAR sensors.<br><br>Whenever an audience steps on the floor, it implements a brilliant visual effect where colorful paints spread out spherically and organically mix with surrounding colors. Without complex explanations, it provides audiences with a joyful synesthetic experience of intuitively completing a massive abstract painting as they stroll through the space.",
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649619/4%E1%84%80%E1%85%AA%E1%86%AB__6475_%EA%B2%B0%EA%B3%BC_h8pyus.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649618/4%E1%84%80%E1%85%AA%E1%86%AB__6469_%EA%B2%B0%EA%B3%BC_fvqlrf.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649615/4%E1%84%80%E1%85%AA%E1%86%AB__6478_%EA%B2%B0%EA%B3%BC_vc5qcy.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649614/4%E1%84%80%E1%85%AA%E1%86%AB__5994_%EA%B2%B0%EA%B3%BC_antlnt.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649613/4%E1%84%80%E1%85%AA%E1%86%AB__6453_%EA%B2%B0%EA%B3%BC_xujhho.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649611/4%E1%84%80%E1%85%AA%E1%86%AB__6496_1__%EA%B2%B0%EA%B3%BC_f6cpxq.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649610/4%E1%84%80%E1%85%AA%E1%86%AB__6496_2__%EA%B2%B0%EA%B3%BC_p6c1sp.webp',
        ],
    },

    // ─── 2023 ──────────────────────────────────────────────────────────────
    {
        slug: 'seoul-light-bitseom-festival',
        title: 'Seoul Light Bitseom Festival',
        year: 2023,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048704/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_2_cm6isi.jpg',
        genre: "Immersive Media Art / Installation",
        descKo: "스피어 (Sphere)<br>근원적 형태의 무한한 확장, 미시와 거시를 가로지르는 우주적 여정<br>'&lt;Sphere&gt;'는 서울라이트 한강빛섬축제의 첫 시작을 알린 미디어아트 작업으로, 거대 구조물인 '하이퍼드라이브(Hyper Drive)' 내부에서 관람객을 압도적인 시공간의 변화 속으로 이끕니다. 총 세 개의 체험형 작품 중 중심에 위치한 이 작업은, 어떤 근원적인 형태가 무한히 확장하고 변화하는 과정을 웅장하게 그려냅니다.",
        descEn: "Sphere<br>An infinite expansion of fundamental forms, a cosmic journey crossing the micro and the macro<br>'&lt;Sphere&gt;' is the opening media artwork of the Seoul Light Hangang Bitseom Festival, leading audiences into an overwhelming transformation of time and space inside the massive structure 'Hyper Drive'. Positioned at the center of three experiential installations, this piece magnificently depicts the process of a fundamental shape expanding and changing infinitely.",
        credits: { Music: 'KOHUI', '3D Artist': 'Jeong Yoona' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048703/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_1_mqh5ga.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048702/Seoul_Light_Sphere_5_ccb2xt.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048701/Seoul_Light_Sphere_4_ov7spi.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048700/Seoul_Light_Sphere_3_qem15d.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048699/Seoul_Light_Sphere_2_m12rh2.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048698/Seoul_Light_Sphere_1_hj2zmc.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048697/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_3_npipou.jpg',
        ],
    },
    {
        slug: 'kolon-hannam',
        title: 'Kolon Hannam',
        year: 2023,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048695/Kolon-Sports_-New-Breath-01_hrrsik.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048696/Kolon_Sports_New_Breath_02_uxvyqn.jpg',
        ],
    },
    {
        slug: 'hyundai-mobis-lobby-media-art',
        title: 'Hyundai Mobis Lobby Media Art',
        year: 2023,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048690/%ED%98%84%EB%8C%80%EB%AA%A8%EB%B9%84%EC%8A%A4_3_nhv9d3.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048694/Hyundai_Mobis_pwtafd.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144864/c3be18ac-f07a-4307-8667-10002e89212f.png',
        ],
    },
    {
        slug: 'sulwhasoo-concentrated-ginseng-cream',
        title: 'Sulwhasoo Concentrated Ginseng Cream',
        year: 2023,
        category: 'project',
        // Cloudinary video thumbnail for grid, actual video for modal
        main: 'https://res.cloudinary.com/dbgr7vngr/video/upload/so_0/v1773650580/0405_instar_dbkoqw.jpg',
        video: 'https://res.cloudinary.com/dbgr7vngr/video/upload/v1773650580/0405_instar_dbkoqw.mp4',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650575/230407_5_yod79n.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650668/230407_1_b0jmki.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650670/230407_3_r8kblo.jpg',
        ],
    },

    // ─── 2022 ──────────────────────────────────────────────────────────────
    {
        slug: 'saic-audi-beyond-human-emotion-history',
        title: 'SAIC AUDI Beyond Human Emotion & History',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048679/%EC%95%84%EC%9A%B0%EB%94%94_1_azz6gb.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048676/%EC%95%84%EC%9A%B0%EB%94%94_4_nnsdvt.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048675/%EC%95%84%EC%9A%B0%EB%94%94_3_eyornw.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048674/%EC%95%84%EC%9A%B0%EB%94%94_2_nlzuf9.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048678/%EC%95%84%EC%9A%B0%EB%94%94_%EC%8B%9C%EB%AE%AC_2_vs6cqa.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048677/%EC%95%84%EC%9A%B0%EB%94%94_%EC%8B%9C%EB%AE%AC_1_fmqrdu.png',
        ],
    },
    {
        slug: 'save-the-planet',
        title: 'Save The Planet',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048656/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_9_cyekd3.jpg',
        descEn: "&lt;SAVE THE PLANET&gt; is a convergence performance of media art and string quartet. It expresses the present that includes the culprit of the pandemic, the seriousness of the environmental problem, and also the crisis of climate change. It provides a chance to contemplate about the importance of environment for the sound future.<br><br><b>&lt;Performance&gt;</b><br>2022.3.30 19:00(KST)<br>GS Caltex Yeulmaru Grand Theater (Yeosu)<br>Hosted by: Jeollanam-do, Yeosu City",
        credits: {
            'Music': 'VRI STRING QUARTET (Yongeun Park, Sunghee Ko, Seunggu Lee, Jibak) @vri_string_quartet_vsq',
            'Guest': 'Bumjun Ko @ko_bum_jun',
            'Media Art': 'Joung Yunsu @joungyunsu',
            'MV': 'Chamsae Kim @kimchamsae',
            'Director': 'Hanna Jung @b_ingbing',
            'Sound': 'Sangyong Min',
            'Lighting': 'Harim Kim, Sanghyun Park',
            'Camera': 'Soonyoung Jung, Minho Kwon',
            'Design': 'Hayoung So',
            'Organizer': 'Moosunji @moosunji'
        },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048669/storm_g2qcf7.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048667/Storm_03_alww2g.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048664/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_8_r40n0t.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048663/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_7_vsingd.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048662/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_6_nqgpwd.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048661/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_5_etrazd.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048660/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_4_ynq3ce.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048659/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_3_mtob1g.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048658/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_2_qisjad.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048657/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_1_vzuueg.jpg',
        ],
    },
    {
        slug: 'printf-human-odyssey',
        title: 'Printf "Human Odyssey"',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773049103/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_01_%EA%B2%B0%EA%B3%BC_zfkoj1.webp',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048669/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_02_h9yqcb.jpg',
        ],
    },
    {
        slug: 'samsung-sdi-primx-exhibition',
        title: 'Samsung SDI PRIMX Exhibition',
        year: 2022,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144813/449ed962-0d8d-49b5-9226-2cc44067e193.png',
    },
    {
        slug: 'the-hyundai-ooh',
        title: 'The Hyundai OOH',
        year: 2022,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048672/Roslyn_Earth_1_bjjequ.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048673/Roslyn_Earth_2_ueyl8q.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048671/Roslyn_Earth_3_f7livf.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048649/%EB%8D%94%ED%98%84%EB%8C%80_%EC%B2%9C%ED%98%B8%EC%A0%90_wayph4.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048644/%EB%8D%94%ED%98%84%EB%8C%80_1_v1jpad.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048647/%EB%8D%94%ED%98%84%EB%8C%80_2_o2og5d.jpg',
        ],
    },

    // ─── 2021 ──────────────────────────────────────────────────────────────
    { slug: 'crystals', title: 'Crystals (2021, 2025 Digital November MetaSensing)', year: '2021, 2025', category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048606/Crystals_%EC%A0%84%EC%8B%9C_2_muslfy.jpg',
        genre: 'Solo Exhibition / Data Art / Generative Art',
        descKo: "<b>Concept:</b> 가상화폐 데이터의 시각화, 광물 결정화 과정에 빗댄 현대 자본의 유기적 움직임<br><br><b>Description:</b><br>작가의 첫 개인전에서 선보인 &lt;Crystals&gt;(2021)는 지구 표면 깊은 곳에서 오랜 시간 축적되는 광물의 결정화 과정을 '가상화폐(Cryptocurrency)'의 실시간 데이터와 교차시켜, 가상 공간 속 새로운 데이터 결정체로 시각화한 작업입니다.<br><br>자연의 암석이 외부의 불순물과 결합하며 고유한 결정체를 빚어내듯, 현대 사회의 가상화폐 역시 단순한 시장 논리를 넘어 유명인의 발언이나 정부 정책과 같은 통제 불가능한 외부 요인, 즉 '데이터 불순물'들과 끊임없이 충돌하며 그 가치를 형성합니다. 작가는 이처럼 복합적인 원인들로 요동치는 자본의 흐름을, 예측 불가능하고 유기적인 자연의 무작위적 움직임에 대입하여 해석합니다.<br><br>알고리즘을 통해 보석과 같이 영롱하고도 날카로운 형태로 모델링 된 데이터 결정체는, 눈에 보이지 않는 무형의 자본을 물리적이고 미학적인 감각으로 치환하여 관람객에게 제시합니다. 이를 통해 현대 사회에서 가상화폐가 지니는 맹목적인 욕망과 그 이면의 불안정성을 완전히 새로운 시각으로 관조하고 응시하고자 합니다.",
        descEn: "<b>Concept:</b> Visualization of cryptocurrency data, the organic movement of modern capital compared to the mineral crystallization process<br><br><b>Description:</b><br>Showcased at the artist's first solo exhibition, &lt;Crystals&gt; (2021) visualizes the crystallization process of minerals—which accumulate deep beneath the Earth's surface over a long time—by intersecting it with real-time data of 'Cryptocurrency', creating a new data crystal in virtual space.<br><br>Just as natural rocks combine with external impurities to form unique crystals, cryptocurrency in modern society also forms its value by constantly colliding with uncontrollable external factors—so-called 'data impurities' like celebrity remarks and government policies—beyond simple market logic. The artist interprets this flow of capital, fluctuating due to complex causes, by substituting it with unpredictable and organic random movements of nature.<br><br>Modeled into brilliantly sharp, jewel-like forms through algorithms, these data crystals substitute the invisible, intangible capital with a physical and aesthetic sense to present to the audience. Through this, the work aims to offer a completely new perspective to contemplate and gaze upon the blind desire and underlying instability that cryptocurrency holds in modern society.",
        credits: { Sound: 'Kohui' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144639/20251111_C3366.MP4_20260310_210838.174_ervtvq.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048608/Crystals_%EC%A0%84%EC%8B%9C_3_b0jlxw.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048611/Crystals_%EC%A0%84%EC%8B%9C_1_gfwkoq.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048610/Crystals_3_n5qcjl.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048609/Crystals_2_nspzy8.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048608/Crystals_1_jip5mv.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812862/%EC%84%A4%EB%AA%85_oucmwj.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812861/%EC%84%A4%EB%AA%852_qloph4.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812860/%EC%84%A4%EB%AA%853_xvfn3i.png',
        ],
    },
    { slug: 'white-flock', title: 'White Flock', year: 2017, category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048459/WhiteFlock_Coex_vhsbu4.jpg',
        video: 'https://youtu.be/97DiyvIzy1A',
        descEn: "<b>&lt;Exhibition&gt;</b><br/>2017.06.23 - 2017.06.25 | Gwacheon National Science Museum<br/>2018.05.18 - 2018.05.22 | Young Creative Korea 2018<br/>2018.03.03 - 2018.06.03 | Art-236 Place Camp Jeju<br/>2018.10.27 | 0 Handong (SK Telecom) Coex artium",
        credits: {
            'Producer & Director': 'Joung Yunsu',
            'Interaction & Programmer': 'Song Hayun',
            'Programmer': 'Park Munsok',
            'Video Artist': 'Kim Junhak',
            '3D Artist': 'Kim Chanki',
            'Sound': 'Park Jaeho'
        },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048459/WhiteFlock_%EA%B3%BC%EC%B2%9C2_uyrisf.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812667/%ED%99%94%EC%9D%B4%ED%8A%B8%ED%94%8C%EB%9F%AD_keerdp.png',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812667/%ED%99%94%EC%9D%B4%ED%8A%B8_%ED%94%8C%EB%9F%AD2_jmqwq0.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812666/%ED%99%94%EC%9D%B4%ED%8A%B8_%ED%94%8C%EB%9F%AD_shx7go.jpg',
        ],
    },
];

const CV_DATA = {
    profile: {
        name: 'JOUNG YUNSU',
        email: 'joungyunsu@gmail.com',
        site: 'joungyunsu.com',
        location: 'Seoul, South Korea'
    },
    exhibitions: [
        { date: '2025.11 - 2026.02', title: 'Atelier Nodeul Opening Exhibition', detail: 'Group Exhibition' },
        { date: '2025.11', title: 'Digital November MetaSensing', detail: 'Group Exhibition' },
        { date: '2024.08 - 09', title: 'Paradise Art Lab Festival', detail: 'Exhibition' },
        { date: '2023.10', title: 'Seoul Light Bitseom Festival', detail: 'Exhibition' },
        { date: '2022.09 - 10', title: 'Beyond Human Emotion & History', detail: 'Exhibition' },
        { date: '2022.03', title: 'Save The Planet', detail: 'Performance' },
        { date: '2022.03 - 08', title: 'Printf("Human odyssey")', detail: 'Cheonan Museum of Art, Exhibition' },
        { date: '2021', title: 'Crystals (Virtual Crystals)', detail: 'Mumokjuk Gallery, Solo Exhibition' },
        { date: '2020', title: 'Data Holocene', detail: 'Misajang Gallery, Exhibition' },
        { date: '2017', title: 'White Flock',   detail: 'Ara Art Center, Exhibition' }
    ],
    projects: [
        { year: '2025', title: 'The Murderer\'s Report Movie', detail: 'Artwork Sponsorship' },
        { year: '2025', title: 'Patek Philippe Brand Media Art', detail: 'Exhibition Production' },
        { year: '2024', title: 'Newmix Coffee', detail: 'Media Art Production' },
        { year: '2024', title: 'Villa Somme Ulleungdo', detail: 'Media Art Production' },
        { year: '2024', title: 'A Museum Manila', detail: 'Media Art Production' },
        { year: '2023', title: 'Kolon Hannam Local Project', detail: 'Media Art Exhibition' },
        { year: '2023', title: 'Hyundai Mobis lobby', detail: 'Media Art Production' },
        { year: '2023', title: 'Sulwhasoo CF', detail: 'Audiovisual Production' },
        { year: '2022', title: 'Samsung SDI PRIMX Exhibition', detail: 'Media Art Production' },
        { year: '2022', title: 'The Hyundai OOH Project', detail: 'Media Art Production' },
        { year: '2019', title: 'UNESCO Creative City Jinju', detail: 'Stage Video Production' },
        { year: '2018', title: 'SK Telecom 0 Handong', detail: 'Artwork Exhibition' },
        { year: '2018', title: 'ART-236 Place Camp', detail: 'Artwork Exhibition' }
    ],
    education: [
        { year: '2025', title: 'Seoul Institute of the Arts', detail: 'Digital Art Special Lecture' },
        { year: '2024', title: 'SADI Creative Computation', detail: 'TouchDesigner Workshop' },
        { year: '2024', title: 'Seoul National University', detail: 'Visual Design Workshop' }
    ],
    awards: [
        { year: '2024', title: 'Paradise Art Lab' },
        { year: '2021', title: 'Art Center Nabi Creative Talent' }
    ]
};
