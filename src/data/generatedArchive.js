const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const withPublicAssets = (items) => items.map((item) => ({
  ...item,
  pdfPath: item.pdfPath ? publicAsset(item.pdfPath) : item.pdfPath,
  coverImage: item.coverImage ? publicAsset(item.coverImage) : item.coverImage
}));

export const generatedArticles = withPublicAssets([
  {
    "id": "bm-1-01",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 1/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "경도인지장애 Mild Cognitive Impairment",
    "author": "양동원",
    "institution": "가톨릭대학교 서울성모병원",
    "pages": 6,
    "tags": [
      "스페셜토픽",
      "경도인지장애",
      "Brain&Mind"
    ],
    "summary": "경도인지장애 Mild Cognitive Impairment을 중심으로 구성된 B&M 1호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Mild cognitive impairment as a clinical entity and treatment target.",
      "Vitamin E and donepezil for the treatment of mild cognitive impairment.N Engl J Med.",
      "하지만 ApoE ε4가 하나 이상 있는 MCI 환자에서 는 도네페질을 투여했을 때 인지기능의 저 하를 늦추는 것으로 나타났다."
    ]
  },
  {
    "id": "bm-1-02",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 1/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "기억상실형 경도인지장애 환자의 경과: 신경심리검사 및 알츠온(AlzOn)검사를 중심으로 / 2년 전부터 시작된 성격 변화를 주요 호소 증상으로 내원한 57세 남성 / 느려진 걸음걸이와 기억력 저하를 주요 호소 증상으로 내원한 76세 남성",
    "author": "왕민정, 양영순, 장재원",
    "institution": "로아신경과의원 / 순천향대학교 천안병원 / 강원대학교병원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "경도인지장애",
      "Brain&Mind"
    ],
    "summary": "기억상실형 경도인지장애 환자의 경과: 신경심리검사 및 알츠온(AlzOn)검사를 중심으로을 중심으로 구성된 B&M 1호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "20 Morning Conference Case 장재원 / 강원대학교병원 느려진 걸음걸이와 기억력 저하를 주요 호소 증상으로 내원한 76세 남성 증례 76세 남성이 약 1년 전부터 서서히 느려 지는 걸음걸이와 기억력 저하를 주요 호소 증상으로 기억장애 클리닉에 방문했다.",
      "종합적으로 봤을 때, 1차 검사 때보다 기억력 저하가 진행된 소견으로 기억상실형 경도인지장애로 진단 했다.",
      "고찰 환자는 초기에 행동장애를 주요 호소 증 상으로 내원했고, 초기 뇌 MRI 검사에 서 특이 소견이 없었다."
    ]
  },
  {
    "id": "bm-1-03",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 1/03 Article Review.pdf",
    "category": "Article Review",
    "title": "알츠하이머병에 대한 8가지 혈액 아밀로이드베타(Aβ) 42/40 측정 성능의 일대일 비교 연구 / 인지장애가 있는 성인의 아밀로이드 양전자 방출 단층 촬영 결과를 추정하기 위한 혈장 아밀로이드 확률 점수 평가 / 가까운 시일 내 승인가능성이 있는 아밀로이드-표적 알츠하이머병 치료제의 첫 물결: Ad...",
    "author": "강민주, 김영진, 나승희, 류나영, 편정민, 홍윤정",
    "institution": "중앙보훈병원 / 성남시 노인보건센터 / 가톨릭대학교 인천성모병원 / 가톨릭대학교 은평성모병원",
    "pages": 18,
    "tags": [
      "저널리뷰",
      "알츠하이머",
      "아밀로이드",
      "혈액"
    ],
    "summary": "알츠하이머병에 대한 8가지 혈액 아밀로이드베타(Aβ) 42/40 측정 성능의 일대일 비교 연구을 중심으로 구성된 B&M 1호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "측정 강민주 / 중앙보훈병원 알츠하이머병에 대한 8가지 혈액 아밀로이드베타(Aβ) 42/40 측정 성능의 일대일 비교 연구 Head-to-Head Comparison of 8 Plasma Amyloid-β 42/40 Assays in Alzheimer Disease.",
      "검증을 위해 2005년 ~2013년 사이 ADNI 코호트를 통해 수집된 120명의 대상자(51명의 정상인지, 51명의 경도인지장애, 20명의 알츠하이머병치매) 의 혈액 내 Aβ 측정 결과를 수집했다.",
      "ADNI 코호트 대상 혈액 내 Aβ42/40 측정값과 Aβ-PET 결과 예측에 대한 ROC 분석 결과 Plasma assay Aβ-PET, AUC (95% CI) Aβ+, No."
    ]
  },
  {
    "id": "bm-1-04",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 1/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "노인과 운전",
    "author": "나해리",
    "institution": "보바스기념병원",
    "pages": 8,
    "tags": [
      "핫이슈",
      "운전",
      "Brain&Mind"
    ],
    "summary": "노인과 운전을 중심으로 구성된 B&M 1호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "조사된 치매 환자의 86.5%가 원래 운전을 하지 않고 있었다.",
      "고령운전자 수가 증가함에 따라 운전을 지속하는 초기 치매 환자도 증가할 가능성 이 크다.",
      "운전을 했던 환자 중에서는 45.9%가 치매 진단 당시에 운전을 지속하고 있었다."
    ]
  },
  {
    "id": "bm-1-05",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 1/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "‘골프앨보우’ 바로 알기 / 인간은 언제든지 ‘동물화 animalization’될 수 있다. / 베르디의 오페라 ‘라 트라비아타’",
    "author": "서경묵, 박상흠, 김상윤",
    "institution": "서울부민병원 / 순천향대학교 천안병원 / 분당서울대학교병원",
    "pages": 10,
    "tags": [
      "의사라이프&컬처",
      "골프",
      "Brain&Mind"
    ],
    "summary": "‘골프앨보우’ 바로 알기을 중심으로 구성된 B&M 1호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Brain & Mind Doctor Plus ‘골프앨보우’ 바로 알기 서경묵 / 서울부민병원 인간은 언제든지 ‘동물화animalization’될 수 있다.",
      "김상윤 / 분당서울대학교병원 베르디의 오페라 ‘라 트라비아타’ ‘라 트라비아타’ 오페라의 전체적인 등장인물들과 줄거리는 다음과 같다.(Wikipedia) 주요 등장인물은 주인공인 비올레타와 알프레도, 그리고 알프레도의 아버지인 조르조 세 명이다.",
      "Arena di Verona에서의 오페라 공연은 특별하다고 할 수 있다."
    ]
  },
  {
    "id": "bm-1-06",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 1/06 Q_A.pdf",
    "category": "Q&A",
    "title": "알츠하이머병 위험도 검사인 ‘알츠온(AlzOn)’이 궁금합니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "임상Q&A",
      "알츠하이머",
      "Brain&Mind"
    ],
    "summary": "알츠하이머병 위험도 검사인 ‘알츠온(AlzOn)’이 궁금합니다.을 중심으로 구성된 B&M 1호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Q&A 알츠하이머병 위험도 검사인 ‘알츠온(AlzOn)’이 궁금합니다.",
      "알츠온검사는 검사 당시 혈액의 올리고머화 경향을 측정하는 검사로, 검사 수치 자체가 알츠하이머병 병리의 진행정도나 알츠하이머병의 중증도를 반영하진 않습니다.",
      "◎ 알츠하이머병 진단을 위한 목적으로 알츠온검사를 활용할 수 있나요?"
    ]
  },
  {
    "id": "bm-1-07",
    "issue": "B&M 1호",
    "issueNum": 1,
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 1/07 B-M News.pdf",
    "category": "B-M News",
    "title": "미국 FDA, 알츠하이머병 치료제 레카네맙(lecanemab)의 가속승인 결정 COVID-19의 장기(long-term) 신경학적 결과 혈액에서(신경세포 유래) α-synuclein 의 검출:",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "최신뇌과학뉴스",
      "알츠하이머",
      "레카네맙",
      "혈액"
    ],
    "summary": "미국 FDA, 알츠하이머병 치료제 레카네맙(lecanemab)의 가속승인 결정 COVID-19의 장기(long-term) 신경학적 결과 혈액에서(신경세포 유래) α-synuclein 의 검출:을 중심으로 구성된 B&M 1호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "COVID-19의 가능한 장기적인 신경학적 결과를 고려하면서 주의 깊은 추척관찰이 필요하겠다.",
      "Detection of neuron-derived pathological α-synuclein in blood.",
      "초기 알츠하이머병 및 아밀 로이드 PET 베타-아밀로이드를 보이는 환자에서 베타아밀로이드에 대한 단일클론항체, 레카네맙을 주사하고 위약과 비교했 다."
    ]
  },
  {
    "id": "bm-2-01",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 2/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "전두측두엽치매",
    "author": "김은주, 정지향",
    "institution": "부산대학교병원 / 이화여자대학교 서울병원",
    "pages": 6,
    "tags": [
      "스페셜토픽",
      "치매",
      "전두측두엽치매"
    ],
    "summary": "전두측두엽치매을 중심으로 구성된 B&M 2호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "FTD는 유전성이 높은 신경퇴행질환으 로, 전체 FTD의 약 25~30%를 차지하는 유전형 FTD가 있다.",
      "FTD의 모든 아형에서 MND가 동반될 수 있지만, 가장 흔한 순서는 bvFTD 다음으로 nfvPPA이 며 svPPA에서는 매우 드물게 나타난다.",
      "우측 svPPA의 경우, 언어장애보다는 행동장애와 얼굴 실인증이 더 두드러지므로 svPPA라는 용어보다는 의미치매(semantic dementia, SD) 또는 FTD의 우측 앞 앞측두 엽변이(right anterior temporal variant)로 부르자는 주장도 있다."
    ]
  },
  {
    "id": "bm-2-02",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 2/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "이름대기장애로 내원한 72세 여성 / 2년 전부터 시작된 이상행동을 주소로 내원한 55세 여성 / 말더듬을 주요 호소 증상으로 내원한 68세 남성",
    "author": "왕민정, 양영순, 장재원",
    "institution": "로아신경과의원 / 순천향대학교 천안병원 / 강원대학교병원",
    "pages": 12,
    "tags": [
      "임상모닝컨퍼런스",
      "Brain&Mind"
    ],
    "summary": "이름대기장애로 내원한 72세 여성을 중심으로 구성된 B&M 2호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "즉 어떤 환자는 좌측 양영순 / 순천향대학교 천안병원 2년 전부터 시작된 이상행동을 주소로 내원한 55세 여성 19Brain & Mind 측두엽에, 어떤 환자는 우측 측두엽에 주 병변이 있다.",
      "20 Morning Conference Case 장재원 / 강원대학교병원 말더듬을 주요 호소 증상으로 내원한 68세 남성 증례 68세 남성이 약 3개월 전부터 서서히 발 음이 어눌해지고, 말문이 자주 막힌다며 기억장애 클리닉에 방문했다.",
      "The logopenic variant of primary progressive aphasia."
    ]
  },
  {
    "id": "bm-2-03",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 2/03 Article Review.pdf",
    "category": "Article Review",
    "title": "Semantic variant primary progressive aphasia에서 기저 구조영상과 치료 결과의 연관성 연구 / 원발성 진행성 실어증의 뇌 영역 위축과 이름대기능력 감소의 연관성 / 알츠하이머병과 경도인지장애에서 연결된 말하기와 언어: 그림 설명하기 과제에 대한 종설 / 발화부족형...",
    "author": "강민주, 김영진, 류나영, 편정민, 홍윤정, 나승희",
    "institution": "중앙보훈병원 / 성남시 노인보건센터 / 가톨릭대학교 은평성모병원 / 순천향대학교 서울병원",
    "pages": 18,
    "tags": [
      "저널리뷰",
      "알츠하이머",
      "경도인지장애"
    ],
    "summary": "Semantic variant primary progressive aphasia에서 기저 구조영상과 치료 결과의 연관성 연구을 중심으로 구성된 B&M 2호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "원발성 진행성 실어증의 뇌 영역 위축과 이름대기능력 감소의 연관성 Association of Regional Atrophy With Naming Decline in Primary Progressive Aphasia Neurology 2023;100:e582-94.",
      "모든 검사에서 AD 그룹이 svPPA 보다 낮은 점수를, nfvPPA 그룹 역시 svPPA 보다 낮은 점수를 보였다.",
      "3 N (SD) 3.06 (0.19) 3.18 (0.25) 3.33 (0.33) 3.04 (0.11) 3.40 (0.59) lvPPA, nfvPPA, AD < C *; nfvPPA < svPPA * Tower of London No."
    ]
  },
  {
    "id": "bm-2-04",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 2/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "신경계질환에서의 사회인지(social cognition) 장애",
    "author": "심용수",
    "institution": "가톨릭대학교 은평성모병원",
    "pages": 6,
    "tags": [
      "핫이슈",
      "Brain&Mind"
    ],
    "summary": "신경계질환에서의 사회인지(social cognition) 장애을 중심으로 구성된 B&M 2호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Hot Issue 신경계질환에서의 사회인지(social cognition) 장애 심용수 / 가톨릭대학교 은평성모병원 Brain & Mind 44 Hot Issue 서론 사람들은 끊임없이 사회적 관계를 유지 하며 살아갑니다.",
      "이 개념은 감정 인식, 공감, 마음이론 (theory of mind, ToM) 및 사회적 지식, 추론을 포함한 다양한 능력을 포함하고 있 으며, 초기에는 특히 자폐증, 발달장애 측 면에서 연구되었고, 신경학에서의 연구는 최근에 이루어지고 있습니다.",
      "Impairment of social cognition in neurological diseases."
    ]
  },
  {
    "id": "bm-2-05",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 2/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "승자 勝者의 늪, 아만이즘 amanism / 쥬세페 베르디(Giuseppe Verdi)와 그의 작품들",
    "author": "박상흠, 김상윤",
    "institution": "순천향대학교 천안병원 / 분당서울대학교병원",
    "pages": 8,
    "tags": [
      "의사라이프&컬처",
      "Brain&Mind"
    ],
    "summary": "승자 勝者의 늪, 아만이즘 amanism을 중심으로 구성된 B&M 2호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "베르디의 오페라 베르디는 낭만주의 시기 이탈리아 오페 라의 효시인 로시니를 시작으로 도니제티 와 벨리니의 뒤를 잇는 작곡가이고, 베르 디 후에는 푸치니가 그의 위상을 이어받는 다.",
      "베 르디의 작품들은 이탈리아 오페라의 최고 수작들로 평가받고 있고, 세계 각지의 중요 오페라 극장에서 가장 많이 공연되고 있다.",
      "52 Doctor Plus 이전 호에서는 쥬세페 베르디의 유명한 오페라 <라 트라비아타>에 대해 소개했다."
    ]
  },
  {
    "id": "bm-2-06",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 2/06 Q_A.pdf",
    "category": "Q&A",
    "title": "디지털 인지훈련 프로그램인 슈퍼브레인이 궁금합니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 8,
    "tags": [
      "임상Q&A",
      "Brain&Mind"
    ],
    "summary": "디지털 인지훈련 프로그램인 슈퍼브레인이 궁금합니다.을 중심으로 구성된 B&M 2호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "자체적으로 개발 중인 콘텐츠는 현장에서 환자와 접촉하는 현장 전문가와 협력하여 개발한 콘텐츠를 기반으로 전문 의료진이 참여해 치매 예방에 특화된 환자맞춤형 인지 개선 콘텐츠를 제작하고 있습니다.",
      "Moon SY, Kim S, Choi SH, et al.",
      "또한 치매 증상 완화 약물의 경우 부득이하게도 부작용을 수반할 확률이 있습니다(발생률 21%, lmai H et al., 2020)."
    ]
  },
  {
    "id": "bm-2-07",
    "issue": "B&M 2호",
    "issueNum": 2,
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 2/07 B-M News.pdf",
    "category": "B-M News",
    "title": "“세계에서 가장 빠르게 증가하는 뇌질환은 파킨슨병” 면역요법의 다음 목표: “더 안전하게, 덜 번거롭게” HSV1가 TREM2의 항바이러스 신호를 침묵시킨다. 만성 코로나19 증후군(Long COVID Symptoms)의",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "최신뇌과학뉴스",
      "파킨슨",
      "Brain&Mind"
    ],
    "summary": "“세계에서 가장 빠르게 증가하는 뇌질환은 파킨슨병” 면역요법의 다음 목표: “더 안전하게, 덜 번거롭게” HSV1가 TREM2의 항바이러스 신호를 침묵시킨다. 만성 코로나19 증후군(Long COVID Symptoms)의을 중심으로 구성된 B&M 2호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Clarity 데이터는 위험성 측면에서 항응고제를 복용하는 환자들이 면역치 료의 가장 심각한 부작용인 대뇌 출혈을 더 자주 겪는 것으로 보고했으며, 새로운 적정 사용 권고에서는 이러한 환자군에 대한 약물 처방을 금기할 것을 제안했다.",
      "미세아교세포 수용체는 세포가 HSV-1 감염에 대항하는 데 도움을 주고, 바이러스는 감염 후 TREM2에 의해 유발되는 항 바이러스 신호를 침묵시킨다.",
      "항원 각인은 이전에 경험한 바이러스 감염에 대한 항체를 만드는 현상으로, 이는 코로나19 이후의 신경학적 후유증의 원인이 될 수 있다고 Ragon Institute의 연구원인 Marianna Spatola박사는 설명했다."
    ]
  },
  {
    "id": "bm-3-01",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 3/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "Precision medicine in dementia",
    "author": "임재성",
    "institution": "울산대학교 서울아산병원",
    "pages": 4,
    "tags": [
      "스페셜토픽",
      "Brain&Mind"
    ],
    "summary": "Precision medicine in dementia을 중심으로 구성된 B&M 3호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "10 Special Topic 결론 알츠하이머병 치료의 새로운 시대를 맞 이하는 지금, 정밀의학은 질병의 발병과 진행을 좌우하는 유전적, 환경적, 생활습 관 요인의 복잡한 상호작용에 대한 깊은 이해를 바탕으로 개별화된 치료 전략의 새로운 시대를 열 수 있는 돌파구가 될 수 있다.",
      "또한 이러한 분류를 통해 환자 의 치료반응성, 예후를 예측함으로써 매일의 진료현장에 접목시키고자 노력하고 있다.",
      "개인 맞춤형 치료 접근법 같은 맥락에서 정밀의학은 임상현장에 서 개인별 예후인자를 예측하고 이에 따 라 치료전략을 개별화하는데 활용될 수 있다."
    ]
  },
  {
    "id": "bm-3-02",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 3/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "1년 전부터 시작된 기억장애를 주요 호소 증상으로 내원한 64세 남성 / 5년 전부터 시작된 기억력 저하를 주요 호소 증상으로 내원한 74세 여성 / 1년 전부터 진행하는 기억력 저하로 내원한 75세 여성",
    "author": "양영순, 장재원, 왕민정",
    "institution": "순천향대학교 천안병원 / 강원대학교병원 / 로아신경과의원",
    "pages": 12,
    "tags": [
      "임상모닝컨퍼런스",
      "Brain&Mind"
    ],
    "summary": "1년 전부터 시작된 기억장애를 주요 호소 증상으로 내원한 64세 남성을 중심으로 구성된 B&M 3호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "19Brain & Mind 증례 75세 여성이 1년 전부터 서서히 진행하는 기억력 저하를 주요 호소 증상으로 내원했 다.",
      "고찰 환자는 기억장애를 주요 호소 증상으로 내원했고, 뇌자기공명영상(MRI) 검사에서 경미하게 양측 전두측두엽에 뇌위축이 관 찰되었다.",
      "고찰 환자는 내원 5년 전부터 발생한 기억장 애로 기억장애클리닉에 방문했고, 아밀로 이드 양성 기억형 다영역 경도인지장애로, 알츠하이머병의 전구단계로 진단하고 아 세틸콜린분해효소 억제제를 투여하며 추 적 관찰중인 환자이다."
    ]
  },
  {
    "id": "bm-3-03",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 3/03 Article Review.pdf",
    "category": "Article Review",
    "title": "전두측두엽치매에서 정밀의료: 유전자형에서 표현형으로 / ApoE4 보유자의 알츠하이머병 예방을 위한 정밀 영양 / 맞춤형 영양학의 현재와 미래 / 알츠하이머병에 대한 정밀 의학 접근: 성공적 파일럿 연구 / 알츠하이머병 위험 감소를 위한 정밀 의학 접근",
    "author": "홍윤정, 김영진, 편정민, 류나영, 나승희",
    "institution": "가톨릭대학교 의정부성모병원 / 성남시 노인보건센터 / 순천향대학교 서울병원 / 가톨릭대학교 은평성모병원",
    "pages": 12,
    "tags": [
      "저널리뷰",
      "치매",
      "알츠하이머",
      "전두측두엽치매",
      "예방"
    ],
    "summary": "전두측두엽치매에서 정밀의료: 유전자형에서 표현형으로을 중심으로 구성된 B&M 3호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "김영진 / 성남시 노인보건센터 ApoE4 보유자의 알츠하이머병 예방을 위한 정밀 영양 Precision Nutrition for Alzheimer’s Prevention in ApoE4 Carriers Nutrients.",
      "하지만 ApoE4 보유 자의 알츠하이머병 예방을 위한 효과적인 영양 프로토콜을 결정하는 장기간의 인간 연구는 아직 이루어지지 않았다.",
      "ApoE4 가 변화시키는 대사경로에 정밀 영양 (precision nutrition)을 제공함으로써 알 츠하이머병을 잠재적으로 예방가능한 방 법을 제시할 수 있다."
    ]
  },
  {
    "id": "bm-3-04",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 3/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "노화는 질병인가?",
    "author": "김성윤",
    "institution": "울산대학교 서울아산병원",
    "pages": 6,
    "tags": [
      "핫이슈",
      "Brain&Mind"
    ],
    "summary": "노화는 질병인가?을 중심으로 구성된 B&M 3호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "노화를 질병으로 보는 시각 첫째, 전통적으로 질병이란 유기체의 구 조나 기능의 장애를 초래하는 비정상적인 상태로 정의할 수 있는데, 나이가 들면 세포 김성윤 / 울산대학교 서울아산병원 노화는 질병인가?",
      "과잉 의료화에는 확실 히 상업적 측면이 있으며 이미 많은 사람 들이 다양한 맥락에서 과잉 의료화의 위험 성에 대해 경고한 바 있습니다.7 셋째, 노화를 질병으로 보기 시작한다면 불가피한 생물학적 과정에 사회적 낙인을 찍게 될 위험성이 있다는 지적이 많습니 다.",
      "노화를 질병으로 바라보는 사회적, 의학적 관점이 늘어난다 면 노화 연구에 대한 지원을 늘리고 예방 치료에 중점을 둘 수 있다는 것이지요."
    ]
  },
  {
    "id": "bm-3-05",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 3/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "프라 안젤리코의 “수태고지(The Annunciation)” / 장난감 수집의 재미에 대하여 / 화양연화(花樣年華, In the Mood for Love)",
    "author": "김상윤, 김태유, 조성태",
    "institution": "분당서울대학교병원 / 부산윌리스병원 / 한림대학교 강남성심병원",
    "pages": 12,
    "tags": [
      "의사라이프&컬처",
      "Brain&Mind"
    ],
    "summary": "프라 안젤리코의 “수태고지(The Annunciation)”을 중심으로 구성된 B&M 3호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "수태고지 부분 45Brain & Mind 김태유 / 부산윌리스병원 장난감 수집의 재미에 대하여 누구나 그렇겠지만, 저도 어린 시절에 장 난감을 좋아했습니다.",
      "장난감 수집에 어떤 재미가 있어 푹 빠지 게 되었는지, 장난감 수집의 재미를 독자 여러분과 공유하고자 합니다.",
      "프라 안젤리코(Fra Angelico, 1395~1455), “수태고지(The Annunciation)”, 1430~32, 패널에 템페라 기법, 194×194cm, 스페인 마드리드의 프라도(PRADO) 미술관."
    ]
  },
  {
    "id": "bm-3-06",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 3/06 Q_A.pdf",
    "category": "Q&A",
    "title": "2023년 상반기를 뜨겁게 달구었던 치매 신약, 레카네맙이 궁금합니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 4,
    "tags": [
      "임상Q&A",
      "치매",
      "레카네맙"
    ],
    "summary": "2023년 상반기를 뜨겁게 달구었던 치매 신약, 레카네맙이 궁금합니다.을 중심으로 구성된 B&M 3호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Q&A 2023년 상반기를 뜨겁게 달구었던 치매 신약, 레카네맙이 궁금합니다.",
      "레카네맙의 효과를 입증한 연구에서는 50~90세의 알츠하이머병으로 인한 경도인지장애 또는 경도 치매 환자 1,795명을 대상 으로, 2주마다 레카네맙을 투여했습니다.",
      "2023년 7월 미국 FDA 정식 승인을 받았으며, 2023년 8월 일본에서도 사용을 승인받았습니다."
    ]
  },
  {
    "id": "bm-3-07",
    "issue": "B&M 3호",
    "issueNum": 3,
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 3/07 B-M News.pdf",
    "category": "B-M News",
    "title": "특정 위산역류억제제의 장기 사용: 치매 발병위험 증가와의 관련성 채식주의자의 골절 위험성이 높은 것으로 나타나 알츠하이머병의 일몰증후군(Sundowning): 빛에 대한 민감성은 증상을 악화시킬 수 있다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머"
    ],
    "summary": "특정 위산역류억제제의 장기 사용: 치매 발병위험 증가와의 관련성 채식주의자의 골절 위험성이 높은 것으로 나타나 알츠하이머병의 일몰증후군(Sundowning): 빛에 대한 민감성은 증상을 악화시킬 수 있다.을 중심으로 구성된 B&M 3호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "--- B&M News - 특정 위산역류억제제의 장기 사용: 치매 발병위험 증가와의 관련성 - 채식주의자의 골절 위험성이 높은 것으로 나타나 - 알츠하이머병의 일몰증후군(Sundowning): 빛에 대한 민감성은 증상을 악화시킬 수 있다.",
      "연구 결과에 따르면 채식을 하는 남녀 모두 고관절 골절 위험이 더 높은 것으로 나타났다.",
      "일부 연 구자들은 이 증상이 뇌의 변화 때문이라고 가정했으며, 실제로 최근 연구에 따르면 알츠하이머병 환자의 뇌에 있는 면역 세포 의 일주기 리듬(circadian rhythm) 장애가 뇌의 아밀로이드 베타 축적을 악화시킬 수 있다고 알려져 있다."
    ]
  },
  {
    "id": "bm-4-01",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 4/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "알츠하이머병이 아닌 병리를 의심하는 소견: 개요 및 중요성",
    "author": "정지향",
    "institution": "이화여자대학교 이대서울병원",
    "pages": 6,
    "tags": [
      "스페셜토픽",
      "알츠하이머",
      "Brain&Mind"
    ],
    "summary": "알츠하이머병이 아닌 병리를 의심하는 소견: 개요 및 중요성을 중심으로 구성된 B&M 4호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "부검 연구에 따르면, 이러한 타우 병변은 나이가 들면서 증가하며, 75세 이상의 대부 분에서 발견된다.",
      "연구에 따르면 타우 단백질 변성이 뇌의 한 부분에서 다른 부분으로 퍼 질 수 있지만 PART에서는 측두엽의 신피 질을 넘어 다른 신피질 영역으로 확장되지 않는다.",
      "SNAP의 특징적인 병리 질환 1) PART (primary age-related tauopathy) PART는 뇌의 노화와 관련된 질환으로 Crary 등이 처음 제안했다."
    ]
  },
  {
    "id": "bm-4-02",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 4/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "파킨슨병으로 시작해 알츠하이머병이 동반된 65세 남성 / 기억력 저하와 보행이 어려워 내원한 84세 남성 / 서서히 진행하는 보행장애와 기억력 저하를 보인 78세 여성",
    "author": "양영순, 장재원, 양동원",
    "institution": "순천향대학교 천안병원 / 강원대학교병원 / 가톨릭대학교 서울성모병원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "알츠하이머",
      "파킨슨"
    ],
    "summary": "파킨슨병으로 시작해 알츠하이머병이 동반된 65세 남성을 중심으로 구성된 B&M 4호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "16 Morning Conference Case 장재원 / 강원대학교병원 기억력 저하와 보행이 어려워 내원한 84세 남성 증례 84세 남성이 약 2년 전부터 보행이 악화 되고, 기억력이 저하되었다며 기억장애 클 리닉을 방문했다.",
      "A B C 19Brain & Mind 증례 78세 여성이 3년 전부터 서서히 진행하는 보행장애와 기억력 저하로 기억장애 치매클 리닉에 내원했다.",
      "내원 초기부터 보행의 문제를 호소하였고 서서히 거동이 불편해지면서 외부 활동이 줄고 이와 함께 빠른 악화를 보였기에 보행 장애가 해당 환자의 악화에 기여한 부분이 많다고 생각한다."
    ]
  },
  {
    "id": "bm-4-03",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 4/03 Article Review.pdf",
    "category": "Article Review",
    "title": "연령 관련 신경병리 중 알츠하이머병의 원인이 되는 위험인자 / 알츠하이머병의 생물학적 아형 / 알츠하이머병 생물표지자-질병수정요법의 시대를 준비하며 / 알츠하이머병의 임상적, 영상학적, 병리학적 다양성 / 루이소체치매에서 아밀로이드, 타우, 뇌혈관 생물표지자와 뇌신경퇴행 간의 연관성 / 알츠하이머...",
    "author": "강민주, 김영진, 류나영, 편정민, 홍윤정, 나승희",
    "institution": "보훈공단 중앙보훈병원 / 성남시 노인보건센터 / 가톨릭대학교 은평성모병원 / 순천향대학교 서울병원",
    "pages": 22,
    "tags": [
      "저널리뷰",
      "치매",
      "알츠하이머",
      "아밀로이드",
      "루이소체치매"
    ],
    "summary": "연령 관련 신경병리 중 알츠하이머병의 원인이 되는 위험인자을 중심으로 구성된 B&M 4호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "측두엽 변이 알츠하이머병 (Temporal (pure amnestic) variant AD) 측두엽 변이 AD는 삽화성 기억력만 천 천히 악화되는 만기 발병 AD를 말한다.",
      "기타 임상 AD 변이형의 신경병리 병리학적으로 확인된 AD는 기억상실형 외에도 다양한 임상 양상을 나타낼 수 있다.",
      "35Brain & Mind 전두엽 변이 알츠하이머병 (Frontal (executive) variant (frontal variant AD)) 전두엽 변이 AD는 조기발병 AD의 아주 드문 형태로 전두엽 기능 저하와 행동 문제 를 동반한다."
    ]
  },
  {
    "id": "bm-4-04",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 4/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "알츠하이머병의 혈액 진단 도구의 현재",
    "author": "나해리",
    "institution": "보바스기념병원, 김상윤 / 분당서울대학교병원",
    "pages": 6,
    "tags": [
      "핫이슈",
      "알츠하이머",
      "혈액"
    ],
    "summary": "알츠하이머병의 혈액 진단 도구의 현재을 중심으로 구성된 B&M 4호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Motter R, Vigo-Pelfrey C, Kholodenko D, et al, Reduction of beta-amyloid peptide42 in the cerebrospinal fluid of patients with Alzheimer’s disease.",
      "Diagnostic value of plasma phosphorylated tau181 in Alzheimer’s disease and frontotemporal lobar degeneration.",
      "Association of Plasma Neurofilament Light With Neurodegeneration in Patients With Alzheimer Disease."
    ]
  },
  {
    "id": "bm-4-05",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 4/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "포레스트 검프(Forrest Gump) / 2022년 워크숍과 함께 떠오르는 사과 ‘감홍’ / 침향(沈香)에 대하여 / 진료실/연구실에서 키우기 쉬운 식물 소개",
    "author": "조성태, 송홍기, 김동각, 김지현",
    "institution": "한림대학교 강남성심병원 / 송홍기신경과의원 / 동각향실 / 이화여자대학교 이대서울병원",
    "pages": 16,
    "tags": [
      "의사라이프&컬처",
      "Brain&Mind"
    ],
    "summary": "포레스트 검프(Forrest Gump)을 중심으로 구성된 B&M 4호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "수확 시기는 첫 서리가 내리는 10월 말~11월으로 다른 사과 품종에 비해 늦다.",
      "또한 재배 침향은 짧은 기간에 만들어지기 때문에 자연산 침 향에 비행서 향이 단조롭고 깊이가 모자랍 니다.",
      "재배 침향나무 : 침향을 추출하기 위해 수확해놓은 침향나무 62 Doctor Plus 인에 의해서 형성되기 때문에 침향 조각별 로 모양이 다 다르고 불규칙합니다."
    ]
  },
  {
    "id": "bm-4-06",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 4/06 Q_A.pdf",
    "category": "Q&A",
    "title": "치매질환에 적용이 가능한 ‘장애등급’이 있나요?",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 2,
    "tags": [
      "임상Q&A",
      "치매",
      "Brain&Mind"
    ],
    "summary": "치매질환에 적용이 가능한 ‘장애등급’이 있나요?을 중심으로 구성된 B&M 4호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Q&A 치매질환에 적용이 가능한 ‘장애등급’이 있나요?",
      "◎ 65세 이전에 발병한 초로기(조발성) 치매 환자는 장애등급을 받을 수 있나요?",
      "65세 이상 노인성 치매라도 여러 가지 복지 혜택을 받을 수 있습니다."
    ]
  },
  {
    "id": "bm-4-07",
    "issue": "B&M 4호",
    "issueNum": 4,
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 4/07 B-M News.pdf",
    "category": "B-M News",
    "title": "스마트폰 사용이 낮은 정자 수 및 남성 불임과 관련이 있다. 아스피린이 대장암 예방에 도움이 될 수 있다는 연구 결과가 나왔습니다. 앉아서 주로 생활하는 것은 심장 건강에 좋지 않습니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "최신뇌과학뉴스",
      "예방",
      "Brain&Mind"
    ],
    "summary": "스마트폰 사용이 낮은 정자 수 및 남성 불임과 관련이 있다. 아스피린이 대장암 예방에 도움이 될 수 있다는 연구 결과가 나왔습니다. 앉아서 주로 생활하는 것은 심장 건강에 좋지 않습니다.을 중심으로 구성된 B&M 4호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "앉아서 주로 생활하는 것은 심장 건강에 좋지 않습니다.",
      "- 아스피린이 대장암 예방에 도움이 될 수 있다는 연구 결과가 나왔습니다.",
      "--- B&M News - 스마트폰 사용이 낮은 정자 수 및 남성 불임과 관련이 있다."
    ]
  },
  {
    "id": "bm-5-01",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 5/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "치매의 신경정신증상 - 1부 : 증상의 이해",
    "author": "김성윤",
    "institution": "울산대학교 서울아산병원",
    "pages": 6,
    "tags": [
      "스페셜토픽",
      "치매",
      "Brain&Mind"
    ],
    "summary": "치매의 신경정신증상 - 1부 : 증상의 이해을 중심으로 구성된 B&M 5호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "증상의 주기성 환자가 최근 데이케어 센터에 나가기 시 작했다거나, 손주들과 함께 지내게 되었다 거나 하는 생활의 규칙성의 변화, 혹은 이 사 등을 통해 거주 환경이 바뀌면 환자의 신경정신증상이 한동안 심해지는 것을 볼 수 있다.",
      "치매의 신경정신증상(NPS)의 전체 유병률(연두색)과 임상적 대상이 되는 증상의 유병률(녹색)(BMC Geriatr.",
      "초기 치매나 심지어 그 이전 의 경도인지장애 상태에서도 우울, 불안, 수면장애, 의심과 망상, 공격성 등 행동심 리증상이 나타날 수도 있다."
    ]
  },
  {
    "id": "bm-5-02",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 5/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "무기력함으로 내원한 72세 여성 / “부인이 자기를 죽이려고 한다”며 내원한 65세 남성 / 환시와 인지 저하를 주소로 내원한 66세 남성",
    "author": "왕민정, 양영순, 장재원",
    "institution": "로아신경과의원 / 순천향대학교 천안병원 / 강원대학교병원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "인지저하",
      "Brain&Mind"
    ],
    "summary": "무기력함으로 내원한 72세 여성을 중심으로 구성된 B&M 5호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Yes No 1 2 3 Has the person become more easily frustrated or impatient?",
      "Yes No 1 2 3 Does she/he no longer care about anything?",
      "Ability to perform in the workplace The patients should generally maintain his/her independence of function in daily life, with minimal aids or assistance."
    ]
  },
  {
    "id": "bm-5-03",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 5/03 Article Review.pdf",
    "category": "Article Review",
    "title": "치료되거나 치료되지 않은 청력 손실과 치매가 없는 노년층의 경도행동장애와의 시간적 연관성 / 경도인지장애에서 알츠하이머병 탐색의 최적화 : ADNI와 MEMENTO 연구에서 경도행동장애의 4년 생물표지자 연구 / 경도행동장애, 수면장애, 치매로의 진행 사이의 경시적 연관성 연구 / 신경행동증상 지속...",
    "author": "김영진, 나승희, 편정민, 강민주, 박소희, 홍윤정",
    "institution": "성남시 노인보건센터 / 가톨릭대학교 인천성모병원 / 순천향대학교 서울병원 / 보훈공단 중앙보훈병원",
    "pages": 20,
    "tags": [
      "저널리뷰",
      "치매",
      "알츠하이머",
      "경도인지장애",
      "수면"
    ],
    "summary": "치료되거나 치료되지 않은 청력 손실과 치매가 없는 노년층의 경도행동장애와의 시간적 연관성을 중심으로 구성된 B&M 5호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "MBI Checklist YES NO SEVERITY This domain describes interest, motivation, and drive Has the person lost interest in friends, family, or home activities?",
      "Yes No 1 2 3 Does the person feel very tense, having developed an inability to relax, or shakiness, or symptoms of panic?",
      "치료되지 않은 청력 손실(untreated-HL) 그룹은 전반적 MBI 발병률이 유의미하게 높았다."
    ]
  },
  {
    "id": "bm-5-04",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 5/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "치매관리주치의 시범사업에 관하여",
    "author": "최호진",
    "institution": "한양대학교 구리병원",
    "pages": 4,
    "tags": [
      "핫이슈",
      "치매",
      "Brain&Mind"
    ],
    "summary": "치매관리주치의 시범사업에 관하여을 중심으로 구성된 B&M 5호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "의원 48,480 치매 전문 관리 수가 통합 관리 시 치매 전문 관리에 가산되는 수가, 일차 의료 만성 질환 관리 시범사업 참여 의원만 산정 주.",
      "치매 관리 서비스 이번 시범사업을 통해서 진행하는 치매 관리 서비스는 크게 2가지로 구분된다.",
      "일 반 건강 관리와 함께 치매증상을 관리 받는 통합 관리와 치매증상만을 전문적으로 관 리를 받는 치매 전문 관리로 구분되어서 진 행하며 이는 환자(보호자)가 선택할 수 있 다."
    ]
  },
  {
    "id": "bm-5-05",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "05 Special Review.pdf",
    "pdfPath": "/B&M 5/05 Special Review.pdf",
    "category": "Special Review",
    "title": "인지 저하 노인의 고혈압 치료",
    "author": "김광일",
    "institution": "분당서울대학교병원",
    "pages": 4,
    "tags": [
      "스페셜리뷰",
      "인지저하",
      "고혈압"
    ],
    "summary": "인지 저하 노인의 고혈압 치료을 중심으로 구성된 B&M 5호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "특히 인지 기능 저하 고혈압 환자에서 흔 히 동반하는 신체 노쇠, 혈압 변동성, 기립 성 혈압 변화, 약물 순응도, 다약제 복용, 약물 상호작용 등의 여러 문제를 고려한 고 혈압 치료에 관해서 알아보고자 한다.",
      "따라서 인지 기능이 저하되어 있거나 향후 치매 발생 위험이 높 은 고혈압 환자에서는 치매 예방을 위해서 는 적극적인 혈압 관리가 매우 중요하다.",
      "Special Review 인지 저하 노인의 고혈압 치료 김광일 / 분당서울대학교병원 Brain & Mind 48 Special Review 서론 1980년대까지만 해도 노인에서 관찰되 는 수축기 고혈압은 노화 현상으로 생각하 고 치료 대상으로 생각하지 않았다."
    ]
  },
  {
    "id": "bm-5-06",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "06 Doctor Plus.pdf",
    "pdfPath": "/B&M 5/06 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "침향 구입 시 주의사항과 문향 방법 / ‘미식과 예술’의 소도시, 일본 다카마쓰시(市) 여행 / The School of Athens / 의사의 ChatGPT 활용 방법",
    "author": "김동각, 왕민정, 김상윤, 안지현",
    "institution": "동각향실 / 로아신경과의원 / 분당서울대학교병원 / 한국의학연구소",
    "pages": 16,
    "tags": [
      "의사라이프&컬처",
      "ChatGPT",
      "Brain&Mind"
    ],
    "summary": "침향 구입 시 주의사항과 문향 방법을 중심으로 구성된 B&M 5호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "이번에는 침향 구입 시 주의사항과 문향 방법에 대해서 알아보 려고 합니다.",
      "왕민정 / 로아신경과의원 ‘미식과 예술’의 소도시, 일본 다카마쓰시(市) 여행 56 Doctor Plus 지하 2층에서부터 지상 3층까지 총 5개 층에서 고대에서부터 현대에 이르는 다양 한 작품들을 만나볼 수 있다.",
      "침수급 침향은 침향 수지의 밀도가 높아 물에 가라앉는 침향을 말합니다."
    ]
  },
  {
    "id": "bm-5-07",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "07 Q_A.pdf",
    "pdfPath": "/B&M 5/07 Q_A.pdf",
    "category": "Q&A",
    "title": "경증 치매 보험이 궁금합니다?",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 4,
    "tags": [
      "임상Q&A",
      "치매",
      "Brain&Mind"
    ],
    "summary": "경증 치매 보험이 궁금합니다?을 중심으로 구성된 B&M 5호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Brain & Mind 68 Q&A 경증 치매 보험이 궁금합니다?",
      "이중에서 2019~2022년까지 가입이 많이 증가하였던 경증 치매 보험이 있습니다.",
      "1) 경증 치매 상태라 함은, 피보험자가 보험 기간 중 보장 개시일 이후에 진단 확정된 질병 또는 상해로 인한 경도 이상 인지 기능의 장애 가 발생한 상태를 말합니다."
    ]
  },
  {
    "id": "bm-5-08",
    "issue": "B&M 5호",
    "issueNum": 5,
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "filename": "08 B-M News.pdf",
    "pdfPath": "/B&M 5/08 B-M News.pdf",
    "category": "B-M News",
    "title": "발효 식품은 정신 건강에 도움이 된다 악기 연주와 노래 부르기 : 뇌 건강 유지에 도움 뇌졸중이 치매 위험을 80% 증가시킬 수 있다 노화를 늦추고 역전시키기 위한 T 세포 재프로그램밍",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 8,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "Brain&Mind"
    ],
    "summary": "발효 식품은 정신 건강에 도움이 된다 악기 연주와 노래 부르기 : 뇌 건강 유지에 도움 뇌졸중이 치매 위험을 80% 증가시킬 수 있다 노화를 늦추고 역전시키기 위한 T 세포 재프로그램밍을 중심으로 구성된 B&M 5호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "악기 연주와 노래 부르기 : 뇌 건강 유지에 도움 매년 전 세계적으로 약 1,500만 명이 뇌졸중을 앓고 있습니다.",
      "발효 식품은 정신 건강에 도움이 된다 발효 식품의 예는 다음과 같습니다.",
      "특히 발효 식품은 장 건강에 좋은 것으로 알려져 있기 때문에 연구자들은 이러한 식품이 정신 건강에 어 떤 영향을 미치는지 알아보고자 하였습니다."
    ]
  },
  {
    "id": "bm-6-01",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 6/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "치매의 신경정신증상 - 2부 : 치료(약물 및 비약물적 접근)",
    "author": "김성윤",
    "institution": "울산대학교 서울아산병원",
    "pages": 6,
    "tags": [
      "스페셜토픽",
      "치매",
      "Brain&Mind"
    ],
    "summary": "치매의 신경정신증상 - 2부 : 치료(약물 및 비약물적 접근)을 중심으로 구성된 B&M 6호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "다른 환자?) 비약물적 치료 보호자 교육 항정신병 약물 시도 SSRI 시도 행동 문제가 호전되었는가?",
      "비정형 항정신병 약물 올란자핀, 퀘티아핀, 리스페리돈, 아리피 프라졸 등의 비정형 항정신병 약물은 치매 환자들에게 매우 많이 처방되는 약물이다.",
      "약물 치료에는 주로 비정형 항정신병 약 물, 아세틸콜린 분해효소 억제제, 메만틴, 항우울제, 기분 안정제 등이 포함된다."
    ]
  },
  {
    "id": "bm-6-02",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 6/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "병적인 웃음과 울음으로 내원한 79세 여성 / 1년 전부터 시작된 배회를 주소로 내원한 76세 남성 / 물건을 자꾸 쌓아두는 73세 여성",
    "author": "곽용태, 양영순, 왕민정",
    "institution": "효자병원 / 순천향대학교 천안병원 / 로아신경과의원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "Brain&Mind"
    ],
    "summary": "병적인 웃음과 울음으로 내원한 79세 여성을 중심으로 구성된 B&M 6호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "17Brain & Mind 증례 76세 남성이 5년 전부터 서서히 진행되 는 기억력 장애와 1년 전부터 발생한 지 속적인 배회를 주소로 내원하였다.",
      "환자는 1년 전부터 가끔 물건을 잊어버리고 찾지 못하 는 증상 등이 있었지만 집안 생활에 지장 이 있을 정도는 아니었고 이와 연관된 진 료나 치료는 하지 않았다.",
      "본인 이 했던 행동들을 부인하며 화를 내는 일 이 잦았으며, 1년 전부터 환자는 혼자서 돌 아다니는 행동, 초조 불안, 불면 등의 증상 이 있었다."
    ]
  },
  {
    "id": "bm-6-03",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 6/03 Article Review.pdf",
    "category": "Article Review",
    "title": "주관적 인지 저하와 알츠하이머병 및 비알츠하이머병 치매 발병률 / 아밀로이드 양성과 관련된 주관적 인지 저하의 특징 / 주관적 인지 저하에서 콜린성 전두엽의 용적 감소 / 주관적 인지 저하 질문지(SCD-Q) : 타당성 조사 / 주관적 인지 저하로부터 경도인지장애와 치매로 이행되는 위험과 그 변화 궤적",
    "author": "김영진, 나승희, 강민주, 류나영, 박소희",
    "institution": "성남시 노인보건센터 / 가톨릭대학교 인천성모병원 / 보훈공단 중앙보훈병원 / 가톨릭대학교 은평성모병원",
    "pages": 14,
    "tags": [
      "저널리뷰",
      "치매",
      "알츠하이머",
      "경도인지장애",
      "인지저하"
    ],
    "summary": "주관적 인지 저하와 알츠하이머병 및 비알츠하이머병 치매 발병률을 중심으로 구성된 B&M 6호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "강민주 / 보훈공단 중앙보훈병원 주관적 인지 저하에서 콜린성 전두엽의 용적 감소 Subregional volume reduction of the cholinergic forebrain in subjective cognitive decline(SCD) Neuroimage Clin.",
      "기억력 클리닉 및 지역사회 코호트에서 주관적 인지 저하 환자와 대조군의 치매 누적 위험도에 대한 Kaplan-Meier curves : 모집 환경 (기억력 클리닉 vs.",
      "또한, 콜린성 basal forebrain의 구조적 변 화, 인지 저하, 알츠하이머병 진행과 관련 된 기타 신경영상 바이오마커 사이의 관계 를 확인하고자 한다."
    ]
  },
  {
    "id": "bm-6-04",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 6/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "인지 기능 저하를 예방하는 식사법",
    "author": "박유경",
    "institution": "경희대학교",
    "pages": 4,
    "tags": [
      "핫이슈",
      "예방",
      "Brain&Mind"
    ],
    "summary": "인지 기능 저하를 예방하는 식사법을 중심으로 구성된 B&M 6호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Hot Issue 인지 기능 저하를 예방하는 식사법 박유경 / 경희대학교 Brain & Mind 38 Hot Issue 서론 치매는 약 5,500만 명에게 영향을 미치 는 전 세계 7위의 사망 원인이며, 향후 10 년 동안 전 세계 치매 환자의 수는 50% 증 가할 것으로 추정된다.",
      "혈관질환 위험이 높은 대상자들을 무작 위로 지중해식 식단 권고(올리브유 또는 혼 합 견과류 보충) 또는 저지방 조절 식단을 제공한 6.5년간 지중해 식단에 무작위로 배 정된 대상자들에게서 간이인지 기능 검사 (MMSE) 점수와 시계그리기 테스트(CDT) 가 개선됨을 확인할 수 있다.",
      "경도인지장애(mild cognitive impairment, MCI)는 건강한 개인의 정상적인 인지와 치 매 사이의 중간 상태이며, 필수 기능 능력이 보존되면서 인지 능력이 현저하게 감소하는 것이 특징이다."
    ]
  },
  {
    "id": "bm-6-05",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "05 Special Review.pdf",
    "pdfPath": "/B&M 6/05 Special Review.pdf",
    "category": "Special Review",
    "title": "Type 2 DM in old age(일차 치료의 관점에서)",
    "author": "김미경",
    "institution": "인제대학교 해운대백병원",
    "pages": 6,
    "tags": [
      "스페셜리뷰",
      "Brain&Mind"
    ],
    "summary": "Type 2 DM in old age(일차 치료의 관점에서)을 중심으로 구성된 B&M 6호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "이처럼 약제에 부작 용이 있고, 특히 드물게 나타나는 부작용 도 있는 경우에는 내분비 전문의에게 보 내는 게 좋다.",
      "두 번째 가정으로, 만약 환자의 eGFR이 45 mL/min/1.73m² 이하로 약제 사용이 까다로워질 때는 내분비 전문의에게 의뢰 하는 게 좋다.",
      "그러나, 체액량 감소로 인한 저혈 압, 소변 횟수 증가로 인한 불편감 및 야뇨 증에 의한 낙상 위험 증가, 체중 감소에 의 한 위약감이 증가될 수 있고, 요로감염, 신 우신염 및 드물게 케톤산증 위험이 있으므 로 노인 환자에서는 특히 주의해야 한다."
    ]
  },
  {
    "id": "bm-6-06",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "06 Doctor Plus.pdf",
    "pdfPath": "/B&M 6/06 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "‘어쩌면 아름다운 날들’ - 포도뮤지엄 탐방 / 리스본 여행기 / 진료실에서 쉽게 할 수 있는 간단한 ‘골프 피트니스’ / LLM 전쟁의 서막",
    "author": "박지욱, 편정민, 이정석",
    "institution": "박지욱신경과의원 / 순천향대학교 서울병원 / 제주대학교병원",
    "pages": 12,
    "tags": [
      "의사라이프&컬처",
      "골프",
      "LLM"
    ],
    "summary": "‘어쩌면 아름다운 날들’ - 포도뮤지엄 탐방을 중심으로 구성된 B&M 6호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "조성준 / 데스런 진료실에서 쉽게 할 수 있는 간단한 ‘골프 피트니스’ 54 Doctor Plus 골프만 치면 아픈 이유는 뻣뻣한 척추 때문!",
      "Chat GPT-4 를 소개하는 것은 특정 LLM을 선호하는 것이 아니라 사용 경험이 있는 것이 Chat GPT-4와 Copilot뿐이기 때문이다.",
      "단순한 chat bot이 아니라 text 생성, 심지 어 존재하지 않은 story 생성을 하므로 자 연스런 대화가 가능하지만 거짓말의 위험 성이 언제나 있다."
    ]
  },
  {
    "id": "bm-6-07",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "07 Q_A.pdf",
    "pdfPath": "/B&M 6/07 Q_A.pdf",
    "category": "Q&A",
    "title": "포스파티딜세린의 인지 기능 개선 효과가 궁금합니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "임상Q&A",
      "Brain&Mind"
    ],
    "summary": "포스파티딜세린의 인지 기능 개선 효과가 궁금합니다.을 중심으로 구성된 B&M 6호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Q&A 포스파티딜세린의 인지 기능 개선 효과가 궁금합니다.",
      "PS를 복용 시, 인지 기능 개선 효과에 대한 다음과 같은 다양한 연구가 있습니다.",
      "특히 기존의 인지 기능 관련 약물 치료를 대체할 수 없습니다."
    ]
  },
  {
    "id": "bm-6-08",
    "issue": "B&M 6호",
    "issueNum": 6,
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "filename": "08 B-M News.pdf",
    "pdfPath": "/B&M 6/08 B-M News.pdf",
    "category": "B-M News",
    "title": "알츠하이머병에서의 장-뇌 상호작용 : AI를 이용한 연구 식품과 물에서 발견된 미세 플라스틱 : 장에서 뇌로 전파 가능 치매 치료를 위한 항정신병약 : 예상보다 더한 건강 위험",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 10,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머",
      "AI"
    ],
    "summary": "알츠하이머병에서의 장-뇌 상호작용 : AI를 이용한 연구 식품과 물에서 발견된 미세 플라스틱 : 장에서 뇌로 전파 가능 치매 치료를 위한 항정신병약 : 예상보다 더한 건강 위험을 중심으로 구성된 B&M 6호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "식품과 물에서 발견된 미세 플라스틱 : 장에서 뇌로 전파 가능 치매 치료를 위한 항정신병약 : 예상보다 더한 건강 위험 새로운 연구는 이전에 생각했던 것보다 치매 환자에게 항정신병 약물을 투여하는 것과 관련된 건강 상의 위험이 더 많다 고 보고합니다.",
      "• 새로운 연구에서 연구자들은 항정신병약을 복용하는 치매 환자들에게 잠재적인 건강 위험 목록을 확장하고 있습니다.",
      "연구 저자 Marcus Garcia 박사는 “우리의 연구 결과는 미세 플라스틱 노출이 이러한 조직에서 대사적 변화를 일으킬 수 있음을 시사하며, 잠재적인 전신적 효과를 나타냅니다”라고 말했습니다."
    ]
  },
  {
    "id": "bm-7-01",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 7/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "노인 정상압수두증의 진단 및 치료",
    "author": "강경훈",
    "institution": "칠곡경북대학교병원",
    "pages": 4,
    "tags": [
      "스페셜토픽",
      "정상압수두증",
      "Brain&Mind"
    ],
    "summary": "노인 정상압수두증의 진단 및 치료을 중심으로 구성된 B&M 7호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "특발정상압수두증은 션트 수술로 치료 가 가능하다는 점을 함께 고려할 때, 노인 에서 진단을 놓쳐서는 안 되는 중요한 질 환임을 명심해야 하겠다.",
      "특발 정상압수두증의 진단에서 가장 중요한 두 가지 요소는 특징적인 보행장애와 구조적 뇌 영상에서의 변화를 실제 진료 현장에서 놓치지 않는 것이라고 생각한다.",
      "뇌 동반질환이 있는 특발정상압수두증 환자도 션트 수술 후 호전될 수 있지만, 결 과는 ‘전형적인’ 특발정상압수두증 환자에 비해 덜 만족스러울 수 있다."
    ]
  },
  {
    "id": "bm-7-02",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 7/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "보행장애로 내원한 74세 남성 / 와상 상태로 이행된 뇌수두증을 동반한 중증 조발성 알츠하이머병으로 입원한 51세 여성 / 인지 저하와 보행장애를 주소로 내원한 77세 남성",
    "author": "박영호, 정지향, 강경훈",
    "institution": "분당서울대학교병원 / 이화여자대학교 이대서울병원 / 칠곡경북대학교병원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "알츠하이머",
      "인지저하"
    ],
    "summary": "보행장애로 내원한 74세 남성을 중심으로 구성된 B&M 7호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "고찰 본 증례는 와상 상태로 이행된 뇌수두 증을 동반한 중증 조발성 알츠하이머병 환 자에서 뇌실복강간단락술 후 보행장애 및 보행실조증이 호전된 증례이다.",
      "필자는 인지 기능장애와 보행장애를 주 증상으로 하는 77세 환자에서 특발정상압 수두증을 진단하였고, 알츠하이머병 병리 가 확인되었음에도 불구하고 션트 수술 후 6개월 뒤 보행 능력과 인지 기능이 분명하 게 호전된 것을 객관적인 신경심리 검사와 보행 평가를 통해 관찰하였다.",
      "심한 보행 장애와 인지 기능 저하, 그리고 아밀로이드 PET에서 확인된 알츠하이머병 병리를 고 려할 때, 본 증례에서 션트 수술을 결정하 는 것은 어려운 일이었다."
    ]
  },
  {
    "id": "bm-7-03",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 7/03 Article Review.pdf",
    "category": "Article Review",
    "title": "알츠하이머병 치료를 위한 아밀로이드를 표적으로 하는 단일클론 항체의 임상적으로 중요한 이득과 위험성: 체계적 문헌 고찰 및 메타 분석 / 알츠하이머병 진단과 치료 연구를 위한 혈장 인산화 타우 / 알츠하이머병의 바이오마커: 조기 및 감별 진단과 비전형 변이 진단의 역할 / 알츠하이머병 치료를 위한...",
    "author": "편정민, 김영진, 강민주, 나승희, 류나영",
    "institution": "순천향대학교 서울병원 / 강남구립행복요양병원 / 보훈공단 중앙보훈병원 / 가톨릭대학교 인천성모병원",
    "pages": 22,
    "tags": [
      "저널리뷰",
      "알츠하이머",
      "아밀로이드",
      "바이오마커"
    ],
    "summary": "알츠하이머병 치료를 위한 아밀로이드를 표적으로 하는 단일클론 항체의 임상적으로 중요한 이득과 위험성: 체계적 문헌 고찰 및 메타 분석을 중심으로 구성된 B&M 7호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "렘터네투그(remternetug) 혈장 인산화 타우와 아밀로이드 PET 양 성을 확인한 초기 증상성 알츠하이머병 환 자를 대상으로 현재 3상 임상 시험이 진행 중이다.",
      "임상 현장에 서 활용 가능한 AD 바이오마커로는 MRI, FDG-PET, 타우 PET, CSF의 아밀로이 드 및 타우 측정, 그리고 혈장 바이오마커 가 포함된다.",
      "한 예로, 임상 시험 에서 혈장 인산화 타우를 측정하여 참가자 를 사전 선별하고 알츠하이머병 발병 가능 성이 높은 사람들을 모집한 후 뇌척수액이 나 PET 스캔 검사로 확인할 수 있다."
    ]
  },
  {
    "id": "bm-7-04",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "04 Hot Issue.pdf",
    "pdfPath": "/B&M 7/04 Hot Issue.pdf",
    "category": "Hot Issue",
    "title": "재택의료의 경험과 앞으로의 방향",
    "author": "이상범",
    "institution": "서울신내의원",
    "pages": 4,
    "tags": [
      "핫이슈",
      "Brain&Mind"
    ],
    "summary": "재택의료의 경험과 앞으로의 방향을 중심으로 구성된 B&M 7호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "일차 의료 방문 진료 수가 시범사업 장기요양 재택의료센터 시범사업 참여 기관 모든 의원급 의료기관 참여 가능.",
      "Hot Issue Brain & Mind 재택의료의 경험과 앞으로의 방향 이상범 / 서울신내의원 44 Hot Issue 이미 유례없는 초고령화 사회가 된 일본 은 지금 우리가 고민하고 있는 문제들을 먼 저 고민했습니다.",
      "그러던 중에 거동이 힘들어 병원을 갈 수 없는 환자들을 시설과 병원이 아닌 집에서 의료와 돌봄 서비스를 받게 한다는 ‘커뮤니 티 케어’ 아젠다가 논의되었고, 2019년에는 <일차 의료 방문진료 수가 시범사업>(이하, ‘일방시’)이 시작되었습니다."
    ]
  },
  {
    "id": "bm-7-05",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "05 Special Review.pdf",
    "pdfPath": "/B&M 7/05 Special Review.pdf",
    "category": "Special Review",
    "title": "심방세동 정확히 진단하기",
    "author": "박종성",
    "institution": "동아대학교병원",
    "pages": 6,
    "tags": [
      "스페셜리뷰",
      "Brain&Mind"
    ],
    "summary": "심방세동 정확히 진단하기을 중심으로 구성된 B&M 7호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "심방세동 처럼 심박수가 빠르면 방실전도의 차단/ 지연으로 인해 QRS파 사이의 간격이 일 정하지 않는 경우가 많지만, 심박수가 느 리면 QRS파 사이의 간격이 일정해 보일 수 있다.",
      "리듬 스트립에서 심방세동이 30초 이상 지속되는 것이 확인되었으므로 임상적 심방세동으로 정의할 수 있다.",
      "결론 심방세동을 정확히 진단하고 항응고요법 시행 여부를 결정하기 위해서 심방세동 심 전도의 중요한 특징과 임상적 심방세동의 정의를 잘 기억해 둘 필요가 있다."
    ]
  },
  {
    "id": "bm-7-06",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "06 Doctor Plus.pdf",
    "pdfPath": "/B&M 7/06 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "GPT-4o, Prompts and Specialized GPTs / 나르시시스트의 가스라이팅 / 알고 보면 재미있는 알쏭달쏭 골프룰 / 오페라 ‘리골레토’ 감상을 추천합니다.",
    "author": "이정석, 원은수, 민학수, 김상윤",
    "institution": "제주대학교병원 / 토킹닥터스 정신건강의학과의원 / 조선일보 스포츠 전문기자 / 분당서울대학교병원",
    "pages": 20,
    "tags": [
      "의사라이프&컬처",
      "골프",
      "Brain&Mind"
    ],
    "summary": "GPT-4o, Prompts and Specialized GPTs을 중심으로 구성된 B&M 7호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "또 성악가별로 다른 음악을 비교해서 들을 수도 있다.",
      "구제를 받아 드롭을 할 때는 다른 공으 로 교체할 수도 있고 닦을 수도 있다.",
      "또한 3번 홀을 플레이하고 있다 면 4번이나 5번 등 다른 홀은 해당 티잉 구 역이 아니다."
    ]
  },
  {
    "id": "bm-7-07",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "07 Q_A.pdf",
    "pdfPath": "/B&M 7/07 Q_A.pdf",
    "category": "Q&A",
    "title": "치매 환자의 배회 증상이 궁금합니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "임상Q&A",
      "치매",
      "Brain&Mind"
    ],
    "summary": "치매 환자의 배회 증상이 궁금합니다.을 중심으로 구성된 B&M 7호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Brain & Mind 74 Q&A 치매 환자의 배회 증상이 궁금합니다.",
      "이러한 앱을 사 용하면 실종 가능성이 높은 치매 환자의 현 재 위치를 실시간으로 확인할 수 있습니다.",
      "◎ 치매 환자가 배회하는 증상이 발생했는데요, 이러한 증상은 왜 생기나요?"
    ]
  },
  {
    "id": "bm-7-08",
    "issue": "B&M 7호",
    "issueNum": 7,
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "filename": "08 B-M News.pdf",
    "pdfPath": "/B&M 7/08 B-M News.pdf",
    "category": "B-M News",
    "title": "뇌를 젊게 유지하는 운동 증상이 없는 알츠하이머: 그들의 뇌에서는 무슨 일이 일어나는 걸까요? 우울증과 노인의 기억력 저하 치매의 새로운 수정 가능한 위험요인: 콜레스테롤과 눈 건강",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 8,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머",
      "우울증"
    ],
    "summary": "뇌를 젊게 유지하는 운동 증상이 없는 알츠하이머: 그들의 뇌에서는 무슨 일이 일어나는 걸까요? 우울증과 노인의 기억력 저하 치매의 새로운 수정 가능한 위험요인: 콜레스테롤과 눈 건강을 중심으로 구성된 B&M 7호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "--- B&M News - 뇌를 젊게 유지하는 운동 - 증상이 없는 알츠하이머: 그들의 뇌에서는 무슨 일이 일어나는 걸까요?",
      "•이 새로운 연구의 결과는 노인의 우울증과 기억력 상실을 치료하기 위한 치료적 개입에 중요한 영향을 미칠 수 있습니다.",
      "연구에 따르면 우울증 증상이 더 심한 사람들이 가속화된 기억력 상실을 경험했습니다."
    ]
  },
  {
    "id": "bm-10-01",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 10/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "치매의 예방: 인지 기능의 저하 없이 노년을 즐기기 위해서",
    "author": "김상윤",
    "institution": "분당서울대학교병원",
    "pages": 4,
    "tags": [
      "스페셜토픽",
      "치매",
      "예방"
    ],
    "summary": "치매의 예방: 인지 기능의 저하 없이 노년을 즐기기 위해서을 중심으로 구성된 B&M 10호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "인지 기능의 저하와 치매, 알츠하이머병 사람은 나이가 들면 인지 기능이 저하된 다고 알려져 있다.",
      "특히 알츠하이머병은 외상성 뇌 손상, 뇌혈관질환, 약물 부작용, 뇌수두증과 같이 인지 저하를 유발할 수 있는 많은 다른 질 환과도 흔하게 동반되어 나타나는데, 이런 경우 인지 기능 저하 또는 치매의 원인을 뚜렷하게 구분해 내기는 매우 어렵다.",
      "하지만 정신적인 것은 그 영향이 절대적인데, 특히 인지 기능 의 유지는 우리가 노년까지 즐거운 생활을 유지하기 위해 꼭 필요한 기능이다."
    ]
  },
  {
    "id": "bm-10-02",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 10/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "메리 수녀님은 왜 치매에 걸리지 않은 걸까? / 알츠하이머병 병리 소견을 가진 경도 인지장애 환자 1례에서의 SUPERBRAIN 다중영역중재 프로그램의 효과 / 10년간 인지 치료를 지속하고 있는 76세 남성",
    "author": "양동원, 정지향, 나해리",
    "institution": "가톨릭대학교 서울성모병원 / 이화여자대학교 이대서울병원 / 보바스기념병원",
    "pages": 12,
    "tags": [
      "임상모닝컨퍼런스",
      "치매",
      "알츠하이머",
      "경도인지장애",
      "AI"
    ],
    "summary": "메리 수녀님은 왜 치매에 걸리지 않은 걸까?을 중심으로 구성된 B&M 10호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Morning Conference Case 메리 수녀님은 왜 치매에 걸리지 않은 걸까?",
      "나해리 / 보바스기념병원 10년간 인지 치료를 지속하고 있는 76세 남성 20 Morning Conference Case 3.",
      "Effectiveness of a cognitive rehabilitation program in mild dementia (MD) and mild cognitive impairment (MCI): a case control study."
    ]
  },
  {
    "id": "bm-10-03",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 10/03 Article Review.pdf",
    "category": "Article Review",
    "title": "치매 예방을 위한 일본형 다중영역중재 연구(J-MINT): 무작위 대조 연구 / 알츠하이머병 전단계(prodromal Alzheimer’s disease)에서 다중영역 생활습관중재와 의료영양식품의 통합: MIND-ADmini 무작위 대조 연구 / 알츠하이머병으로 인한 경도 인지장애 또는 초기 치매의...",
    "author": "류나영, 나승희, 김영진, 강민주, 편정민",
    "institution": "가톨릭대학교 은평성모병원 / 가톨릭대학교 인천성모병원 / 우성재활요양병원 / 보훈공단 중앙보훈병원",
    "pages": 16,
    "tags": [
      "저널리뷰",
      "치매",
      "알츠하이머",
      "경도인지장애",
      "예방"
    ],
    "summary": "치매 예방을 위한 일본형 다중영역중재 연구(J-MINT): 무작위 대조 연구을 중심으로 구성된 B&M 10호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "결론 이 연구는 알츠하이머병으로 인한 경도 인지장애 또는 초기 치매 환자들에게 집중 적인 생활습관 변화가 인지 및 기능 개선에 긍정적인 영향을 미칠 수 있음을 보여준다.",
      "고찰 PRODEMOS 연구는 코치 지원 mHealth 개입이 치매 위험요소를 줄이는 데 효과적일 수 있음을 보여주었다.",
      "최근 핀란드 노인 개입 연구(FINGER)는 위험군 노인에서 다중영역 생활습관중재가 인지 기능 개선에 효과가 있음을 보여주었고, LipiDiDiet 연구 는 전단계 알츠하이머병 환자에서 의료영양 식품의 이점을 입증했다."
    ]
  },
  {
    "id": "bm-10-04",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "04 Special Review.pdf",
    "pdfPath": "/B&M 10/04 Special Review.pdf",
    "category": "Special Review",
    "title": "노인들을 위한 예방 접종 가이드라인",
    "author": "이재갑",
    "institution": "한림대학교 강남성심병원",
    "pages": 8,
    "tags": [
      "스페셜리뷰",
      "예방",
      "Brain&Mind"
    ],
    "summary": "노인들을 위한 예방 접종 가이드라인을 중심으로 구성된 B&M 10호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "코로나19 - 만 65세 이상 매년 최신 백신 1회 접종 권고.",
      "접종 방법: Tdap 및 Td 백신 모두 0.5 mL를 근육 주사로 투여한다.",
      "권고 시기 및 접종 간격: RSV 백신은 성 인에서 1회 접종으로 완료된다."
    ]
  },
  {
    "id": "bm-10-05",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 10/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "‘AI’-based statistical analysis / 스카치 싱글몰트 위스키 / ‘생이기정’을 가보자 / 만성 자살과 알코올 / 의사들을 위한 스타트업 장외 투자: 부와 혁신의 교차점에서 / 미술관에서 만난 인생의 장면들 - <론 뮤익: 인생극장>",
    "author": "이정석, 이기중, 박지욱, 이병욱, 이승원, 황지영",
    "institution": "제주대학교병원 / 전남대학교 문화인류고고학과 / 박지욱신경과의원 / 현대병원",
    "pages": 30,
    "tags": [
      "의사라이프&컬처",
      "위스키",
      "AI"
    ],
    "summary": "‘AI’-based statistical analysis을 중심으로 구성된 B&M 10호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "다행히 우리나라에서는 스타트업 기업 투자 시 많은 세재 혜택을 주고 있다.",
      "71Brain & Mind 이승원 / 한양내과의원 의사들을 위한 스타트업 장외 투자: 부와 혁신의 교차점에서 의사라는 직업은 오랫동안 안정적인 고 소득과 사회적 신뢰를 상징해 왔다.",
      "많은 의사들이 자 신의 전문성을 넘어 재정적 자유와 사회적 영향력을 추구하며 투자 세계로 발을 내딛 고 있다."
    ]
  },
  {
    "id": "bm-10-06",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 10/06 Q_A.pdf",
    "category": "Q&A",
    "title": "“백신이 치매를 막는다?” - 대상포진, 폐렴구균, 독감 백신의 치매 예방 효과",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "임상Q&A",
      "치매",
      "예방",
      "백신"
    ],
    "summary": "“백신이 치매를 막는다?” - 대상포진, 폐렴구균, 독감 백신의 치매 예방 효과을 중심으로 구성된 B&M 10호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "대상포진 백신 접종군과 비접종군에서 치매 발생률을 비교 분석했다.",
      "60세 이상 성인 1,377,932명을 대상으로 대상포진 백신 접종 여부와 치매 발병 위험을 추적 분석했다.",
      "Q&A “백신이 치매를 막는다?” - 대상포진, 폐렴구균, 독감 백신의 치매 예방 효과 Brain & Mind 78 Q&A “백신이 치매를 막는다?” - 대상포진, 폐렴구균, 독감 백신의 치매 예방 효과 ◎ 대상포진과 치매 위험도는 어떤 관계가 있나?"
    ]
  },
  {
    "id": "bm-10-07",
    "issue": "B&M 10호",
    "issueNum": 10,
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 10/07 B-M News.pdf",
    "category": "B-M News",
    "title": "음주, 뇌 손상 통해 치매 위험 높일 수 있어: 과거 과음 경험도 인지 기능 저하와 연관 당뇨병 치료제, 알츠하이머병 위험 최대 43% 낮춰: GLP-1 작용제·SGLT2 억제제, 치매 예방 효과 보여",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 8,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머",
      "예방",
      "당뇨병"
    ],
    "summary": "음주, 뇌 손상 통해 치매 위험 높일 수 있어: 과거 과음 경험도 인지 기능 저하와 연관 당뇨병 치료제, 알츠하이머병 위험 최대 43% 낮춰: GLP-1 작용제·SGLT2 억제제, 치매 예방 효과 보여을 중심으로 구성된 B&M 10호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "•새로운 연구는 특정 당뇨병 치료제와 치매 간의 연관성을 조사하고 있다.",
      "•여러 연구들은 청력 손실이 치매 발병 위험 증가와 관련이 있음을 보여주었다.",
      "기존 연구에서는 고령, 유전, 당뇨병, 고혈압과 같은 만성 질환, 그리고 신경계에 영향을 주는 바이러스 감염이 치매 위험 요인으로 알려져 왔다."
    ]
  },
  {
    "id": "bm-11-01",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 11/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "노년기 우울증과 인지 저하 / 왜, 치매 예방·중재·돌봄인가?: 2024년 ‘Lancet’ 보고서 정리",
    "author": "김성윤, 정지향",
    "institution": "울산대학교 서울아산병원 / 이화여자대학교 이대서울병원",
    "pages": 12,
    "tags": [
      "스페셜토픽",
      "치매",
      "인지저하",
      "우울증",
      "예방"
    ],
    "summary": "노년기 우울증과 인지 저하을 중심으로 구성된 B&M 11호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "관찰 연구 종합에서 는 보청기 사용이 인지 저하 및 치매 위험 감소와 관련되는 것으로 정리되었다.",
      "Dementia prevention, intervention, and care: 2020 report of the Lancet Commission.",
      "교육 기회 확대, 청력·시력 관 리, 심혈관 위험요인 조절, 사회적 참여 증 진 등에 대한 체계적이고 지속적인 접근이 인지 기능 보호와 치매 예방에 의미 있는 기여를 할 수 있을 것으로 기대된다."
    ]
  },
  {
    "id": "bm-11-02",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 11/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "가성 치매를 정확히 진단받고 치매 증상에서 해방된 72세 여성 / 1년 전부터 진행하는 기억력 저하로 내원한 82세 여성 / 우울증이 동반된 혈관성 인지장애를 호소하는 74세 남성",
    "author": "김희진, 왕민정, 양영순",
    "institution": "한양대학교병원 / 로아신경과의원 / 순천향대학교 천안병원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "치매",
      "우울증"
    ],
    "summary": "가성 치매를 정확히 진단받고 치매 증상에서 해방된 72세 여성을 중심으로 구성된 B&M 11호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "고찰 고령화의 가속화와 더불어 인지 기능 저 하를 호소하는 환자의 수가 급증하고 있 김희진 / 한양대학교병원 가성 치매를 정확히 진단받고 치매 증상에서 해방된 72세 여성 21Brain & Mind 다.",
      "또한 국소적 신 경학적 결손이나 과거 뇌혈관질환 병력이 없어 혈관성 치매 가능성도 낮았으며, 약물 복용력이나 대사성 질환(갑상선 기능 저하, 비타민 B12 결핍) 등 인지 저하를 유발할 수 있는 기타 원인들 역시 배제되었다.",
      "노년기 우울증의 중요한 특징 중 하나는 인지 기능 저하가 흔히 동반된다는 점이 다."
    ]
  },
  {
    "id": "bm-11-03",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 11/03 Article Review.pdf",
    "category": "Article Review",
    "title": "LUMIPULSE 자동화 플랫폼을 이용한 알츠하이머병 혈장 바이오마커의 진단 성능 평가 / 뇌혈관질환이 동반된 아시아 알츠하이머병 환자에서 혈장 P-tau181/ Aβ42 비율과 뇌 아밀로이드 침착 및 해마 위축과의 연관성 / 알츠하이머병의 유전자와 바이오마커 개요 / 알츠하이머병의 최신지견:...",
    "author": "나승희, 강민주, 류나영, 김영진, 편정민, 박소희",
    "institution": "가톨릭대학교 인천성모병원 / 보훈공단 중앙보훈병원 / 가톨릭대학교 은평성모병원 / 우성재활요양병원",
    "pages": 24,
    "tags": [
      "저널리뷰",
      "알츠하이머",
      "아밀로이드",
      "바이오마커"
    ],
    "summary": "LUMIPULSE 자동화 플랫폼을 이용한 알츠하이머병 혈장 바이오마커의 진단 성능 평가을 중심으로 구성된 B&M 11호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "결론 및 고찰 본 연구는 완전 자동화 플랫폼에서 혈장 바이오마커들이 알츠하이머병 병리학적 변화 검출에 높은 진단 정확도를 보이는 것을 확인했으며, 특히 pTau217이 기억장애 클리닉의 실제 임상 환경에서 환자 식별에 가장 우수한 성능을 나타냈다.",
      "이처럼 진단이 늦어지는 원인으로는, 1차 진료 현장에서의 제한적인 인지 선별 검사, 진단 수단의 비용 및 접근성 문제, 그리고 치매 전문 인력 부족 등이 있다.",
      "특히 아밀로이드 베타(amyloid-β, Aβ)나 인산 화 타우 단백(phosphorylated tau protein) 을 측정하는 혈액 검사는 비침습적이고, 접근성이 높아 AD 조기 진단 및 약물 치료 의 문턱을 낮출 수 있을 것으로 기대된다."
    ]
  },
  {
    "id": "bm-11-04",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "04 Special Review.pdf",
    "pdfPath": "/B&M 11/04 Special Review.pdf",
    "category": "Special Review",
    "title": "인지 저하를 동반한 노인에서의 당뇨병 치료 지침 및 관리",
    "author": "고은희",
    "institution": "울산대학교 서울아산병원",
    "pages": 10,
    "tags": [
      "스페셜리뷰",
      "인지저하",
      "당뇨병"
    ],
    "summary": "인지 저하를 동반한 노인에서의 당뇨병 치료 지침 및 관리을 중심으로 구성된 B&M 11호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "저혈당 관리 및 예방: 특히 노인 및 인지 기능 저하 환자에서의 유의사항 저혈당은 당뇨병 환자, 특히 노인 및 인 지 기능이 저하된 환자에게 매우 위험한 급성 합병증이다.",
      "Management of diabetes in the elderly.",
      "Wu(2023) 20세 이상 2형 당뇨병 환자 (치매 기왕력 없음) SGLT2i: 103,247명 대조군: 103,247명 SGLT2 억제제 vs."
    ]
  },
  {
    "id": "bm-11-05",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 11/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "SF 작가 ‘테드 창(Ted Chiang)’ / 우리 술의 깊은 맛 ‘막걸리’ / 산미 있는 커피가 좋은 커피라고? / 망고(Mango)에 대하여 알아보자 / 치킨 한 조각의 국적: 조류독감과 원산지에 대한 소소한 탐색",
    "author": "김성윤, 이기중, 이도경, 양동원, 심용수",
    "institution": "울산대학교 서울아산병원 / 전남대학교 / 커피멜로우 대표, CQI Q-Grader / 가톨릭대학교 서울성모병원",
    "pages": 16,
    "tags": [
      "의사라이프&컬처",
      "커피",
      "Brain&Mind"
    ],
    "summary": "SF 작가 ‘테드 창(Ted Chiang)’을 중심으로 구성된 B&M 11호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Brain & Mind Doctor Plus SF 작가 ‘테드 창(Ted Chiang)’ 김성윤 / 울산대학교 서울아산병원 우리 술의 깊은 맛 ‘막걸리’ 이기중 / 전남대학교 산미 있는 커피가 좋은 커피라고?",
      "이렇게 분류된 스페셜티 등급의 커피들 은 대체로 분명한 향미를 품고 있고, 깨끗 한 후미와 기분 좋은 산미를 지니고 있다.",
      "에티오피아 커피는 꽃 향과 약간의 시트 러스한 맛, 그리고 열대 과일 또는 베리류 의 맛을 지니고 있다."
    ]
  },
  {
    "id": "bm-11-06",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 11/06 Q_A.pdf",
    "category": "Q&A",
    "title": "2025년 6월 대한치매학회에서 발표된 “경도인지장애 임상 진료지침”이 궁금합니다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "임상Q&A",
      "치매",
      "경도인지장애"
    ],
    "summary": "2025년 6월 대한치매학회에서 발표된 “경도인지장애 임상 진료지침”이 궁금합니다.을 중심으로 구성된 B&M 11호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "권고문: 경도인지장애 환자에게 인지 기능 개선을 위해 아세틸콜린분해효소 억제제 사용을 고려할 수 있다 [권고등급: B 조건부 시행 권고, 근거수준: 중등도(moderate)].",
      "경도인지장애 환자에서 인지중재를 수행하는 것은 전반적인 인지 기능 에 도움이 될 수 있는 것으로 보이며, 세부 인지 기능 및 삶의 질에도 긍정적인 효과를 보이고 있다.",
      "임상적 고려사항: 경도인지장애 환자에게 인지와 운동의 복합중재는 대조군에 비해 인지 기능과 일상 생활 능력에서 유의 한 효과를 확인하였으므로 권고된다."
    ]
  },
  {
    "id": "bm-11-07",
    "issue": "B&M 11호",
    "issueNum": 11,
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 11/07 B-M News.pdf",
    "category": "B-M News",
    "title": "치매 증상 시작 후 진단까지 평균 3.5년 치매 사례 32%가 난청과 연관될 수 있다 알츠하이머병 진행을 늦추는 약물, 실제 외래에서 사용해도 안전하고 효과적 앉아 있는 시간을 줄이자! - 알츠하이머병 위험 감소의 핵심",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머"
    ],
    "summary": "치매 증상 시작 후 진단까지 평균 3.5년 치매 사례 32%가 난청과 연관될 수 있다 알츠하이머병 진행을 늦추는 약물, 실제 외래에서 사용해도 안전하고 효과적 앉아 있는 시간을 줄이자! - 알츠하이머병 위험 감소의 핵심을 중심으로 구성된 B&M 11호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "--- B&M News - 치매 증상 시작 후 진단까지 평균 3.5년 - 치매 사례 32%가 난청과 연관될 수 있다 - 알츠하이머병 진행을 늦추는 약물, 실제 외래에서 사용해도 안전하고 효과적 - 앉아 있는 시간을 줄이자!",
      "- 알츠하이머병 위험 감소의 핵심 Written by Corrie Pelc on on Medical News Today 88 B&M News 우리가 노화를 늦추기 위해 노력할 수는 있지만, 현재로서는 이를 완전히 막을 수 없다.",
      "Gogniat 박사가 주저자로 참여한 이번 연구는, 노인들이 앉아 있거나 누워 있는 등 좌식 생활에 더 많은 시간을 보낼수록, 운동량과 무관하게 인지 기능 저하 및 알츠하이머병 발병과 연관된 뇌 부위 위축 위험이 높아진다고 보고했다."
    ]
  },
  {
    "id": "bm-12-01",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 12/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "섬망과 치매의 상호작용: 병태생리, 임상적 함의 및 delirium superimposed on dementia에 대한 최신 고찰 / 미국 US POINTER 무작위 임상 시험 분석: 인지 저하 고위험 노인 에서 다영역 생활습관 중재의 인지 보호 효과",
    "author": "나해리, 정지향",
    "institution": "보바스기념병원 / 이화여자대학교 이대서울병원",
    "pages": 18,
    "tags": [
      "스페셜토픽",
      "치매",
      "인지저하",
      "섬망"
    ],
    "summary": "섬망과 치매의 상호작용: 병태생리, 임상적 함의 및 delirium superimposed on dementia에 대한 최신 고찰을 중심으로 구성된 B&M 12호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "섬망과 치매: delirium superimposed on dementia 치매와 섬망은 서로를 강화하는 관계에 있다.",
      "이러한 요인이 섬망 발생과 이후 인지 기능 악화에 기여할 수 있다.",
      "치매 환자에서 발생 하는 섬망, 즉 delirium superimposed on dementia(DSD)는 사망률, 기능 저하, 요 양시설 입소, 건강의료 이용 증가와 강하게 연관된 고위험 상태이다."
    ]
  },
  {
    "id": "bm-12-02",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 12/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "감기약 복용 후 발생한 약물 유발 섬망으로 내원한 79세 남성 / 고관절 수술 후 섬망으로 내원한 78세 남성 / 수술 후 섬망으로 협진한 69세 여성",
    "author": "왕민정, 양영순, 김희진",
    "institution": "로아신경과의원 / 순천향대학교 천안병원 / 한양대학교병원",
    "pages": 8,
    "tags": [
      "임상모닝컨퍼런스",
      "섬망",
      "Brain&Mind"
    ],
    "summary": "감기약 복용 후 발생한 약물 유발 섬망으로 내원한 79세 남성을 중심으로 구성된 B&M 12호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "이 는 수술 전의 아밀로이드 올리고머화 경 향이 수술 후 섬망의 병태생리적 취약성 (vulnerability)을 반영한다는 가설을 지지 양영순 / 순천향대학교 천안병원 고관절 수술 후 섬망으로 내원한 78세 남성 29Brain & Mind 한다.",
      "토의 본 증례는 수술 전 이미 혈장 MDS-Oaβ 농도가 높은 고령 환자에서, 수술 자체로 인한 변화가 거의 없음에도 불구하고 명 확한 수술 후 섬망이 발생한 사례이다.",
      "예를 들어, 수술 전 MDS-Oaβ가 높게 측정된 환자에게는 가족 동반, 환경 중재, 약물 감량, 수면 주기 유지 등의 섬망 예방 번들을 집중적으로 적 용하는 전략이 제시될 수 있다."
    ]
  },
  {
    "id": "bm-12-03",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 12/03 Article Review.pdf",
    "category": "Article Review",
    "title": "노인의 섬망과 치매: 때때로 연관되는가?, 아니면 항상 함께 존재하는가? / 노인에서 섬망과 치매 발생과의 관련성: 체계적 문헌 고찰 및 메타 분석 / 치매 환자의 섬망 예방: 위험요인 관리 / 중등도-중증 치매 환자에서 섬망을 놓치지 않는 법: CAM 기반 실전 진단 전략 / 중환자실 섬망 치...",
    "author": "강민주, 편정민, 김영진, 박소희, 류나영, 나승희",
    "institution": "보훈공단 중앙보훈병원 / 분당서울대학교병원 / 우성재활요양병원 / 보바스기념병원",
    "pages": 14,
    "tags": [
      "저널리뷰",
      "치매",
      "섬망",
      "예방"
    ],
    "summary": "노인의 섬망과 치매: 때때로 연관되는가?, 아니면 항상 함께 존재하는가?을 중심으로 구성된 B&M 12호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Article Review 노인의 섬망과 치매: 때때로 연관되는가?, 아니면 항상 함께 존재하는가?",
      "결론 중증 치매 환자에서 섬망을 진단하는 가장 중요한 요소는 “환자의 평소 상태와 다른 점이 무엇인가”를 파악하는 것이다.",
      "실제 임상 연구(ECT-AD trial)에서 시행 된 CAM(confusion assessment method) 기반 섬망 평가 프로토콜 사례 소개 이를 통해 중증 치매 환자에게 가장 적 합한 평가 방법과 실용적 진단 전략을 제 시하였다."
    ]
  },
  {
    "id": "bm-12-04",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "04 Special Review.pdf",
    "pdfPath": "/B&M 12/04 Special Review.pdf",
    "category": "Special Review",
    "title": "AI 진단, 과연 믿을 수 있는가?",
    "author": "윤영철",
    "institution": "중앙대학교병원",
    "pages": 4,
    "tags": [
      "스페셜리뷰",
      "AI",
      "Brain&Mind"
    ],
    "summary": "AI 진단, 과연 믿을 수 있는가?을 중심으로 구성된 B&M 12호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Special Review AI 진단, 과연 믿을 수 있는가?",
      "의학 교육 과 정에 AI 커리큘럼이 포함되고 있고, 다양 한 온라인 강좌도 있다.",
      "이게 바로 ‘AI 지원 공유의사결정(AI- SDM)’이다."
    ]
  },
  {
    "id": "bm-12-05",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 12/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "커피 브루잉(핸드드립)의 맛의 차이를 결정짓는 요인과 물의 결정적 역할 / ‘샤인 머스캣’ 초록빛이 품은 달콤한 혁명 / 대한(大韓)의 탄생, 대삼한(大三韓)의 귀환 / 신경과 치매 전문 의사가 읽은 ‘노랑무늬영원’",
    "author": "이도경, 양동원, 심용수, 정지향",
    "institution": "커피멜로우 대표, CQI Q-Grader / 가톨릭대학교 서울성모병원 / 가톨릭대학교 성빈센트병원 / 이화여자대학교 이대서울병원",
    "pages": 16,
    "tags": [
      "의사라이프&컬처",
      "치매",
      "커피"
    ],
    "summary": "커피 브루잉(핸드드립)의 맛의 차이를 결정짓는 요인과 물의 결정적 역할을 중심으로 구성된 B&M 12호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "최근에는 샤인 머스캣을 와인으로 만드 는 시도도 이어지고 있다.",
      "최근 국내 재배지에서는 샤인 머스캣의 당도 하락과 향의 약화가 보고되고 있다.",
      "일본 나가노와 야마나시, 그 리고 한국의 일부 지역에서는 샤인 머스캣 으로 만든 스위트 와인과 스파클링 와인 이 지역 특산품으로 생산되고 있다."
    ]
  },
  {
    "id": "bm-12-06",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 12/06 Q_A.pdf",
    "category": "Q&A",
    "title": "외래 진료실에서 빠르게 감별하는 건망증과 초기 치매, 어떻게 접근할까? 68 외래 진료실에서 빠르게 감별하는 건망증과 초기 치매, 어떻게 접근할까? Q1. 단순 노화 관련 기억 감퇴와 초기 치매를 임상적으로 구별하는 주요 감별 포인트는 무엇일까?",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 4,
    "tags": [
      "임상Q&A",
      "치매",
      "Brain&Mind"
    ],
    "summary": "외래 진료실에서 빠르게 감별하는 건망증과 초기 치매, 어떻게 접근할까? 68 외래 진료실에서 빠르게 감별하는 건망증과 초기 치매, 어떻게 접근할까? Q1. 단순 노화 관련 기억 감퇴와 초기 치매를 임상적으로 구별하는 주요 감별 포인트는 무엇일까?을 중심으로 구성된 B&M 12호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "단순 노화 관련 기억 감퇴와 초기 치매를 임상적으로 구별하는 주요 감별 포인트는 무엇일까?",
      "68 Q&A 외래 진료실에서 빠르게 감별하는 건망증과 초기 치매, 어떻게 접근할까?",
      "다음은 치매 초기 징후 10가 지와 단순 노화로 인한 일반적인 변화를 비교한 것으로, 일상 생활 능력이 유지되는지 여부가 핵심적인 구별점이다."
    ]
  },
  {
    "id": "bm-12-07",
    "issue": "B&M 12호",
    "issueNum": 12,
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 12/07 B-M News.pdf",
    "category": "B-M News",
    "title": "알츠하이머병, 낮은 뇌 리튬 수치와 연관 ‘슈퍼에이저(superager)’의 뇌는 왜 노화에 더 강할까? 인체가 급격히 노화되기 시작하는 전환점 발견 만성 불면증, 치매 위험 40% 증가 및 뇌 노화를 3.5년 앞당길 수 있다.",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 8,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머",
      "리튬"
    ],
    "summary": "알츠하이머병, 낮은 뇌 리튬 수치와 연관 ‘슈퍼에이저(superager)’의 뇌는 왜 노화에 더 강할까? 인체가 급격히 노화되기 시작하는 전환점 발견 만성 불면증, 치매 위험 40% 증가 및 뇌 노화를 3.5년 앞당길 수 있다.을 중심으로 구성된 B&M 12호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "- 인체가 급격히 노화되기 시작하는 전환점 발견 - 만성 불면증, 치매 위험 40% 증가 및 뇌 노화를 3.5년 앞당길 수 있다.",
      "--- B&M News - 알츠하이머병, 낮은 뇌 리튬 수치와 연관 - ‘슈퍼에이저(superager)’의 뇌는 왜 노화에 더 강할까?",
      "- 스타틴이 치매 위험을 최대 80% 낮춰 - 중년 이후라도 금연하면 인지 저하 늦출 수 있다."
    ]
  },
  {
    "id": "bm-13-01",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 13/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "고령에서의 수면 변화: 생리적 노화 및 수면 장애 / 오래된 정신과 약, ‘리튬’ 다시 보기",
    "author": "김지현, 김성윤",
    "institution": "이화여자대학교 이대서울병원 / 김성윤정신건강의학과의원",
    "pages": 10,
    "tags": [
      "스페셜토픽",
      "리튬",
      "수면"
    ],
    "summary": "고령에서의 수면 변화: 생리적 노화 및 수면 장애을 중심으로 구성된 B&M 13호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "Lithium deficiency and the onset of Alzheimer’s disease.",
      "또한 고령 성인에서는 수면 항상성(sleep homeostasis)의 변화도 관찰된다.",
      "수면 구조의 변화는 고령의 수면 변화 중 역시 중요한 특징이다."
    ]
  },
  {
    "id": "bm-13-02",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 13/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "야간 하지 불쾌감을 호소하는 65세 여성 / 루이소체치매: 증례 기반 임상적 진단 전략과 최신 진단 기준 및 치료 / 74세 남성 알츠하이머병 치매 환자에서 관찰된 일몰증후군",
    "author": "왕민정, 김희진, 양영순",
    "institution": "로아신경과의원 / 한양대학교병원 / 순천향대학교 천안병원",
    "pages": 10,
    "tags": [
      "임상모닝컨퍼런스",
      "치매",
      "알츠하이머",
      "루이소체치매"
    ],
    "summary": "야간 하지 불쾌감을 호소하는 65세 여성을 중심으로 구성된 B&M 13호 임상 모닝 컨퍼런스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "이러한 현상은 특히 기억 장애와 주의집중기능 저하가 동 반된 환자에서 더욱 뚜렷하게 나타나는 경 향이 있다.",
      "본고에서는 전형적인 임상 경 과를 보인 DLB 증례를 제시하고, 최신 진 단 기준을 바탕으로 알츠하이머병과의 감 별 진단, mixed pathology의 임상적 의미, 그리고 치료 전략을 종합적으로 고찰하고 자 한다.",
      "이러한 병태생리적 특성 때문에 일몰 증후군 증상은 하루 중 특정 시간대에 반 복적으로 악화되는 특징을 보이며, 치매 환자에서 나타나는 행동 및 심리 증상의 중요한 임상 양상 중 하나로 간주된다."
    ]
  },
  {
    "id": "bm-13-03",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 13/03 Article Review.pdf",
    "category": "Article Review",
    "title": "서문: 리튬과 치매 예방 / 양극성 장애 성인의 리튬 치료와 치매 위험: 인구 기반 코호트 연구 / 리튬 치료와 치매 발생 위험 간의 연관성에 관한 후향적 코호트 연구 / 치매 예방에서 치료 수준 리튬과 미량 리튬 관련 역학 및 임상 연구 현황 / LATTICE 연구: 경도인지 장애에서 인지 저하를...",
    "author": "나해리, 류나영, 박소희, 강민주, 편정민, 나승희",
    "institution": "보바스기념병원 / 가톨릭대학교 은평성모병원 / 보바스기념병원 / 보훈공단 중앙보훈병원",
    "pages": 22,
    "tags": [
      "저널리뷰",
      "치매",
      "경도인지장애",
      "인지저하",
      "리튬"
    ],
    "summary": "서문: 리튬과 치매 예방을 중심으로 구성된 B&M 13호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "실제로 일부 역학 연구 에서는 리튬 사용 지역에서 치매 발생률이 낮다는 보고도 있다.",
      "역학 연구에서도 리튬 사용과 치매 발생 위험 사이의 연관성을 시사하는 결과들이 보고되어 왔다.",
      "역학적 코호트 연구에서는 장기간 리튬 노출이 치매 발생 위험 감소 와 연관된다는 결과가 반복적으로 보고되 고 있으며, 경도인지 장애(MCI) 환자를 대 상으로 한 무작위 대조 연구 설계 또한 진 행 중이다."
    ]
  },
  {
    "id": "bm-13-04",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "04 Special Review.pdf",
    "pdfPath": "/B&M 13/04 Special Review.pdf",
    "category": "Special Review",
    "title": "의료 연구 데이터 분석을 위한 로컬 LLM 및 DB 구축",
    "author": "윤영철",
    "institution": "중앙대학교병원",
    "pages": 8,
    "tags": [
      "스페셜리뷰",
      "LLM",
      "Brain&Mind"
    ],
    "summary": "의료 연구 데이터 분석을 위한 로컬 LLM 및 DB 구축을 중심으로 구성된 B&M 13호 스페셜 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "의료 데이터 분석 용도로는 압축 버전(Q4)으로도 충분하다.",
      "4단계: SQLite 데이터베이스 설치 AI에게 분석을 맡기려면 환자 데이터를 체계적으로 저장할 공간이 필요하다.",
      "환자의 민감한 정보 유출 걱정 없이, AI의 강력한 데이터 분석 및 추론 능력을 진료 연구와 업무 효율화에 안전하게 활용하실 수 있다."
    ]
  },
  {
    "id": "bm-13-05",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 13/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "스페셜티 커피의 진화 / ‘감’, 기다림이 단맛이 되는 과일 / 미술관, 시니어의 삶 속으로 / 나는 메트로폴리탄 미술관의 경비원입니다 / 서울의 세계유산, ‘조선왕릉’",
    "author": "이도경, 양동원, 황지영, 나해리, 심용수",
    "institution": "커피멜로우 대표, CQI Q-Grader / 가톨릭대학교 서울성모병원 / 국립현대미술관 학예연구관 / 보바스기념병원",
    "pages": 24,
    "tags": [
      "의사라이프&컬처",
      "커피",
      "Brain&Mind"
    ],
    "summary": "스페셜티 커피의 진화을 중심으로 구성된 B&M 13호 의사 라이프 & 컬처 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "하이엔드 스페셜티 커피는 더 이상 ‘명성’에 기대지 않고, 투명성과 기술, 그리고 공정한 보상이 결합되어 있다.",
      "하이엔드 스페셜티란, 단지 가격으로 말 하는 것이 아니라 근거의 밀도라고 말할 수 있다.",
      "단지 “비싼 커피”가 아니라 커피 산업이 얼마나 성숙해 있는지를 보여주는 큰 기점 이 되고 있다."
    ]
  },
  {
    "id": "bm-13-06",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 13/06 Q_A.pdf",
    "category": "Q&A",
    "title": "노인 환자에서 안전한 멜라토닌 사용법 82 노인 환자에서 안전한 멜라토닌 사용법 Q1. 멜라토닌이 노인에게 약동학적으로 어떤 위험이 있는가? 노화로 인해 간의 CYP1A2 효소 활성이 감소한다는 점이 핵심이다. 멜라토닌은 주로 이 효소에 의해 대사되는데, 노인 환자는 젊",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 4,
    "tags": [
      "임상Q&A",
      "멜라토닌",
      "Brain&Mind"
    ],
    "summary": "노인 환자에서 안전한 멜라토닌 사용법 82 노인 환자에서 안전한 멜라토닌 사용법 Q1. 멜라토닌이 노인에게 약동학적으로 어떤 위험이 있는가? 노화로 인해 간의 CYP1A2 효소 활성이 감소한다는 점이 핵심이다. 멜라토닌은 주로 이 효소에 의해 대사되는데, 노인 환자는 젊을 중심으로 구성된 B&M 13호 임상 Q&A 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "노화로 인해 간의 CYP1A2 효소 활성이 감소한다는 점이 핵심이다.",
      "Q&A 노인 환자에서 안전한 멜라토닌 사용법 82 Q&A 노인 환자에서 안전한 멜라토닌 사용법 Q1.",
      "멜라토닌은 주로 이 효소에 의해 대사되는데, 노인 환자는 젊 은 층에 비해 혈중 최고 농도가 유의하게 높고 반감기가 길어지는 특성을 보인다."
    ]
  },
  {
    "id": "bm-13-07",
    "issue": "B&M 13호",
    "issueNum": 13,
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 13/07 B-M News.pdf",
    "category": "B-M News",
    "title": "수면: 장수에 가장 중요한 열쇠 뇌의 성인기: 30세 이후에야 완성 비만: 알츠하이머 발병 가속화 대상포진 백신: 치매 예방 효과 입증 수면 무호흡증: 뇌출혈과 치매 위험 증가",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "최신뇌과학뉴스",
      "치매",
      "알츠하이머",
      "수면",
      "예방"
    ],
    "summary": "수면: 장수에 가장 중요한 열쇠 뇌의 성인기: 30세 이후에야 완성 비만: 알츠하이머 발병 가속화 대상포진 백신: 치매 예방 효과 입증 수면 무호흡증: 뇌출혈과 치매 위험 증가을 중심으로 구성된 B&M 13호 최신 뇌과학 뉴스 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "수면 무호흡증: 뇌출혈과 치매 위험 증가 Written by Jessica Freeborn on Medical News Today • 폐쇄성 수면 무호흡증은 수면 중에 발생하는 상기도 폐쇄와 관련이 있다.",
      "이 새로운 연구는 대상포진 백신을 접종하는 것이 노인들의 치매 진단을 줄이거나 지연시키는 데 도움이 될 수 있다는 증거를 발견했다.",
      "게다가 대상포진 백신과 치매 예방에서의 잠재적 역할에 초점을 맞춘 상당한 양의 연구가 있었다."
    ]
  }
]);

export const issueMetadata = withPublicAssets([
  {
    "issueNum": 13,
    "issue": "B&M 13호",
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "coverImage": "/B&M 13호표지.png",
    "title": "Brain & Mind 13호 발간",
    "description": "2026 Vol.4 No.1 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "최신호 발간",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 12,
    "issue": "B&M 12호",
    "issueTitle": "2025 Vol.3 No.4",
    "publishDate": "2025년 12월",
    "coverImage": "/B&M 12호표지.png",
    "title": "Brain & Mind 12호 발간",
    "description": "2025 Vol.3 No.4 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 11,
    "issue": "B&M 11호",
    "issueTitle": "2025 Vol.3 No.3",
    "publishDate": "2025년 9월",
    "coverImage": "/B&M 11호표지.png",
    "title": "Brain & Mind 11호 발간",
    "description": "2025 Vol.3 No.3 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 10,
    "issue": "B&M 10호",
    "issueTitle": "2025 Vol.3 No.2",
    "publishDate": "2025년 6월",
    "coverImage": "/B&M 10호표지.png",
    "title": "Brain & Mind 10호 발간",
    "description": "2025 Vol.3 No.2 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 9,
    "issue": "B&M 9호",
    "issueTitle": "2025 Vol.3 No.1",
    "publishDate": "2025년 3월",
    "coverImage": "/B&M 9호표지.png",
    "title": "Brain & Mind 9호 발간",
    "description": "2025 Vol.3 No.1 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 8,
    "issue": "B&M 8호",
    "issueTitle": "2024 Vol.2 No.4",
    "publishDate": "2024년 12월",
    "coverImage": "/B&M 8호표지.png",
    "title": "Brain & Mind 8호 발간",
    "description": "2024 Vol.2 No.4 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 7,
    "issue": "B&M 7호",
    "issueTitle": "2024 Vol.2 No.3",
    "publishDate": "2024년 9월",
    "coverImage": "/B&M 7호표지.png",
    "title": "Brain & Mind 7호 발간",
    "description": "2024 Vol.2 No.3 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 6,
    "issue": "B&M 6호",
    "issueTitle": "2024 Vol.2 No.2",
    "publishDate": "2024년 6월",
    "coverImage": "/B&M 6호표지.png",
    "title": "Brain & Mind 6호 발간",
    "description": "2024 Vol.2 No.2 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 5,
    "issue": "B&M 5호",
    "issueTitle": "2024 Vol.2 No.1",
    "publishDate": "2024년 3월",
    "coverImage": "/B&M 5호표지.png",
    "title": "Brain & Mind 5호 발간",
    "description": "2024 Vol.2 No.1 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 4,
    "issue": "B&M 4호",
    "issueTitle": "2023 Vol.1 No.4",
    "publishDate": "2023년 12월",
    "coverImage": "/B&M 4호표지.png",
    "title": "Brain & Mind 4호 발간",
    "description": "2023 Vol.1 No.4 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 3,
    "issue": "B&M 3호",
    "issueTitle": "2023 Vol.1 No.3",
    "publishDate": "2023년 9월",
    "coverImage": "/B&M 3호표지.png",
    "title": "Brain & Mind 3호 발간",
    "description": "2023 Vol.1 No.3 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 2,
    "issue": "B&M 2호",
    "issueTitle": "2023 Vol.1 No.2",
    "publishDate": "2023년 6월",
    "coverImage": "/B&M 2호표지.png",
    "title": "Brain & Mind 2호 발간",
    "description": "2023 Vol.1 No.2 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 1,
    "issue": "B&M 1호",
    "issueTitle": "2023 Vol.1 No.1",
    "publishDate": "2023년 3월",
    "coverImage": "/B&M 1호표지.png",
    "title": "Brain & Mind 1호 발간",
    "description": "2023 Vol.1 No.1 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
    "accent": "원고별 PDF 아카이브"
  }
]);
