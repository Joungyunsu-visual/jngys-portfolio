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
        title: 'Atelier Nodeul Opening Exhibition',
        year: 2025,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058228/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_xwqbfj.webp',
        desc: "<b>자연의 호흡과 도시의 맥박이 교차하는 섬, 노들</b><br>서울의 중심을 관통하는 한강과 그 위를 부유하는 상징적인 공간 노들섬을 배경으로, 자연의 환경과 도시의 역동성이 맺는 관계를 미디어아트로 풀어냈습니다. 끊임없이 이동하는 사람들과 차들, 도시의 주요한 혈맥인 한강의 흐름 속에서 섬이 품고 있는 '바람'과 '조화'에 주목했습니다.<br><br><b>전시 작품</b><br><b>1. 로즐린 (Roslyn) 연작</b><br>Concept: 색채의 전이와 연결<br>Description: 노들섬이라는 물리적 공간에서 시작된 시각적 에너지가 한강의 수면으로 유려하게 이어지는 과정을 담았습니다. 공간을 채우는 섬세한 색감의 확장을 통해, 단절되어 있던 섬과 강의 경계를 허물고 시각적인 조화를 유도합니다.<br><br><b>2. 후라칸 (Huracan)</b><br>Concept: 보이지 않는 바람의 시각화<br>Description: 한강을 스치는 차갑고 예리한 물바람과, 쉼 없이 교차하는 도시의 빠르고 역동적인 호흡을 융합했습니다. 도시와 자연이 부딪히며 만들어내는 거칠지만 생동감 넘치는 바람의 에너지를 시각적으로 포착해 낸 작업입니다.<br><br><br><b>An Island Where the Breath of Nature and the Pulse of the City Intersect, Nodeul</b><br>Set against the backdrop of Nodeul Island, a symbolic space floating above the Han River that pierces the center of Seoul, this media art explores the relationship between the natural environment and urban dynamism. Amidst the endless movement of people and vehicles, and the flow of the Han River—the city's main artery—we focused on the 'wind' and 'harmony' embraced by the island.<br><br><b>Exhibition Works</b><br><b>1. Roslyn Series</b><br>Concept: Transition and Connection of Color<br>Description: It captures the process by which visual energy originating from the physical space of Nodeul Island flows gracefully onto the surface of the Han River. Through the expansion of delicate colors filling the space, it breaks down the boundaries between the island and the river, inducing visual harmony.<br><br><b>2. Huracan</b><br>Concept: Visualization of the Invisible Wind<br>Description: It fuses the cold, sharp water breeze brushing past the Han River with the fast, dynamic breath of the endlessly crossing city. This work visually captures the rough yet vibrant energy of the wind created by the collision between the city and nature.",
        credits: { Sound: 'Bley' },
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058231/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%ED%9B%84%EB%9D%BC%EC%B9%B8_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_ynwg8t.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773810711/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_4__%EA%B2%B0%EA%B3%BC_jvlrhw.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058231/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%ED%9B%84%EB%9D%BC%EC%B9%B8_3__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_ljoar2.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773810701/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_3__%EA%B2%B0%EA%B3%BC_uvcbcz.webp',
        ],
    },
    {
        title: "The Murderer's Report Movie",
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050590/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B805_ahjjfu.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050592/%ED%8F%AC%EC%8A%A4%ED%84%B0_o1d1xu.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050597/edit_size02_p14ocj.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050588/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B804_wwd2ra.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050585/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B803_l701ux.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050583/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B802_nygocs.jpg',
        ],
    },
    {
        title: 'Patek Philippe Brand Media Art',
        year: 2025,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050566/Patek_pqk8gp.png',
    },
    {
        title: 'Huracan',
        year: 2025,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050549/Storm_Feild_03_krdsbi.jpg',
        desc: "'Huracan' explores a massive vortex of algorithmically generated particles. Hundreds of thousands of particles collide and balance in an organic flow, creating abstract fields of force that resemble satellite views of Earth's atmosphere or swirling snowscapes. Through shader-based depth and shading, this work translates natural movements and forces into a cosmic-scale digital aesthetic experience.",
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
        title: 'Abstraction',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813577/Visang_Abstraction_5__%EA%B2%B0%EA%B3%BC_rsh8fk.webp',
        desc: "Gwacheon Visang New Headquarters Public Art Installation",
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813586/Visang_Abstraction_2__%EA%B2%B0%EA%B3%BC_kbrkho.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813583/Visang_Abstraction_7__%EA%B2%B0%EA%B3%BC_emjpwl.webp',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048713/Visang_Abstraction_Visang_8_qib3x4.jpg',
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048710/Visang_Abstraction_Visang_6_rxugnb.jpg'
        ]
    },
    {
        title: 'Gosan',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048766/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_6_tayhcg.jpg',
        desc: "silicagel - Gosan Stage Visual<br>Syn.THE.Size III, May 17-19",
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
        title: 'Paradise Art Lab Festival',
        year: 2024,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048771/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_7_tt4gsf.jpg',
        desc: "&lt;Patterns of Symbiosis&gt; is a media facade artwork exploring the patterns of the living world. Based on the reaction-diffusion system theory proposed by Alan Turing in the 1950s, it unravels complex natural patterns through two mathematical rules: diffusion and inhibition. Through this theory, the artist visually recreates patterns that cross the boundaries between nature and human, reality and virtuality. The work presents colorful patterns generated through the process of diffusion and inhibition, exploring the essence of an interconnected world by switching the subjects of diffusion and inhibition depending on the perspective. Through this, the audience discovers how complex and closely connected our world is, and newly recognizes their position within it.",
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
        title: 'Kosmos Resort Ulleungdo',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9422_%EA%B2%B0%EA%B3%BC_hfbjar.webp',
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
        title: 'A Museum Manila',
        year: 2024,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649616/4%E1%84%80%E1%85%AA%E1%86%AB__6244_1__%EA%B2%B0%EA%B3%BC_rdybiv.webp',
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
        title: 'Seoul Light Bitseom Festival',
        year: 2023,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048704/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_2_cm6isi.jpg',
        desc: 'The 2023 Seoul Light Hangang Bitseom Festival was a laser media art festival held over 10 days, from October 6 to 15, 2023, around Banpo Hangang Park and Seoraeseom.',
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
        title: 'Kolon Hannam',
        year: 2023,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048695/Kolon-Sports_-New-Breath-01_hrrsik.jpg',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048696/Kolon_Sports_New_Breath_02_uxvyqn.jpg',
        ],
    },
    {
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
        title: 'Save The Planet',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048656/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_9_cyekd3.jpg',
        desc: "&lt;SAVE THE PLANET&gt; is a convergence performance of media art and string quartet. It expresses the present that includes the culprit of the pandemic, the seriousness of the environmental problem, and also the crisis of climate change. It provides a chance to contemplate about the importance of environment for the sound future.<br><br><b>&lt;Performance&gt;</b><br>2022.3.30 19:00(KST)<br>GS Caltex Yeulmaru Grand Theater (Yeosu)<br>Hosted by: Jeollanam-do, Yeosu City",
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
        title: 'Printf "Human Odyssey"',
        year: 2022,
        category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773049103/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_01_%EA%B2%B0%EA%B3%BC_zfkoj1.webp',
        images: [
            'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048669/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_02_h9yqcb.jpg',
        ],
    },
    {
        title: 'Samsung SDI PRIMX Exhibition',
        year: 2022,
        category: 'project',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144813/449ed962-0d8d-49b5-9226-2cc44067e193.png',
    },
    {
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
    { title: 'Crystals (2021, 2025 Digital November MetaSensing)', year: '2021, 2025', category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048606/Crystals_%EC%A0%84%EC%8B%9C_2_muslfy.jpg',
        desc: "&lt;Crystals&gt; (2021) is a generative data visualization projected on a 2m × 2.5m LED screen that explores the crystallization of cryptocurrency. Using real-time crypto market data and tweets as 'impurities', the artwork simulates how random market forces and human actions shape the value of virtual currency, much like geological pressures form natural mineral crystals.<br><br>The installation features a main projection alongside three data panels displaying live market prices and trading volume. By presenting these data-driven structures as brilliant jewels, the artist reframes the volatile nature of modern cryptocurrency through a lens of natural, organic growth.",
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
    { title: 'White Flock', year: 2017, category: 'work',
        main: 'https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048459/WhiteFlock_Coex_vhsbu4.jpg',
        video: 'https://youtu.be/97DiyvIzy1A',
        desc: "<b>&lt;Exhibition&gt;</b><br/>2017.06.23 - 2017.06.25 | Gwacheon National Science Museum<br/>2018.05.18 - 2018.05.22 | Young Creative Korea 2018<br/>2018.03.03 - 2018.06.03 | Art-236 Place Camp Jeju<br/>2018.10.27 | 0 Handong (SK Telecom) Coex artium",
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
        { year: '2024', title: 'Kosmos Resort Ulleungdo', detail: 'Media Art Production' },
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
