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

// descKo / descEn: arrays of paragraphs. info: [label, value] rows shown in the detail view.
const WORKS = [
    {
        "slug": "atelier-nodeul-opening-exhibition",
        "title": "Atelier Nodeul Opening Exhibition",
        "year": 2025,
        "category": "work",
        "genre": "Media Art / Exhibition",
        "info": [
            [
                "Exhibition",
                "Atelier Nodeul Opening Exhibition"
            ],
            [
                "Works",
                "Roslyn series, Huracan"
            ],
            [
                "Venue",
                "Nodeul Island, Seoul"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058228/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_xwqbfj.webp",
        "descKo": [
            "한강 위에 놓인 노들섬을 배경으로, 자연환경과 도시의 움직임이 맺는 관계를 다룬 전시다. 끊임없이 오가는 사람과 차, 한강의 흐름 속에서 섬이 품은 바람과 조화에 주목했다.",
            "〈로즐린〉 연작은 섬에서 시작된 색의 흐름이 한강의 수면으로 이어지는 과정을 담는다. 공간을 채우며 번지는 색은 섬과 강 사이의 경계를 흐리게 한다.",
            "〈후라칸〉은 한강을 스치는 차가운 강바람과 쉼 없이 움직이는 도시의 리듬을 겹쳐, 도시와 자연이 부딪히며 만드는 바람의 에너지를 시각화한다."
        ],
        "descEn": [
            "Set on Nodeul Island in the middle of the Han River, the exhibition looks at the relationship between the natural environment and the movement of the city. Amid the constant flow of people, traffic and the river itself, the work focuses on the wind and balance the island holds.",
            "The Roslyn series follows color as it moves from the island onto the surface of the river, blurring the boundary between the two.",
            "Huracan layers the cold wind off the river with the restless rhythm of the city, visualizing the energy created where city and nature meet."
        ],
        "credits": {
            "Sound": "Bley"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058231/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%ED%9B%84%EB%9D%BC%EC%B9%B8_2__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_ynwg8t.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773810711/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_4__%EA%B2%B0%EA%B3%BC_jvlrhw.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773058231/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%ED%9B%84%EB%9D%BC%EC%B9%B8_3__%EA%B2%B0%EA%B3%BC_%EA%B2%B0%EA%B3%BC_ljoar2.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773810701/%EC%95%84%EB%9C%B0%EB%A6%AC%EC%97%90_%EB%85%B8%EB%93%A4_%EB%A1%9C%EC%A6%90%EB%A6%B0_3__%EA%B2%B0%EA%B3%BC_uvcbcz.webp"
        ]
    },
    {
        "slug": "the-murderers-report-movie",
        "title": "The Murderer's Report",
        "year": 2025,
        "category": "project",
        "genre": "Film / Media Art",
        "info": [
            [
                "Film",
                "The Murderer's Report (살인자 리포트)"
            ],
            [
                "Cast",
                "Jung Sung-il, Cho Yeo-jeong"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050590/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B805_ahjjfu.jpg",
        "descKo": [
            "영화 〈살인자 리포트〉에 등장하는 미디어아트 작업을 맡았습니다. 기존 미디어아트 작품이 극 중 공간의 배경에 머물지 않고, 장면의 흐름과 인물의 감정에 맞춰 함께 움직이도록 구성했습니다.",
            "작품은 극의 전개에 따라 세 가지 테마로 변화하며, 제너러티브 아트의 유기적인 움직임으로 장면의 긴장감을 더합니다. 작업은 영화의 주요 장면과 메인 포스터 배경에도 사용되었습니다."
        ],
        "descEn": [
            "Media artwork for the film The Murderer's Report. Rather than serving only as set dressing, existing media art pieces were arranged to move with the flow of each scene and the emotions of the characters.",
            "The work shifts across three themes as the story unfolds, its generative motion adding to the tension on screen. It appears in key scenes and in the background of the main poster."
        ],
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050592/%ED%8F%AC%EC%8A%A4%ED%84%B0_o1d1xu.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050597/edit_size02_p14ocj.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050588/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B804_wwd2ra.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050585/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B803_l701ux.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050583/%EC%82%B4%EC%9D%B8%EC%9E%90%EB%A6%AC%ED%8F%AC%ED%8A%B802_nygocs.jpg"
        ]
    },
    {
        "slug": "patek-philippe-brand-media-art",
        "title": "Patek Philippe Brand Media Art",
        "year": 2025,
        "category": "project",
        "genre": "Interactive Media Art / Brand",
        "info": [
            [
                "Client",
                "Patek Philippe"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050566/Patek_pqk8gp.png",
        "descKo": [
            "파텍필립과 함께한 인터랙티브 미디어아트 프로젝트입니다. 브랜드를 대표하는 사각 프레임의 실루엣에서 출발해, 이를 정육면체 공간으로 확장했습니다.",
            "큐브의 세 면을 화면으로 사용하며, 관람객이 큐브 안팎을 오가는 움직임에 실시간으로 반응합니다. 시계의 무브먼트처럼 관람객의 움직임과 알고리즘이 맞물리며 매 순간 다른 장면을 만들어냅니다."
        ],
        "descEn": [
            "An interactive media art project with Patek Philippe. Starting from the silhouette of the brand's square frame, the form was extended into a cubic space.",
            "Three faces of the cube act as screens that respond in real time as visitors move in and around it. Like a watch movement, visitor motion and algorithm interlock to produce a different image each moment."
        ]
    },
    {
        "slug": "huracan",
        "title": "Huracan",
        "year": 2025,
        "category": "work",
        "genre": "Generative Art / Video",
        "info": [
            [
                "Medium",
                "Video, TouchDesigner, GLSL"
            ],
            [
                "Format",
                "10 min, 6000 × 3000 px, variable installation"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050549/Storm_Feild_03_krdsbi.jpg",
        "descKo": [
            "알고리즘으로 생성한 수십만 개의 입자가 만드는 거대한 소용돌이를 다룬 작업이다. 입자들은 흐름 속에서 충돌하고 균형을 이루며, 위성에서 내려다본 대기나 휘몰아치는 눈보라를 떠올리게 하는 무늬를 만든다.",
            "셰이더로 음영과 깊이를 더해, 자연의 움직임과 힘을 디지털 화면 위에 옮겼다."
        ],
        "descEn": [
            "A vortex formed by hundreds of thousands of algorithmically generated particles. Colliding and settling within a continuous flow, they form patterns that recall satellite views of the atmosphere or a blizzard.",
            "Shader-based shading and depth carry the movement and force of nature onto the screen."
        ],
        "credits": {
            "Sound": "Bley"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050556/Storm_Feild_07_dfw0pk.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050553/Storm_Feild_05_ba6uid.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050542/rotate4_a0i7r8.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050530/random_mvr8pd.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050509/0726_3_qjzkyc.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050523/Mulit03_0827_tpolqk.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773050521/Mulit02_0827_bniizd.jpg"
        ]
    },
    {
        "slug": "abstraction",
        "title": "Abstraction",
        "year": 2024,
        "category": "work",
        "genre": "Public Art / Media Art",
        "info": [
            [
                "Locations",
                "Visang Education HQ, Gwacheon (installed)<br>Shilla Stay Sejong (opening 2026)"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813577/Visang_Abstraction_5__%EA%B2%B0%EA%B3%BC_rsh8fk.webp",
        "descKo": [
            "〈로즐린〉 연작의 연장선에 있는 작업으로, 캔버스를 벗어난 회화의 가능성을 실험한다. 디지털 매체의 유동성으로 일상에서 스쳐 지나가는 순간의 아름다움을 포착해 공공 공간에 상설로 선보인다.",
            "건축 공간과 어우러지며 시간에 따라 계속 달라지는 화면을 보여주는 미디어 공공미술이다."
        ],
        "descEn": [
            "An extension of the Roslyn series, the work explores painting beyond the canvas. Using the fluidity of digital media, it captures passing moments of everyday beauty and presents them permanently in public space.",
            "A media public artwork that sits within the architecture and changes continuously over time."
        ],
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813586/Visang_Abstraction_2__%EA%B2%B0%EA%B3%BC_kbrkho.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773813583/Visang_Abstraction_7__%EA%B2%B0%EA%B3%BC_emjpwl.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048713/Visang_Abstraction_Visang_8_qib3x4.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048710/Visang_Abstraction_Visang_6_rxugnb.jpg"
        ]
    },
    {
        "slug": "gosan",
        "title": "Gosan",
        "year": 2024,
        "category": "work",
        "genre": "Live Visual / VJing",
        "info": [
            [
                "Event",
                "Silica Gel concert 'Syn.THE.Size III', May 17–19"
            ],
            [
                "Music",
                "Silica Gel – 'Gosan' (POWER ANDRE 99)"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048766/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_6_tayhcg.jpg",
        "descKo": [
            "밴드 실리카겔의 앨범 《POWER ANDRE 99》 수록곡 〈고산〉을 위한 라이브 비주얼이다. 곡명처럼 높은 산에서 마주한 차가운 설경과, 그 풍경을 바라보는 시선의 이미지를 겹쳤다.",
            "제너러티브 아트 기반의 작업 과정에 생성형 AI 이미지를 섞어, 의도된 연산과 예측할 수 없는 이미지가 만나는 질감을 실험했다. 단독 콘서트 〈Syn.THE.Size III〉 무대의 라이브 VJing에 사용되었다."
        ],
        "descEn": [
            "A live visual for 'Gosan', a track from Silica Gel's album POWER ANDRE 99. It layers the cold snowscape of a high mountain, as the title suggests, with the image of a gaze looking out over it.",
            "Generative AI images were mixed into a generative-art workflow, testing the texture that emerges when deliberate computation meets unpredictable imagery. The work was performed as a live VJ set at the solo concert Syn.THE.Size III."
        ],
        "credits": {
            "VJ": "@team__node",
            "Organized by": "@msbsound @noahsfilmo"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048765/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_5_y5s6ug.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048767/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_1_cgc34b.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048768/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_2_r2putj.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048769/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94_Gosan_3_njegmu.jpg"
        ]
    },
    {
        "slug": "paradise-art-lab-festival",
        "title": "Paradise Art Lab Festival",
        "year": 2024,
        "category": "work",
        "genre": "Media Facade / Generative Art",
        "info": [
            [
                "Work",
                "Patterns of Symbiosis (공생하는 무늬)"
            ],
            [
                "Program",
                "Paradise Art Lab 2024, Jangchung"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048771/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_7_tt4gsf.jpg",
        "descKo": [
            "〈공생하는 무늬〉는 살아 있는 세계가 지닌 유기적인 패턴을 탐구하는 미디어 파사드 작업이다.",
            "앨런 튜링이 제안한 반응-확산 시스템을 바탕으로, 자연에서 저절로 생겨나는 무늬를 확산과 억제라는 두 규칙의 상호작용으로 재구성해 화면에 옮겼다."
        ],
        "descEn": [
            "Patterns of Symbiosis is a media facade work exploring the organic patterns found in living systems.",
            "Based on the reaction-diffusion model proposed by Alan Turing, it recreates patterns that arise spontaneously in nature through the interplay of two rules: diffusion and inhibition."
        ],
        "credits": {
            "Sound": "Bley"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048778/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_6_ubxbgk.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048775/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_4_olnuhi.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048776/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_5_ikwxf0.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048772/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_1_m95ous.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048775/Paradise_%EA%B3%B5%EC%83%9D%ED%95%98%EB%8A%94_%EB%AC%B4%EB%8A%AC_3_to0ufu.jpg"
        ]
    },
    {
        "slug": "newmix-coffee",
        "title": "Newmix Coffee",
        "year": 2024,
        "category": "project",
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048763/newmix_nj6b7p.jpg",
        "credits": {
            "Team": "@newmixcoffee.kr",
            "Sound": "Studio Namsan, Jeon Yongheyeon",
            "Space": "@ggjh.kr",
            "Media Art": "Jeong Yunsu",
            "Adviser": "Kim bongjin",
            "Photograph": "Park yoochun"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048761/newmix_%EC%84%B1%EC%88%98_7_qgxlju.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048760/newmix_%EC%84%B1%EC%88%98_6_wzq8nm.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048759/newmix_%EC%84%B1%EC%88%98_5_bdfxgh.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048758/newmix_%EC%84%B1%EC%88%98_4_moiyau.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048757/newmix_%EC%84%B1%EC%88%98_3_ykmsx6.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048756/newmix_%EC%84%B1%EC%88%98_2_kuphf3.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048755/newmix_%EC%84%B1%EC%88%98_1_twr4hn.jpg"
        ]
    },
    {
        "slug": "villa-somme-ulleungdo",
        "title": "Villa Somme Ulleungdo",
        "year": 2024,
        "category": "project",
        "genre": "Immersive Media Art / Wellness",
        "info": [
            [
                "Location",
                "'Immunity Spa', Villa Somme, Ulleungdo"
            ],
            [
                "Duration",
                "40 min"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9422_%EA%B2%B0%EA%B3%BC_hfbjar.webp",
        "descKo": [
            "울릉도 빌라쏘메 리조트의 스톤 테라피 공간 ‘면역공방’을 위해 제작한 몰입형 미디어아트입니다. 파동석 위에 누워 휴식하는 공간의 성격에 맞춰, 명상과 휴식을 위한 40분 길이의 시청각 작업으로 구성했습니다.",
            "작품은 음양오행을 따라 물(水)에서 나무(木), 불(火), 흙(土), 금(金)으로 이어지며 순환하는 자연의 에너지를 시각화합니다. 현재 리조트 내에서 상설 운영되고 있습니다."
        ],
        "descEn": [
            "An immersive media artwork for the 'Immunity Spa', a stone therapy room at Villa Somme resort on Ulleungdo. Designed for visitors resting on heated stones, it unfolds as a 40-minute audiovisual piece for meditation and rest.",
            "Following the Five Elements, the work moves from water to wood, fire, earth and metal, visualizing the cyclical energy of nature. It is on permanent display at the resort."
        ],
        "credits": {
            "Sound": "Bley"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649413/DSC9178_%EA%B2%B0%EA%B3%BC_r0lndo.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649411/DSC9253_%EA%B2%B0%EA%B3%BC_c9rqtp.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649410/DSC9375_1__%EA%B2%B0%EA%B3%BC_isxizx.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649408/DSC9451_%EA%B2%B0%EA%B3%BC_hpeqpw.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649406/DSC9588_%EA%B2%B0%EA%B3%BC_qxlngs.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649404/DSC9912_%EA%B2%B0%EA%B3%BC_pcxcxv.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649403/DSC9028_%EA%B2%B0%EA%B3%BC_b86boy.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649402/DSC9361_%EA%B2%B0%EA%B3%BC_nk4jvv.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649409/DSC9398_%EA%B2%B0%EA%B3%BC_p4xs9r.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649399/DSC9407_%EA%B2%B0%EA%B3%BC_jfa7f7.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649394/DSC8973_%EA%B2%B0%EA%B3%BC_bvjpf2.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649390/008_%EA%B2%B0%EA%B3%BC_tatkpv.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649392/DSC9160_%EA%B2%B0%EA%B3%BC_dwr1dh.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649389/009_%EA%B2%B0%EA%B3%BC_etbsdd.webp"
        ]
    },
    {
        "slug": "a-museum-manila",
        "title": "A Museum Manila",
        "year": 2024,
        "category": "project",
        "genre": "Interactive Media Art",
        "info": [
            [
                "Location",
                "a:museum, Manila, Philippines"
            ],
            [
                "Role",
                "Visual direction"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649616/4%E1%84%80%E1%85%AA%E1%86%AB__6244_1__%EA%B2%B0%EA%B3%BC_rdybiv.webp",
        "descKo": [
            "필리핀 마닐라의 몰입형 전시 공간 a:museum에 상설 전시된 인터랙티브 플로어 작업으로, 비주얼 연출을 맡았습니다. 라이다 센서로 관람객의 걸음을 인식해 실시간으로 반응합니다.",
            "바닥을 디딜 때마다 물감이 번지고 주변 색과 섞이며, 관람객은 공간을 걷는 것만으로 하나의 추상화를 함께 완성해 갑니다."
        ],
        "descEn": [
            "An interactive floor installation on permanent display at a:museum, an immersive exhibition space in Manila. LiDAR sensors track visitors’ steps, and the visuals respond in real time.",
            "Each step spreads paint across the floor, blending with the surrounding colors, so visitors complete an abstract painting simply by walking through the space."
        ],
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649619/4%E1%84%80%E1%85%AA%E1%86%AB__6475_%EA%B2%B0%EA%B3%BC_h8pyus.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649618/4%E1%84%80%E1%85%AA%E1%86%AB__6469_%EA%B2%B0%EA%B3%BC_fvqlrf.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649615/4%E1%84%80%E1%85%AA%E1%86%AB__6478_%EA%B2%B0%EA%B3%BC_vc5qcy.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649614/4%E1%84%80%E1%85%AA%E1%86%AB__5994_%EA%B2%B0%EA%B3%BC_antlnt.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649613/4%E1%84%80%E1%85%AA%E1%86%AB__6453_%EA%B2%B0%EA%B3%BC_xujhho.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649611/4%E1%84%80%E1%85%AA%E1%86%AB__6496_1__%EA%B2%B0%EA%B3%BC_f6cpxq.webp",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773649610/4%E1%84%80%E1%85%AA%E1%86%AB__6496_2__%EA%B2%B0%EA%B3%BC_p6c1sp.webp"
        ]
    },
    {
        "slug": "seoul-light-bitseom-festival",
        "title": "Seoul Light Bitseom Festival",
        "year": 2023,
        "category": "work",
        "genre": "Immersive Media Art / Installation",
        "info": [
            [
                "Work",
                "Sphere"
            ],
            [
                "Festival",
                "Seoul Light Hangang Bitseom Festival, Main Artist"
            ],
            [
                "Venue",
                "'Hyper Drive' structure"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048704/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_2_cm6isi.jpg",
        "descKo": [
            "〈Sphere〉는 서울라이트 한강빛섬축제의 대형 구조물 ‘하이퍼드라이브’ 내부에서 선보인 미디어아트 작업이다. 세 개의 체험형 작품 중 중앙에 위치하며, 하나의 근원적인 형태가 끝없이 확장하고 변화하는 과정을 미시와 거시를 오가며 보여준다."
        ],
        "descEn": [
            "Sphere was presented inside Hyper Drive, the large structure at the Seoul Light Hangang Bitseom Festival. Placed at the center of three installations, it follows a single fundamental form as it expands and transforms, moving between micro and macro scales."
        ],
        "credits": {
            "Music": "KOHUI",
            "3D Artist": "Jeong Yoona"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048703/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_1_mqh5ga.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1789455847/%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_Earth02_nabwu9.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1789455849/%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_Earth01_dscwmj.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048702/Seoul_Light_Sphere_5_ccb2xt.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048701/Seoul_Light_Sphere_4_ov7spi.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048700/Seoul_Light_Sphere_3_qem15d.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048699/Seoul_Light_Sphere_2_m12rh2.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048698/Seoul_Light_Sphere_1_hj2zmc.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048697/Seoul_Light_%EC%84%9C%EC%9A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8_%ED%98%84%EC%9E%A5_%EC%82%AC%EC%A7%84_3_npipou.jpg"
        ]
    },
    {
        "slug": "kolon-hannam",
        "title": "Kolon Hannam",
        "year": 2023,
        "category": "project",
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048695/Kolon-Sports_-New-Breath-01_hrrsik.jpg",
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048696/Kolon_Sports_New_Breath_02_uxvyqn.jpg"
        ]
    },
    {
        "slug": "hyundai-mobis-lobby-media-art",
        "title": "Hyundai Mobis Lobby Media Art",
        "year": 2023,
        "category": "project",
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048690/%ED%98%84%EB%8C%80%EB%AA%A8%EB%B9%84%EC%8A%A4_3_nhv9d3.jpg",
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048694/Hyundai_Mobis_pwtafd.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144864/c3be18ac-f07a-4307-8667-10002e89212f.png"
        ]
    },
    {
        "slug": "sulwhasoo-concentrated-ginseng-cream",
        "title": "Sulwhasoo Concentrated Ginseng Cream",
        "year": 2023,
        "category": "project",
        "main": "https://res.cloudinary.com/dbgr7vngr/video/upload/so_0/v1773650580/0405_instar_dbkoqw.jpg",
        "video": "https://res.cloudinary.com/dbgr7vngr/video/upload/v1773650580/0405_instar_dbkoqw.mp4",
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650575/230407_5_yod79n.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650668/230407_1_b0jmki.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773650670/230407_3_r8kblo.jpg"
        ]
    },
    {
        "slug": "saic-audi-beyond-human-emotion-history",
        "title": "SAIC AUDI Beyond Human Emotion & History",
        "year": 2022,
        "category": "work",
        "info": [
            [
                "Exhibition",
                "SAIC Audi, Shanghai"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048679/%EC%95%84%EC%9A%B0%EB%94%94_1_azz6gb.jpg",
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048676/%EC%95%84%EC%9A%B0%EB%94%94_4_nnsdvt.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048675/%EC%95%84%EC%9A%B0%EB%94%94_3_eyornw.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048674/%EC%95%84%EC%9A%B0%EB%94%94_2_nlzuf9.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048678/%EC%95%84%EC%9A%B0%EB%94%94_%EC%8B%9C%EB%AE%AC_2_vs6cqa.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048677/%EC%95%84%EC%9A%B0%EB%94%94_%EC%8B%9C%EB%AE%AC_1_fmqrdu.png"
        ]
    },
    {
        "slug": "save-the-planet",
        "title": "Save The Planet",
        "year": 2022,
        "category": "work",
        "genre": "Performance / Media Art",
        "info": [
            [
                "Performance",
                "2022.03.30, GS Caltex Yeulmaru Grand Theater, Yeosu"
            ],
            [
                "Hosted by",
                "Jeollanam-do, Yeosu City"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048656/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_9_cyekd3.jpg",
        "descKo": [
            "〈SAVE THE PLANET〉은 미디어아트와 현악 4중주가 함께하는 공연이다. 팬데믹과 환경 문제, 기후 위기가 겹친 지금을 다루며, 환경과 미래에 대해 생각해 볼 자리를 만든다."
        ],
        "descEn": [
            "Save The Planet is a performance combining media art with a string quartet. It addresses a present shaped by the pandemic, environmental problems and the climate crisis, inviting reflection on the environment and the future."
        ],
        "credits": {
            "Music": "VRI STRING QUARTET (Yongeun Park, Sunghee Ko, Seunggu Lee, Jibak) @vri_string_quartet_vsq",
            "Guest": "Bumjun Ko @ko_bum_jun",
            "Media Art": "Jeong Yunsu @jeongyunsu___",
            "MV": "Chamsae Kim @kimchamsae",
            "Director": "Hanna Jung @b_ingbing",
            "Sound": "Sangyong Min",
            "Lighting": "Harim Kim, Sanghyun Park",
            "Camera": "Soonyoung Jung, Minho Kwon",
            "Design": "Hayoung So",
            "Organizer": "Moosunji @moosunji"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048669/storm_g2qcf7.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048667/Storm_03_alww2g.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048664/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_8_r40n0t.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048663/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_7_vsingd.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048662/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_6_nqgpwd.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048661/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_5_etrazd.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048660/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_4_ynq3ce.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048659/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_3_mtob1g.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048658/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_2_qisjad.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048657/%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%8D%94%ED%94%8C%EB%9E%98%EB%8B%9B_1_vzuueg.jpg"
        ]
    },
    {
        "slug": "printf-human-odyssey",
        "title": "printf(\"Human Odyssey\")",
        "year": 2022,
        "category": "work",
        "info": [
            [
                "Exhibition",
                "Cheonan Museum of Art, special media exhibition"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773049103/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_01_%EA%B2%B0%EA%B3%BC_zfkoj1.webp",
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048669/%EC%B2%9C%EC%95%88%EC%8B%9C%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80_02_h9yqcb.jpg"
        ]
    },
    {
        "slug": "samsung-sdi-primx-exhibition",
        "title": "Samsung SDI PRIMX Exhibition",
        "year": 2022,
        "category": "project",
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144813/449ed962-0d8d-49b5-9226-2cc44067e193.png"
    },
    {
        "slug": "the-hyundai-ooh",
        "title": "The Hyundai OOH",
        "year": 2022,
        "category": "project",
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048672/Roslyn_Earth_1_bjjequ.jpg",
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048673/Roslyn_Earth_2_ueyl8q.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048671/Roslyn_Earth_3_f7livf.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048649/%EB%8D%94%ED%98%84%EB%8C%80_%EC%B2%9C%ED%98%B8%EC%A0%90_wayph4.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048644/%EB%8D%94%ED%98%84%EB%8C%80_1_v1jpad.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048647/%EB%8D%94%ED%98%84%EB%8C%80_2_o2og5d.jpg"
        ]
    },
    {
        "slug": "crystals",
        "title": "Crystals",
        "year": "2021, 2025",
        "category": "work",
        "genre": "Solo Exhibition / Data Art / Generative Art",
        "info": [
            [
                "Exhibitions",
                "Solo Exhibition, Mumokjeok Gallery (2021)<br>Digital November: Meta-Sensing (2025)"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048606/Crystals_%EC%A0%84%EC%8B%9C_2_muslfy.jpg",
        "descKo": [
            "첫 개인전에서 선보인 〈Crystals〉는 오랜 시간 땅속에서 광물이 결정을 이루는 과정을 가상화폐의 실시간 데이터와 겹쳐, 가상 공간 속 데이터 결정체로 시각화한 작업이다.",
            "암석이 외부 불순물과 결합해 고유한 결정을 만들 듯, 가상화폐의 가치도 유명인의 발언이나 정부 정책 같은 통제할 수 없는 요인과 부딪히며 형성된다. 작업은 이렇게 요동치는 자본의 흐름을 예측할 수 없는 자연의 움직임에 빗대어 읽는다.",
            "알고리즘으로 모델링한 결정체는 보이지 않는 자본을 눈에 보이는 형태로 바꾸어, 가상화폐를 둘러싼 욕망과 그 이면의 불안정성을 돌아보게 한다."
        ],
        "descEn": [
            "Presented at the artist's first solo exhibition, Crystals overlays the slow crystallization of minerals underground with real-time cryptocurrency data, visualizing it as data crystals in virtual space.",
            "Just as rock forms unique crystals by combining with impurities, the value of cryptocurrency takes shape through collisions with factors beyond control, such as public remarks or government policy. The work reads this volatile flow of capital through the unpredictable movements of nature.",
            "Modeled through algorithms, the crystals give visible form to intangible capital, prompting reflection on the desire surrounding cryptocurrency and the instability beneath it."
        ],
        "credits": {
            "Sound": "Kohui"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773144639/20251111_C3366.MP4_20260310_210838.174_ervtvq.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048608/Crystals_%EC%A0%84%EC%8B%9C_3_b0jlxw.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048611/Crystals_%EC%A0%84%EC%8B%9C_1_gfwkoq.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048610/Crystals_3_n5qcjl.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048609/Crystals_2_nspzy8.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048608/Crystals_1_jip5mv.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812862/%EC%84%A4%EB%AA%85_oucmwj.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812861/%EC%84%A4%EB%AA%852_qloph4.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812860/%EC%84%A4%EB%AA%853_xvfn3i.png"
        ]
    },
    {
        "slug": "white-flock",
        "title": "White Flock",
        "year": 2017,
        "category": "work",
        "info": [
            [
                "Exhibitions",
                "2017.06 Gwacheon National Science Museum<br>2018.03–06 Art-236 Place Camp, Jeju<br>2018.05 Young Creative Korea 2018<br>2018.10 0 Handong (SK Telecom), Coex Artium"
            ]
        ],
        "main": "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048459/WhiteFlock_Coex_vhsbu4.jpg",
        "video": "https://youtu.be/97DiyvIzy1A",
        "credits": {
            "Producer & Director": "Jeong Yunsu",
            "Interaction & Programmer": "Song Hayun",
            "Programmer": "Park Munsok",
            "Video Artist": "Kim Junhak",
            "3D Artist": "Kim Chanki",
            "Sound": "Park Jaeho"
        },
        "images": [
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773048459/WhiteFlock_%EA%B3%BC%EC%B2%9C2_uyrisf.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812667/%ED%99%94%EC%9D%B4%ED%8A%B8%ED%94%8C%EB%9F%AD_keerdp.png",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812667/%ED%99%94%EC%9D%B4%ED%8A%B8_%ED%94%8C%EB%9F%AD2_jmqwq0.jpg",
            "https://res.cloudinary.com/dbgr7vngr/image/upload/v1773812666/%ED%99%94%EC%9D%B4%ED%8A%B8_%ED%94%8C%EB%9F%AD_shx7go.jpg"
        ]
    }
];

const CV_DATA = {
    "profile": {
        "name": "JEONG YUNSU",
        "email": "jngys.works@gmail.com",
        "site": "jeongyunsu.com",
        "location": "Seoul, South Korea"
    },
    "exhibitions": [
        {
            "date": "2025.11 - 2026.02",
            "title": "Atelier Nodeul Opening Exhibition",
            "detail": "Group Exhibition"
        },
        {
            "date": "2025.11",
            "title": "Digital November MetaSensing",
            "detail": "Group Exhibition"
        },
        {
            "date": "2024.08 - 09",
            "title": "Paradise Art Lab Festival",
            "detail": "Exhibition"
        },
        {
            "date": "2023.10",
            "title": "Seoul Light Bitseom Festival",
            "detail": "Exhibition"
        },
        {
            "date": "2022.09 - 10",
            "title": "Beyond Human Emotion & History",
            "detail": "Exhibition"
        },
        {
            "date": "2022.03",
            "title": "Save The Planet",
            "detail": "Performance"
        },
        {
            "date": "2022.03 - 08",
            "title": "Printf(\"Human odyssey\")",
            "detail": "Cheonan Museum of Art, Exhibition"
        },
        {
            "date": "2021",
            "title": "Crystals (Virtual Crystals)",
            "detail": "Mumokjuk Gallery, Solo Exhibition"
        },
        {
            "date": "2020",
            "title": "Data Holocene",
            "detail": "Misajang Gallery, Exhibition"
        },
        {
            "date": "2017",
            "title": "White Flock",
            "detail": "Ara Art Center, Exhibition"
        }
    ],
    "projects": [
        {
            "year": "2025",
            "title": "The Murderer's Report Movie",
            "detail": "Artwork Sponsorship"
        },
        {
            "year": "2025",
            "title": "Patek Philippe Brand Media Art",
            "detail": "Exhibition Production"
        },
        {
            "year": "2024",
            "title": "Newmix Coffee",
            "detail": "Media Art Production"
        },
        {
            "year": "2024",
            "title": "Villa Somme Ulleungdo",
            "detail": "Media Art Production"
        },
        {
            "year": "2024",
            "title": "A Museum Manila",
            "detail": "Media Art Production"
        },
        {
            "year": "2023",
            "title": "Kolon Hannam Local Project",
            "detail": "Media Art Exhibition"
        },
        {
            "year": "2023",
            "title": "Hyundai Mobis lobby",
            "detail": "Media Art Production"
        },
        {
            "year": "2023",
            "title": "Sulwhasoo CF",
            "detail": "Audiovisual Production"
        },
        {
            "year": "2022",
            "title": "Samsung SDI PRIMX Exhibition",
            "detail": "Media Art Production"
        },
        {
            "year": "2022",
            "title": "The Hyundai OOH Project",
            "detail": "Media Art Production"
        },
        {
            "year": "2019",
            "title": "UNESCO Creative City Jinju",
            "detail": "Stage Video Production"
        },
        {
            "year": "2018",
            "title": "SK Telecom 0 Handong",
            "detail": "Artwork Exhibition"
        },
        {
            "year": "2018",
            "title": "ART-236 Place Camp",
            "detail": "Artwork Exhibition"
        }
    ],
    "education": [
        {
            "year": "2025",
            "title": "Seoul Institute of the Arts",
            "detail": "Digital Art Special Lecture"
        },
        {
            "year": "2024",
            "title": "SADI Creative Computation",
            "detail": "TouchDesigner Workshop"
        },
        {
            "year": "2024",
            "title": "Seoul National University",
            "detail": "Visual Design Workshop"
        }
    ],
    "awards": [
        {
            "year": "2024",
            "title": "Paradise Art Lab"
        },
        {
            "year": "2021",
            "title": "Art Center Nabi Creative Talent"
        }
    ]
};
