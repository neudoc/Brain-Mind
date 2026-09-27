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
      "경도인지장애 Mild Cognitive Impairment을 중심으로 구성된 B&M 1호 스페셜 토픽 원고입니다.",
      "「경도인지장애 Mild Cognitive Impairment」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「경도인지장애 Mild Cognitive Impairment」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「기억상실형 경도인지장애 환자의 경과: 신경심리검사 및 알츠온(AlzOn)검사를 중심으로」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「2년 전부터 시작된 성격 변화를 주요 호소 증상으로 내원한 57세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「느려진 걸음걸이와 기억력 저하를 주요 호소 증상으로 내원한 76세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
    "summary": "알츠하이머병에 대한 8가지 혈액 아밀로이드베타(Aβ) 42/40 측정 성능의 일대일 비교 연구를 중심으로 구성된 B&M 1호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "「알츠하이머병에 대한 8가지 혈액 아밀로이드베타(Aβ) 42/40 측정 성능의 일대일 비교 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「인지장애가 있는 성인의 아밀로이드 양전자 방출 단층 촬영 결과를 추정하기 위한 혈장 아밀로이드 확률 점수 평가」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「가까운 시일 내 승인가능성이 있는 아밀로이드-표적 알츠하이머병 치료제의 첫 물결: Ad...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "노인과 운전을 중심으로 구성된 B&M 1호 핫 이슈 원고입니다.",
      "「노인과 운전」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「노인과 운전」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "「‘골프앨보우’ 바로 알기」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「인간은 언제든지 ‘동물화 animalization’될 수 있다.」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「베르디의 오페라 ‘라 트라비아타’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "전두측두엽치매을 중심으로 구성된 B&M 2호 스페셜 토픽 원고입니다.",
      "「전두측두엽치매」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「전두측두엽치매」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「이름대기장애로 내원한 72세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「2년 전부터 시작된 이상행동을 주소로 내원한 55세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「말더듬을 주요 호소 증상으로 내원한 68세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
    "summary": "Semantic variant primary progressive aphasia에서 기저 구조영상과 치료 결과의 연관성 연구를 중심으로 구성된 B&M 2호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "「Semantic variant primary progressive aphasia에서 기저 구조영상과 치료 결과의 연관성 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「원발성 진행성 실어증의 뇌 영역 위축과 이름대기능력 감소의 연관성」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병과 경도인지장애에서 연결된 말하기와 언어: 그림 설명하기 과제에 대한 종설」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「발화부족형...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
    "summary": "신경계질환에서의 사회인지(social cognition) 장애를 중심으로 구성된 B&M 2호 핫 이슈 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "신경계질환에서의 사회인지(social cognition) 장애를 중심으로 구성된 B&M 2호 핫 이슈 원고입니다.",
      "「신경계질환에서의 사회인지(social cognition) 장애」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「신경계질환에서의 사회인지(social cognition) 장애」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "「승자 勝者의 늪, 아만이즘 amanism」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「쥬세페 베르디(Giuseppe Verdi)와 그의 작품들」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "Precision medicine in dementia을 중심으로 구성된 B&M 3호 스페셜 토픽 원고입니다.",
      "「Precision medicine in dementia」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「Precision medicine in dementia」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「1년 전부터 시작된 기억장애를 주요 호소 증상으로 내원한 64세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「5년 전부터 시작된 기억력 저하를 주요 호소 증상으로 내원한 74세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「1년 전부터 진행하는 기억력 저하로 내원한 75세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「전두측두엽치매에서 정밀의료: 유전자형에서 표현형으로」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「ApoE4 보유자의 알츠하이머병 예방을 위한 정밀 영양」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「맞춤형 영양학의 현재와 미래」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병에 대한 정밀 의학 접근: 성공적 파일럿 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병 위험 감소를 위한 정밀 의학 접근」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "노화는 질병인가?",
      "「노화는 질병인가?」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「노화는 질병인가?」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "「프라 안젤리코의 “수태고지(The Annunciation)”」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「장난감 수집의 재미에 대하여」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「화양연화(花樣年華, In the Mood for Love)」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "알츠하이머병이 아닌 병리를 의심하는 소견: 개요 및 중요성을 중심으로 구성된 B&M 4호 스페셜 토픽 원고입니다.",
      "「알츠하이머병이 아닌 병리를 의심하는 소견: 개요 및 중요성」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「알츠하이머병이 아닌 병리를 의심하는 소견: 개요 및 중요성」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「파킨슨병으로 시작해 알츠하이머병이 동반된 65세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「기억력 저하와 보행이 어려워 내원한 84세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「서서히 진행하는 보행장애와 기억력 저하를 보인 78세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「연령 관련 신경병리 중 알츠하이머병의 원인이 되는 위험인자」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병의 생물학적 아형」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병 생물표지자-질병수정요법의 시대를 준비하며」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병의 임상적, 영상학적, 병리학적 다양성」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「루이소체치매에서 아밀로이드, 타우, 뇌혈관 생물표지자와 뇌신경퇴행 간의 연관성」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "알츠하이머병의 혈액 진단 도구의 현재을 중심으로 구성된 B&M 4호 핫 이슈 원고입니다.",
      "「알츠하이머병의 혈액 진단 도구의 현재」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「알츠하이머병의 혈액 진단 도구의 현재」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "「포레스트 검프(Forrest Gump)」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「2022년 워크숍과 함께 떠오르는 사과 ‘감홍’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「침향(沈香)에 대하여」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「진료실/연구실에서 키우기 쉬운 식물 소개」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "치매의 신경정신증상 - 1부 : 증상의 이해을 중심으로 구성된 B&M 5호 스페셜 토픽 원고입니다.",
      "「치매의 신경정신증상 - 1부 : 증상의 이해」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「치매의 신경정신증상 - 1부 : 증상의 이해」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「무기력함으로 내원한 72세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「“부인이 자기를 죽이려고 한다”며 내원한 65세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「환시와 인지 저하를 주소로 내원한 66세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「치료되거나 치료되지 않은 청력 손실과 치매가 없는 노년층의 경도행동장애와의 시간적 연관성」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「경도인지장애에서 알츠하이머병 탐색의 최적화 : ADNI와 MEMENTO 연구에서 경도행동장애의 4년 생물표지자 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「경도행동장애, 수면장애, 치매로의 진행 사이의 경시적 연관성 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「신경행동증상 지속...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "치매관리주치의 시범사업에 관하여을 중심으로 구성된 B&M 5호 핫 이슈 원고입니다.",
      "「치매관리주치의 시범사업에 관하여」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「치매관리주치의 시범사업에 관하여」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "인지 저하 노인의 고혈압 치료을 중심으로 구성된 B&M 5호 스페셜 리뷰 원고입니다.",
      "「인지 저하 노인의 고혈압 치료」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「인지 저하 노인의 고혈압 치료」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「침향 구입 시 주의사항과 문향 방법」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「‘미식과 예술’의 소도시, 일본 다카마쓰시(市) 여행」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「The School of Athens」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「의사의 ChatGPT 활용 방법」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "치매의 신경정신증상 - 2부 : 치료(약물 및 비약물적 접근)을 중심으로 구성된 B&M 6호 스페셜 토픽 원고입니다.",
      "「치매의 신경정신증상 - 2부 : 치료(약물 및 비약물적 접근)」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「치매의 신경정신증상 - 2부 : 치료(약물 및 비약물적 접근)」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「병적인 웃음과 울음으로 내원한 79세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「1년 전부터 시작된 배회를 주소로 내원한 76세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「물건을 자꾸 쌓아두는 73세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「주관적 인지 저하와 알츠하이머병 및 비알츠하이머병 치매 발병률」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「아밀로이드 양성과 관련된 주관적 인지 저하의 특징」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「주관적 인지 저하에서 콜린성 전두엽의 용적 감소」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「주관적 인지 저하 질문지(SCD-Q) : 타당성 조사」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「주관적 인지 저하로부터 경도인지장애와 치매로 이행되는 위험과 그 변화 궤적」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "인지 기능 저하를 예방하는 식사법을 중심으로 구성된 B&M 6호 핫 이슈 원고입니다.",
      "「인지 기능 저하를 예방하는 식사법」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「인지 기능 저하를 예방하는 식사법」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "Type 2 DM in old age(일차 치료의 관점에서)을 중심으로 구성된 B&M 6호 스페셜 리뷰 원고입니다.",
      "「Type 2 DM in old age(일차 치료의 관점에서)」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「Type 2 DM in old age(일차 치료의 관점에서)」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「‘어쩌면 아름다운 날들’ - 포도뮤지엄 탐방」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「리스본 여행기」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「진료실에서 쉽게 할 수 있는 간단한 ‘골프 피트니스’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「LLM 전쟁의 서막」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "노인 정상압수두증의 진단 및 치료을 중심으로 구성된 B&M 7호 스페셜 토픽 원고입니다.",
      "「노인 정상압수두증의 진단 및 치료」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「노인 정상압수두증의 진단 및 치료」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「보행장애로 내원한 74세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「와상 상태로 이행된 뇌수두증을 동반한 중증 조발성 알츠하이머병으로 입원한 51세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「인지 저하와 보행장애를 주소로 내원한 77세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「알츠하이머병 치료를 위한 아밀로이드를 표적으로 하는 단일클론 항체의 임상적으로 중요한 이득과 위험성: 체계적 문헌 고찰...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병 진단과 치료 연구를 위한 혈장 인산화 타우」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병의 바이오마커: 조기 및 감별 진단과 비전형 변이 진단의 역할」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병 치료를 위한...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "재택의료의 경험과 앞으로의 방향을 중심으로 구성된 B&M 7호 핫 이슈 원고입니다.",
      "「재택의료의 경험과 앞으로의 방향」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다.",
      "「재택의료의 경험과 앞으로의 방향」 이슈의 임상적·제도적 의미와 상담 시 고려할 점을 짚은 글입니다."
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
      "심방세동 정확히 진단하기을 중심으로 구성된 B&M 7호 스페셜 리뷰 원고입니다.",
      "「심방세동 정확히 진단하기」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「심방세동 정확히 진단하기」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「GPT-4o, Prompts and Specialized GPTs」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「나르시시스트의 가스라이팅」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「알고 보면 재미있는 알쏭달쏭 골프룰」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「오페라 ‘리골레토’ 감상을 추천합니다.」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "치매의 예방: 인지 기능의 저하 없이 노년을 즐기기 위해서을 중심으로 구성된 B&M 10호 스페셜 토픽 원고입니다.",
      "「치매의 예방: 인지 기능의 저하 없이 노년을 즐기기 위해서」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「치매의 예방: 인지 기능의 저하 없이 노년을 즐기기 위해서」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「메리 수녀님은 왜 치매에 걸리지 않은 걸까?」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「알츠하이머병 병리 소견을 가진 경도 인지장애 환자 1례에서의 SUPERBRAIN 다중영역중재 프로그램의 효과」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「10년간 인지 치료를 지속하고 있는 76세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
    "summary": "치매 예방을 위한 일본형 다중영역중재 연구(J-MINT): 무작위 대조 연구를 중심으로 구성된 B&M 10호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "「치매 예방을 위한 일본형 다중영역중재 연구(J-MINT): 무작위 대조 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병 전단계(prodromal Alzheimer’s disease)에서 다중영역 생활습관중재와 의료영양식품의 통합...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병으로 인한 경도 인지장애 또는 초기 치매의...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "노인들을 위한 예방 접종 가이드라인을 중심으로 구성된 B&M 10호 스페셜 리뷰 원고입니다.",
      "「노인들을 위한 예방 접종 가이드라인」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「노인들을 위한 예방 접종 가이드라인」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「‘AI’-based statistical analysis」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「스카치 싱글몰트 위스키」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「‘생이기정’을 가보자」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「만성 자살과 알코올」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「의사들을 위한 스타트업 장외 투자: 부와 혁신의 교차점에서」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「미술관에서 만난 인생의 장면들 - <론 뮤익: 인생극장>」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "「노년기 우울증과 인지 저하」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「왜, 치매 예방·중재·돌봄인가?: 2024년 ‘Lancet’ 보고서 정리」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「가성 치매를 정확히 진단받고 치매 증상에서 해방된 72세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「1년 전부터 진행하는 기억력 저하로 내원한 82세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「우울증이 동반된 혈관성 인지장애를 호소하는 74세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
    "summary": "LUMIPULSE 자동화 플랫폼을 이용한 알츠하이머병 혈장 바이오마커의 진단 성능 평가를 중심으로 구성된 B&M 11호 저널 리뷰 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "「LUMIPULSE 자동화 플랫폼을 이용한 알츠하이머병 혈장 바이오마커의 진단 성능 평가」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「뇌혈관질환이 동반된 아시아 알츠하이머병 환자에서 혈장 P-tau181/ Aβ42 비율과 뇌 아밀로이드 침착 및 해마 위축과...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병의 유전자와 바이오마커 개요」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「알츠하이머병의 최신지견:...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "인지 저하를 동반한 노인에서의 당뇨병 치료 지침 및 관리을 중심으로 구성된 B&M 11호 스페셜 리뷰 원고입니다.",
      "「인지 저하를 동반한 노인에서의 당뇨병 치료 지침 및 관리」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「인지 저하를 동반한 노인에서의 당뇨병 치료 지침 및 관리」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「SF 작가 ‘테드 창(Ted Chiang)’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「우리 술의 깊은 맛 ‘막걸리’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「산미 있는 커피가 좋은 커피라고?」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「망고(Mango)에 대하여 알아보자」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「치킨 한 조각의 국적: 조류독감과 원산지에 대한 소소한 탐색」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
      "「섬망과 치매의 상호작용: 병태생리, 임상적 함의 및 delirium superimposed on dementia에 대한 최신 고찰」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「미국 US POINTER 무작위 임상 시험 분석: 인지 저하 고위험 노인 에서 다영역 생활습관 중재의 인지 보호 효과」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「감기약 복용 후 발생한 약물 유발 섬망으로 내원한 79세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「고관절 수술 후 섬망으로 내원한 78세 남성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「수술 후 섬망으로 협진한 69세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「노인의 섬망과 치매: 때때로 연관되는가?, 아니면 항상 함께 존재하는가?」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「노인에서 섬망과 치매 발생과의 관련성: 체계적 문헌 고찰 및 메타 분석」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「치매 환자의 섬망 예방: 위험요인 관리」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「중등도-중증 치매 환자에서 섬망을 놓치지 않는 법: CAM 기반 실전 진단 전략」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「중환자실 섬망 치...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "AI 진단, 과연 믿을 수 있는가?",
      "「AI 진단, 과연 믿을 수 있는가?」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「AI 진단, 과연 믿을 수 있는가?」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「커피 브루잉(핸드드립)의 맛의 차이를 결정짓는 요인과 물의 결정적 역할」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「‘샤인 머스캣’ 초록빛이 품은 달콤한 혁명」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「대한(大韓)의 탄생, 대삼한(大三韓)의 귀환」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「신경과 치매 전문 의사가 읽은 ‘노랑무늬영원’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
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
    "summary": "고령에서의 수면 변화: 생리적 노화 및 수면 장애를 중심으로 구성된 B&M 13호 스페셜 토픽 원고입니다. 원문 PDF에서 세부 내용과 도표, 증례 또는 문헌 근거를 확인할 수 있습니다.",
    "clinicalPearls": [
      "「고령에서의 수면 변화: 생리적 노화 및 수면 장애」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다.",
      "「오래된 정신과 약, ‘리튬’ 다시 보기」의 배경, 임상적 의미, 진료실 핵심 포인트를 정리한 글입니다."
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
      "「야간 하지 불쾌감을 호소하는 65세 여성」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「루이소체치매: 증례 기반 임상적 진단 전략과 최신 진단 기준 및 치료」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다.",
      "「74세 남성 알츠하이머병 치매 환자에서 관찰된 일몰증후군」 증례의 주소, 감별 진단, 검사 소견과 추적 경과를 다룬 글입니다."
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
      "「리튬과 치매 예방」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「양극성 장애 성인의 리튬 치료와 치매 위험: 인구 기반 코호트 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「리튬 치료와 치매 발생 위험 간의 연관성에 관한 후향적 코호트 연구」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「치매 예방에서 치료 수준 리튬과 미량 리튬 관련 역학 및 임상 연구 현황」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다.",
      "「LATTICE 연구: 경도인지 장애에서 인지 저하를...」 논문의 주요 질문, 근거, 실제 진료 적용 포인트를 정리한 글입니다."
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
      "의료 연구 데이터 분석을 위한 로컬 LLM 및 DB 구축을 중심으로 구성된 B&M 13호 스페셜 리뷰 원고입니다.",
      "「의료 연구 데이터 분석을 위한 로컬 LLM 및 DB 구축」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다.",
      "「의료 연구 데이터 분석을 위한 로컬 LLM 및 DB 구축」의 실전 판독, 평가, 치료 판단에 필요한 내용을 정리한 리뷰입니다."
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
      "「스페셜티 커피의 진화」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「‘감’, 기다림이 단맛이 되는 과일」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「미술관, 시니어의 삶 속으로」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「나는 메트로폴리탄 미술관의 경비원입니다」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다.",
      "「서울의 세계유산, ‘조선왕릉’」: 의료인의 교양, 생활, 진료 밖 관점을 넓히는 글입니다."
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
    "title": "노인 환자에서 안전한 멜라토닌 사용법",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 4,
    "tags": [
      "임상Q&A",
      "멜라토닌",
      "Brain&Mind"
    ],
    "summary": "노인 환자에서 멜라토닌을 사용할 때 약동학적 변화, 용량 조절, 이상반응을 안전하게 고려하는 방법을 다룬 임상 Q&A 원고입니다.",
    "clinicalPearls": [
      "임상 Q&A는 진료실에서 자주 마주치는 질문을 중심으로 환자와 보호자 상담에 필요한 판단 기준을 쉽게 풀어낸 코너입니다."
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
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
    ]
  },
  {
    "id": "bm-14-01",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "01 Special Topic.pdf",
    "pdfPath": "/B&M 14/01 Special Topic.pdf",
    "category": "Special Topic",
    "title": "인지중재 치료의 현재와 미래: 디지털 치료제 시대의 ‘brain health’ 전략 / 실제 임상에서의 레카네맙 1년 치료 성적: 아밀로이드 PET와 인지 검사로 본 단일기관 경험",
    "author": "나해리, 정지향",
    "institution": "보바스기념병원 / 이화여자대학교 이대서울병원",
    "pages": 12,
    "tags": [
      "스페셜토픽",
      "인지중재",
      "디지털치료제",
      "레카네맙",
      "아밀로이드",
      "경도인지장애"
    ],
    "summary": "첫 번째 원고는 인지 예비능과 SuperAging 개념, FINGER 연구 이후의 다중중재 전략, 그리고 슈퍼브레인 H·슈퍼브레인 DEX·코그테라 등 국내 디지털 인지중재 치료의 현황과 전망을 정리한 종설입니다. 두 번째 원고는 이대서울병원에서 레카네맙을 1년간 투여한 40명의 아밀로이드 PET(centiloid)와 인지·기능 검사 변화를 경도인지 장애군과 치매군으로 나누어 분석한 실제 임상 자료입니다.",
    "clinicalPearls": [
      "인지중재 치료는 인지 자극·인지 훈련·인지 재활로 구분되며, FINGER 연구 이후 운동·영양·수면·혈관 위험인자 관리를 함께 시행하는 다중중재가 brain health 전략의 핵심으로 자리 잡았습니다.",
      "슈퍼브레인 DEX는 식약처 혁신의료기기 지정과 품목 허가를 받은 AI 기반 적응형 인지 훈련 플랫폼이고, 코그테라(ET-101)는 메타기억 훈련을 기반으로 다기관 RCT에서 ADAS-Cog 개선을 보고했습니다.",
      "레카네맙 1년 치료로 뇌 아밀로이드는 질병 단계와 무관하게 평균 약 55% 감소했으나, 아밀로이드 음성 전환(full TRAC)은 경도인지 장애군(66.7%)에서 치매군(18.2%)보다 훨씬 흔했습니다.",
      "인지·기능 안정은 경도인지 장애 단계에서 치료를 시작한 환자에서 더 뚜렷하여, 조기 진단과 조기 치료의 임상적 가치를 뒷받침합니다."
    ]
  },
  {
    "id": "bm-14-02",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "02 Morning Conference Case.pdf",
    "pdfPath": "/B&M 14/02 Morning Conference Case.pdf",
    "category": "Morning Conference Case",
    "title": "레카네맙 투여 후 반복적으로 발생한 양측 하지부종 및 자반성 피부병변: 피부 소혈관염이 의심된 증례 / 레카네맙 투약 중 발생한 혈압 저하 / 비약물 치료를 통해 기억력이 호전된 67세 여성",
    "author": "양동원, 이혁제, 양영순, 왕민정",
    "institution": "가톨릭대학교 서울성모병원 / 순천향대학교 천안병원 / 로아신경과의원",
    "pages": 9,
    "tags": [
      "임상모닝컨퍼런스",
      "레카네맙",
      "이상반응",
      "경도인지장애",
      "디지털치료제",
      "APOE"
    ],
    "summary": "레카네맙 투여 후 반복된 하지부종과 자반성 피부병변으로 피부 소혈관염이 의심된 83세 여성, 투약 중 의미 있는 혈압 저하가 관찰된 두 명의 여성 환자, 그리고 APOE ε4 동형접합 aMCI 환자가 슈퍼브레인 다중영역 디지털 중재 후 언어 기억력이 정상 범위로 회복된 증례를 다룹니다. 항아밀로이드 치료 시대에 ARIA 이외의 이상반응 관리와 비약물 치료의 가능성을 함께 보여주는 세 편의 실제 진료 경험입니다.",
    "clinicalPearls": [
      "레카네맙 투여 약 48시간 뒤 양측 하지에 대칭적으로 나타난 petechial-purpuric 병변이 재투여마다 반복되었고, 스테로이드 전처치에도 재발하여 약물 관련 피부 소혈관염으로 판단하고 치료를 중단했습니다.",
      "레카네맙 투약 중 혈압 저하는 반복적 경향(증례 1)과 단회성 이벤트(증례 2)로 다르게 나타날 수 있으며, 투약 속도 조절과 투약 전·중·후 활력징후 모니터링으로 치료를 이어갈 수 있었습니다.",
      "해마 위축과 APOE ε4/ε4를 함께 가진 aMCI 환자가 12개월간 슈퍼브레인 프로그램을 100% 순응도로 수행한 뒤 언어적 지연 회상이 0.31%ile에서 70.82%ile로 회복되었습니다."
    ]
  },
  {
    "id": "bm-14-03",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "03 Article Review.pdf",
    "pdfPath": "/B&M 14/03 Article Review.pdf",
    "category": "Article Review",
    "title": "서문: APOE 특집 / APOE ε4 동형접합자: 별개의 유전성 알츠하이머병 형태 / APOE 유전자형과 연령, 성별, 집단 조상에 따른 알츠하이머병 위험 / APOE ε2 동형접합자와 알츠하이머병 위험: 5,000명 신경병리 연구 요약 / 건강한 중·노년층에서 APOE ε4와 인지 저하의 가속화 / 알츠하이머병의 약물 반응에 유전적 다형성이 미치는 영향: 체계적 문헌 고찰 / APOE ε4 유전형에 따른 아밀로이드 표적 치료 반응에 미치는 영향: 다수 임상 시험 통합 분석",
    "author": "장재원, 나해리, 강민주, 나승희, 편정민, 류나영, 김영진, 박소희",
    "institution": "건국대학교병원 / 보바스기념병원 / 보훈공단 중앙보훈병원 / 가톨릭대학교 인천성모병원 / 분당서울대학교병원 / 가톨릭대학교 은평성모병원 / 우성재활요양병원",
    "pages": 17,
    "tags": [
      "저널리뷰",
      "APOE",
      "알츠하이머",
      "유전",
      "치매",
      "레카네맙"
    ],
    "summary": "APOE를 특집 주제로 삼아 여섯 편의 논문을 리뷰했습니다. ε4 동형접합을 독립된 유전성 알츠하이머병 형태로 재정의한 Nat Med 논문, 약 6만 9천 명에서 연령·성별·인종·조상에 따른 APOE 위험도를 정량화한 JAMA Neurol 연구, ε2 동형접합의 강력한 보호 효과를 신경병리로 입증한 연구, 대만 지역사회 코호트에서 ε4가 인지 저하를 가속한다는 결과, 그리고 기존 약제와 항아밀로이드 항체에 대한 치료 반응이 유전형에 따라 어떻게 달라지는지를 다룬 두 편을 순서대로 정리했습니다.",
    "clinicalPearls": [
      "APOE ε4/ε4는 거의 완전한 침투도와 예측 가능한 발병 연령·바이오마커 순서를 보여 ADAD·다운증후군과 유사한 유전적 AD 형태로 볼 수 있으며, 빈도가 약 2%로 낮지 않습니다.",
      "ε3/ε4의 AD 위험은 동아시아인에서 OR 4.54로 가장 크고, 인종·민족을 유전적 위험의 대리 지표로 쓸 수 없으며 60~70세 여성에서 ε3/ε4 위험이 더 높습니다.",
      "ε2/ε2는 ε3/ε3 대비 OR 0.13, ε4/ε4 대비 OR 0.004로 AD 위험이 극히 낮고, 타우 병리에 대해서도 독립적인 보호 효과를 보입니다.",
      "인지적으로 건강한 대만 코호트에서 ε4 보유자, 특히 동형접합자는 약 70세 이후 MMSE 저하가 가속되었습니다.",
      "APOE와 CYP2D6는 도네페질 등 기존 약제의 반응을 예측하는 가장 유망한 약물유전학 마커이며, 항아밀로이드 항체는 ε4 보유자에서 미보유자보다 동등하거나 소폭 우월한 임상 효과를 보였습니다."
    ]
  },
  {
    "id": "bm-14-04",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "04 Special Review.pdf",
    "pdfPath": "/B&M 14/04 Special Review.pdf",
    "category": "Special Review",
    "title": "‘Brain & Mind 웹 아카이브’ 소개와 이용 안내",
    "author": "윤영철",
    "institution": "중앙대학교병원",
    "pages": 4,
    "tags": [
      "스페셜리뷰",
      "웹아카이브",
      "Brain&Mind"
    ],
    "summary": "Brain & Mind 1호부터 최신호까지의 원고를 원고 단위로 정리한 온라인 학술 아카이브(https://brainmind.info)의 구성과 이용 방법을 안내합니다. 전체 호수 통합 검색, 특정 호수 선택, 카테고리와 태그 필터, PDF 미리보기와 다운로드 기능을 설명하고, 외래 진료와 연수강좌 준비 등 진료 현장에서 활용할 수 있는 예를 제시합니다.",
    "clinicalPearls": [
      "별도의 로그인이나 프로그램 설치 없이 웹브라우저에서 접속해 제목·저자·소속·요약·태그를 대상으로 전체 호수를 검색할 수 있습니다.",
      "특정 호수를 선택하면 해당 호수 안에서만 검색되고, 카테고리와 태그를 조합하면 하나의 관심 주제를 여러 호수에 걸쳐 모아볼 수 있습니다.",
      "각 원고 카드에서 PDF를 바로 미리보거나 내려받을 수 있어 전체 호수 PDF에서 페이지를 찾을 필요가 없습니다."
    ]
  },
  {
    "id": "bm-14-05",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "05 Doctor Plus.pdf",
    "pdfPath": "/B&M 14/05 Doctor Plus.pdf",
    "category": "Doctor Plus",
    "title": "커피 원두의 등급은 어떻게 나뉘는가? / “내 가슴속에 두 개의 영혼이 살고 있다”: 괴테의 『파우스트』가 그리는 인간 정신의 해부학 / 정신 증상과 예술의 경계는 어디일까? / ‘왕과 사는 남자’의 영월",
    "author": "이도경, 우현아, 김성윤, 김상윤",
    "institution": "커피멜로우 대표, CQI Q-Grader / 중앙대학교 독일유럽학과 / 김성윤정신건강의학과의원 / 분당서울대학교병원",
    "pages": 18,
    "tags": [
      "의사라이프&컬처",
      "커피",
      "문학",
      "예술",
      "여행",
      "Brain&Mind"
    ],
    "summary": "에티오피아 G1, 케냐 AA, 브라질 NY2, 과테말라 SHB 등 산지별 원두 등급 체계와 스페셜티 커피의 원두명을 읽는 방법, 괴테 『파우스트』에 담긴 인간 정신의 이중성과 끊임없이 나아가는 정신의 힘, 슈만과 반 고흐의 사례로 살펴본 정신 증상과 창조성의 관계, 그리고 영화 ‘왕과 사는 남자’의 배경인 단종의 영월 청령포·관풍헌·장릉을 답사한 기행문까지 네 편의 교양 원고를 모았습니다.",
    "clinicalPearls": [
      "「커피 원두의 등급은 어떻게 나뉘는가?」: 등급 기준이 나라마다 다르며, 현대 스페셜티 시장에서는 등급보다 품종·테루아·가공·생산자 정보가 더 중요해졌음을 설명하는 글입니다.",
      "「“내 가슴속에 두 개의 영혼이 살고 있다”」: 파우스트의 고백을 본능과 이성, 즉각적 보상과 고차 인지 사이의 긴장으로 읽고, 끊임없이 노력하는 인간 정신의 존엄을 이야기하는 글입니다.",
      "「정신 증상과 예술의 경계는 어디일까?」: 공유 취약성 모델, 슈만의 양극성 장애와 작품 수, 반 고흐의 황시증 가설, LSD와 창의성 연구를 통해 증상과 예술의 경계를 묻는 글입니다.",
      "「‘왕과 사는 남자’의 영월」: 청령포, 관풍헌과 자규루, 낙화암과 민충사, 장릉으로 이어지는 단종 유배지 답사기입니다."
    ]
  },
  {
    "id": "bm-14-06",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "06 Q_A.pdf",
    "pdfPath": "/B&M 14/06 Q_A.pdf",
    "category": "Q&A",
    "title": "고가의 알츠하이머병 항체 치료제, 실손보험 적용 어디까지 되나?",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 6,
    "tags": [
      "임상Q&A",
      "레카네맙",
      "실손보험",
      "비급여",
      "Brain&Mind"
    ],
    "summary": "전액 비급여인 레카네맙(레켐비)의 실제 환자 부담 비용, 가입 시기와 질병 코드에 따른 실손의료보험 보상 한계, 민간 보험사의 ‘치매 표적 약물 치료비 특약’ 보장 범위와 보험료, 약관 심사 핵심 체크리스트, 진료실 상담 시 유의점과 향후 급여화 전망을 여섯 가지 질문으로 정리한 임상 Q&A입니다.",
    "clinicalPearls": [
      "18개월 치료 기준 약제비 3,000만~4,000만 원에 아밀로이드 PET와 ARIA 모니터링 MRI 비용이 더해져 환자 부담은 4,000만~5,000만 원에 이릅니다.",
      "일반 실손보험은 F코드 면책이나 법정비급여 제외, 통원 한도 때문에 보상이 어렵거나 극히 일부에 그치며, 현재로서는 정액형 표적치료비 특약이 실질적인 대안입니다.",
      "특약은 CDR 0.5~1의 초기 단계, 아밀로이드 양성 증빙, 전문의 처방이라는 3대 조건과 7회 투약 조건·지정 병원·검사비 포함 여부를 사전에 확인해야 하며, “보험으로 다 해결된다”는 확답은 피해야 합니다."
    ]
  },
  {
    "id": "bm-14-07",
    "issue": "B&M 14호",
    "issueNum": 14,
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "filename": "07 B-M News.pdf",
    "pdfPath": "/B&M 14/07 B-M News.pdf",
    "category": "B-M News",
    "title": "리튬과 기억력 저하: 4가지 핵심 질문 / SuperAgers의 뇌, 신경세포 생성 활발 / 인슐린 감수성과 최적 수면 시간 / 알츠하이머병 혈액 검사, 초기 인지 저하 발견 / 수면과 뇌 노폐물 청소 / 무증상 심근경색도 치매 위험",
    "author": "편집위원회",
    "institution": "Brain & Mind 편집위원회",
    "pages": 4,
    "tags": [
      "최신뇌과학뉴스",
      "리튬",
      "수면",
      "혈액",
      "바이오마커",
      "예방"
    ],
    "summary": "저용량 리튬이 경도인지 장애의 언어 기억력 저하를 늦춘 JAMA Neurology 임상 시험, SuperAgers에서 신경세포 생성이 활발하다는 Nature 연구, 7.32시간 수면이 인슐린 감수성에 가장 유리하다는 단면 연구, 중년 성인의 초기 인지 저하를 혈액 바이오마커로 발견한 Lancet 연구, 수면 중 글림프계의 노폐물 청소를 정리한 Science 종설, 무증상 심근경색도 인지 저하를 가속한다는 Stroke 연구까지 여섯 가지 최신 뇌과학 소식을 요약했습니다.",
    "clinicalPearls": [
      "최신 뇌과학 뉴스는 치매와 뇌건강 분야의 주요 연구, 정책, 글로벌 의학 소식을 짧고 읽기 쉽게 전하는 코너입니다."
    ]
  }
]);

export const issueMetadata = withPublicAssets([
  {
    "issueNum": 14,
    "issue": "B&M 14호",
    "issueTitle": "2026 Vol.4 No.2",
    "publishDate": "2026년 7월",
    "coverImage": "/B&M 14호표지.png",
    "title": "Brain & Mind 14호 발간",
    "description": "2026 Vol.4 No.2 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "최신호 발간",
    "accent": "원고별 PDF 아카이브"
  },
  {
    "issueNum": 13,
    "issue": "B&M 13호",
    "issueTitle": "2026 Vol.4 No.1",
    "publishDate": "2026년 3월",
    "coverImage": "/B&M 13호표지.png",
    "title": "Brain & Mind 13호 발간",
    "description": "2026 Vol.4 No.1 Brain & Mind 아카이브입니다. 원고별 PDF로 분리해 카테고리 검색, 미리보기, 다운로드가 가능하도록 정리했습니다.",
    "badge": "아카이브",
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
