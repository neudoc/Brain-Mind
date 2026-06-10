import { generatedArticles } from "./generatedArchive";

// Brain & Mind 저널 아카이브 실제 아티클 데이터베이스 (8호 & 9호)
// 모든 정보는 실제 원고 PDF 추출본을 기초로 일반의사들이 활용하기 쉽도록 재구성되었습니다.

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const legacyArticles = [
  // ================= B&M 9호 (최신호) =================
  {
    id: "bm-9-01",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "01 Special Topic.pdf",
    pdfPath: publicAsset("/B&M 9/01 Special Topic.pdf"),
    category: "Special Topic",
    title: "레카네맙(lecanemab)의 실제 임상 가이드라인과 처방 프로토콜",
    author: "김상윤",
    institution: "분당서울대학교병원 신경과",
    pages: 6,
    tags: ["알츠하이머병", "레카네맙", "항체치료", "처방가이드라인"],
    summary: "알츠하이머병 신약 레카네맙(레캄비)의 실제 임상 도입에 따른 처방 적격 환자 선별 기준, ApoE 검사법, 치료 일정 및 18개월 투여 후 월간 유지 요법 전환 프로토콜을 다룹니다.",
    clinicalPearls: [
      "이러한 이유 로, 레카네맙 투약 전 APOE 유전자 검사 를 고려하여 환자의 ARIA 발생 위험도를 평가하는 것이 중요하다.",
      "레카네맙 3상 임상 시험(Clarity AD 연 구)1은 경도 인지장애(MCI) 또는 경도 알츠 하이머병치매 환자 1,795명을 대상으로 18 개월간 진행되었다.",
      "3상 임상 시험에서 레카네맙 투여군의 21.5%, 위약군의 9%에서 ARIA가 관찰되 었다."
    ]
  },
  {
    id: "bm-9-02-1",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "02 Morning Conference Case_1.pdf",
    pdfPath: publicAsset("/B&M 9/02 Morning Conference Case_1.pdf"),
    category: "Morning Conference Case",
    title: "아밀로이드 PET 음성에서 인지 기능 악화 후 양성 전환되어 레카네맙을 투여한 79세 여성 증례",
    author: "나해리",
    institution: "보바스기념병원 신경과",
    pages: 4,
    tags: ["경도인지장애", "아밀로이드 PET", "양성전환", "레카네맙"],
    summary: "초기 검사 시 아밀로이드 PET 음성이었으나, 추적 관찰 중 인지 능력이 지속적으로 감퇴하며 PET 양성으로 전환되어 마침내 레카네맙 투여를 개시하고 인지 궤적을 보존한 고령 환자 증례입니다.",
    clinicalPearls: [
      "첫 아밀로이드 PET 검사 결과가 음성이었더라도 환자가 주관적 및 객관적 인지 기능 저하를 계속 호소하면 정기적인 추적 검사를 통해 양성 전환 여부를 확인해야 합니다.",
      "아밀로이드 PET 양성 전환이 확인된 즉시 레카네맙 항체 치료를 시작하면 뇌 내 신경 변성 진행 속도를 늦추고 임상적 혜택을 조기에 확보할 수 있습니다.",
      "79세 고령 환자에서의 항체 치료인 만큼 경미한 뇌 미세출혈 및 뇌부종(ARIA)의 잠재적 발생에 대비해 세밀한 추적 뇌 MRI 분석이 병행되어야 합니다."
    ]
  },
  {
    id: "bm-9-02-2",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "02 Morning Conference Case_2.pdf",
    pdfPath: publicAsset("/B&M 9/02 Morning Conference Case_2.pdf"),
    category: "Morning Conference Case",
    title: "레카네맙 투여 후 아밀로이드 PET 검사상 양성에서 완전 음성으로 바뀐 67세 남성 증례",
    author: "이은지, 김상윤",
    institution: "분당서울대학교병원 신경과",
    pages: 3,
    tags: ["알츠하이머병", "아밀로이드 제거", "PET음성전환", "임상성공"],
    summary: "아밀로이드-베타 표적 단클론항체인 레카네맙을 12개월간 투여한 결과, 뇌 내 아밀로이드 플라크가 드라마틱하게 완전 제거되어 PET 상 완벽한 음성 전환 및 인지 안정화를 보인 환자의 세부 경과입니다.",
    clinicalPearls: [
      "레카네맙 치료를 통해 뇌 속에 누적된 병리적 아밀로이드 플라크를 실질적으로 완전히 제거(PET 양성 -> 음성)할 수 있음이 증례 수준에서 명확히 입증되었습니다.",
      "플라크가 완전히 청소된 이후 인지 개선 효과를 장기 유지하기 위해 스타틴 계열이나 인지 자극 요법, 그리고 월간 유지 요법의 적절한 병행 시점이 논의되어야 합니다.",
      "초기 인지 기능이 양호할수록 약물 반응이 우수하고 아밀로이드 제거 속도가 빠르므로 '조기 발견 및 즉각 치료'의 임상적 가치가 매우 큽니다."
    ]
  },
  {
    id: "bm-9-02-3",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "02 Morning Conference Case_3.pdf",
    pdfPath: publicAsset("/B&M 9/02 Morning Conference Case_3.pdf"),
    category: "Morning Conference Case",
    title: "ARIA-E(뇌부종) 부작용 발생으로 인해 항아밀로이드 치료를 안전하게 중단한 76세 환자 증례",
    author: "김희진",
    institution: "한양대학교병원 신경과",
    pages: 4,
    tags: ["부작용 관리", "ARIA-E", "항체치료중단", "뇌부종"],
    summary: "레카네맙 투여 중 신경학적 증상(두통 및 가벼운 시각 왜곡)과 함께 MRI 검사상 ARIA-E(뇌부종) 소견이 확인되어 약물 투여를 일시 보류하고 스테로이드 치료를 통해 가역적으로 회복한 부작용 대처 사례입니다.",
    clinicalPearls: [
      "치료 중 환자가 경미하더라도 두통, 어지럼증, 시야 장애 등을 호소할 경우 반드시 ARIA-E 부작용을 의심하고 비계획적인 응급 뇌 MRI를 촬영해야 합니다.",
      "ARIA-E가 감지되었을 때는 즉각적으로 약물 투여를 보류하고 부종 범위에 따라 고용량 스테로이드 치료를 고려해야 하며, 대부분 가역적으로 자연 소실됩니다.",
      "ApoE ε4 대립유전자 동형접합(homozygous)을 보유한 환자는 ARIA-E 발생 빈도가 일반군에 비해 현저히 높으므로 처방 전 환자 보호자 동의 획득 및 모니터링 계획 수립이 엄격해야 합니다."
    ]
  },
  {
    id: "bm-9-03",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "03 Article Review.pdf",
    pdfPath: publicAsset("/B&M 9/03 Article Review.pdf"),
    category: "Article Review",
    title: "알츠하이머병의 수동면역요법(Passive Immunotherapy): 최신 단클론항체 약제의 기전 및 임상 비교",
    author: "나승희",
    institution: "가톨릭대학교 인천성모병원 신경과",
    pages: 20,
    tags: ["수동면역요법", "단클론항체", "레카네맙", "도나네맙"],
    summary: "알츠하이머병 치료의 중심축인 아밀로이드 베타 표적 수동면역요법의 원리를 분석하고, 최근 주목받는 아두카누맙, 레카네맙, 도나네맙 및 차세대 트론티네맙의 치료 표적(에피토프) 및 인지 지연 성능을 비교 평가한 종설입니다.",
    clinicalPearls: [
      "임상 1b 및 2상 시험에서 아두카누맙 은 뇌 내 Aβ 플라크를 감소시키고, 용량 의 존적으로 초기 AD 환자의 인지 저하 속도 를 늦추는 효과를 보였다.",
      "간테네루맙은 Aβ 피브릴에 결합하는 단클론항체로 3상 임상 시험에서 인지 기능 저하를 다소 늦췄 으나 통계적 유의성을 보이지 못했다.",
      "또한, NfL은 임상 시 험에서 치료 반응을 모니터링하는 바이오 마커로도 활용될 수 있다."
    ]
  },
  {
    id: "bm-9-04",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "04 Hot Issue.pdf",
    pdfPath: publicAsset("/B&M 9/04 Hot Issue.pdf"),
    category: "Hot Issue",
    title: "초고령 사회 진입에 따른 고령 인지장애 환자 맞춤형 치매 친화적 주거 환경 모델과 설계 고려사항",
    author: "정지향",
    institution: "이화여자대학교 이대서울병원 신경과",
    pages: 6,
    tags: ["치매케어", "주거환경개조", "배리어프리", "스마트홈"],
    summary: "일본의 스마트 에이징 홈, 영국의 치매 친화적 주거 헌장 등 해외 모범 사례를 연구하고 한국형 아파트 및 일반 주택 구조에서 낙상 방지, 배회 위험 최소화를 위해 요구되는 치매 친화적 인테리어 기법 및 배리어프리 디자인 규칙을 제안합니다.",
    clinicalPearls: [
      "본 조사에서는 치매 친화적 주거 환경 개조 사례 세 가지를 분석하였다.",
      "조사 결과에 따른 치매 친화적 가정 환경의 핵심 설계 원칙 안전성 확보 노인의 근력 감소 및 균형 감각 저하로 인해 낙상 위험이 크므로, 안전성을 고려한 주택 설계가 필수적이다.",
      "또한 영국의 치매 친화적 주거 헌장(Dementia-Friendly Housing Charter), 일본의 스마트 에이징 홈(Smart Aging Homes) 등의 정책적 틀을 검토하여 실행 내용을 비교하였다."
    ]
  },
  {
    id: "bm-9-05",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "05 Special Review.pdf",
    pdfPath: publicAsset("/B&M 9/05 Special Review.pdf"),
    category: "Special Review",
    title: "증례 중심의 일차 의료 개원의를 위한 실전 경동맥 초음파 판독과 이상지질혈증의 과학적 관리",
    author: "류상효",
    institution: "류상효신경과의원 원장",
    pages: 8,
    tags: ["경동맥초음파", "이상지질혈증", "스타틴처방", "동맥경화반"],
    summary: "개원가에서 빈번히 접하는 경동맥 초음파 증례들을 중심으로 취약성 경동맥 플라크(동맥경화반)를 선별하는 실전 팁을 전수하고, 수치 위주의 스타틴 처방 관행을 넘어 sdLDL-C, apoB 등 첨단 지표를 융합한 정밀 환자 맞춤형 치료법을 명시합니다.",
    clinicalPearls: [
      "특히 개원가에서의 경동맥 초음파 검사의 해석이야 말로, 이상지질혈 증 관리 및 기타 심/뇌혈관 위험요소의 핵 심이자, 비침습적이자, 개원가 선생님들께 매우 유용한 검사이자, 신경과 의사로서 큰 보람과 역할을 하게 해주는 검사이므로 이를 꼭 숙지하자.",
      "이는 혈 류 속도가 급격히 증가한 후 빠르게 감소 하는 패턴을 나타내며, 중등도에서 중증의 혈관 협착을 시사하는 도플러 초음파 소견 중 하나이다.",
      "정확한 해석과 적절한 조치를 위 해서는 반복적인 실습과 증례 중심의 학습 이 필수적이다."
    ]
  },
  {
    id: "bm-9-06",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "06 Doctor Plus.pdf",
    pdfPath: publicAsset("/B&M 9/06 Doctor Plus.pdf"),
    category: "Doctor Plus",
    title: "의학 데이터를 지배하는 AI 기반 시각화 기법 / 위스키 인문학 로드 / 마약류 약리 기전 총정리 II",
    author: "이정석, 이기중, 박선영",
    institution: "제주대병원 / 전남대 / 국립정신건강센터",
    pages: 18,
    tags: ["의료데이터AI", "마약오남용", "인문학과웰빙", "시각화"],
    summary: "의학 연구에서 빈번히 부딪히는 비정규성·결측치 의료 데이터의 AI 시각화 해법을 제시하고, 펜타닐 등 심각한 합성 마약 오남용 방지를 위한 의료진의 수칙, 그리고 의사들의 인문학적 소양을 위한 위스키 지식을 융합 수록했습니다.",
    clinicalPearls: [
      "Handling missing data in research Method Description When to Use Deletion Removes rows or columns with missing values.",
      "When missing data is minimal(＜5%).",
      "AI는 data visualization에 이전 과는 다른 차원의 능력을 가지고 있다."
    ]
  },
  {
    id: "bm-9-07",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "07 Q_A.pdf",
    pdfPath: publicAsset("/B&M 9/07 Q_A.pdf"),
    category: "Q&A",
    title: "외래에서 맞닥뜨리는 고령 인지장애 환자의 안전 운전 관리 지침과 면허 반납 가이드라인",
    author: "편집위원회",
    institution: "Brain & Mind 편집위원회",
    pages: 4,
    tags: ["치매운전", "안전지침", "고령운전자", "면허반납"],
    summary: "사회적 쟁점이 되고 있는 고령 및 치매 환자의 교통사고 위험을 임상가 입장에서 예방하기 위해, 진료실에서 신속히 파악할 수 있는 고령자 운전 위험도 체크리스트와 은퇴 유도 설득 프로세스를 구체적으로 전수합니다.",
    clinicalPearls: [
      "특히 2025년 연말부터는 75세 이상 고령 운전자를 대상으로 면허 갱신 기준이 강화되며 가상현실(VR)을 활용한 운전 능력 자가 진단 시스템이 시범, 도입될 예정이다.",
      "경도 인지장애 환자의 경우, 운전 시 필요한 여러 기능이 저하되기 때문에 안전한 운전을 유지하기 어려울 수 있다.",
      "고령 운전자 의 사고 위험이 증가하는 것을 방지하기 위해 경찰청에서는 야간 운전 및 장거리 운전을 제한할 것을 권고하고 있다."
    ]
  },
  {
    id: "bm-9-08",
    issue: "B&M 9호",
    issueNum: 9,
    issueTitle: "2025 Vol.3 No.1",
    publishDate: "2025년 3월",
    filename: "08 B-M News.pdf",
    pdfPath: publicAsset("/B&M 9/08 B-M News.pdf"),
    category: "B-M News",
    title: "레카네맙 미국 FDA 월간 정기 유지요법 승인 외 최신 글로벌 뇌 과학 브리핑",
    author: "편집위원회",
    institution: "Brain & Mind 편집위원회",
    pages: 6,
    tags: ["글로벌의학뉴스", "레카네맙", "미세플라스틱", "치매예방"],
    summary: "FDA의 레카네맙 월간 정기 유지 요법 정식 승인 뉴스, 중강도 운동과 깊은 수명이 뇌 글림파틱 세척 속도에 미치는 영향, 입속 치주염 유발 박테리아가 알츠하이머병 병리에 관여하는 최신 사이언스 논문을 축약 보도합니다.",
    clinicalPearls: [
      "--- B&M News - Leqembi(레카네맙)의 월간 정기 유지요법, 미국 FDA 승인 - 운동과 깊은 수면으로 24시간 지속적인 뇌 boost 효과 - 중강도의 운동이 식욕 감소에 도움 - 스파클링 워터를 마시면 체중 감소에 도움이 될까?",
      "‘조기’ 간헐적 단식이 복부 지방 감소에 도움 Written by Corrie Pelc on Medical News Today 85 Brain & Mind 이전 연구에 따르면 미세플라스틱은 단순히 환경에 해로울 뿐만 아니라 인간 건강에도 영향을 미칠 수 있다.",
      "• 최근 보고서에 따르면, 탄산수나 스파클링 워터를 마시는 것이 적혈구의 흡수와 포도당 대사를 증가시켜 체중 감량에 기여할 수 있다."
    ]
  },

  // ================= B&M 8호 =================
  {
    id: "bm-8-01",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "01 Special Topic.pdf",
    pdfPath: publicAsset("/B&M 8/01 Special Topic.pdf"),
    category: "Special Topic",
    title: "임상 현장에서의 ‘주관적 인지 저하(SCD)’, 어떤 증상이 있을 때 즉시 병원을 찾아 정밀 검사를 받아야 하는가?",
    author: "양동원",
    institution: "가톨릭대학교 서울성모병원 신경과",
    pages: 6,
    tags: ["주관적인지저하", "조기진단", "치매전단계", "신경심리검사"],
    summary: "객관적 신경심리 검사에서는 정상 범위이나 환자 스스로 기억력 감퇴를 느끼는 '주관적 인지 저하(SCD)' 상태의 임상적 중요성을 짚고, 병원 정밀 진단이 강력히 요구되는 적색 신호(Red Flags) 증상들을 체계적으로 분류합니다.",
    clinicalPearls: [
      "Special Topic ‘주관적 인지 저하’, 어떤 증상이 있을 때 병원을 방문해야 하나?",
      "전임상 알츠하이머병이란, 정상 인지 기능을 보이 지만 뇌에 알츠하이머병의 병리 소견(아밀 로이드 단백질, 타우 단백질의 축적)이 진 행 중이므로 추후 치매로 진행될 위험성이 높은 상태를 말하는 것으로 주관적 인지장 애 환자의 일부가 여기에 속한다.",
      "또한 SCD 단계 에서 인지 기능을 증가시키는 다양한 인 지 훈련, 신체 운동, 사회 활동, 다이어트 조절 등을 적극적으로 시행하는 것도 인 지 저하 속도를 느리게 할 수 있을 것으로 기대된다."
    ]
  },
  {
    id: "bm-8-02",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "02 Morning Conference Case.pdf",
    pdfPath: publicAsset("/B&M 8/02 Morning Conference Case.pdf"),
    category: "Morning Conference Case",
    title: "외래 인지장애 모닝 컨퍼런스: 기억력 및 성격 변화를 호소하는 고령 환자들의 실전 감별 진단 증례 3선",
    author: "윤보라, 홍윤정, 심용수",
    institution: "서울성모병원 / 의정부성모병원 / 은평성모병원 신경과",
    pages: 10,
    tags: ["임상증례", "경도인지장애", "치매감별진단", "성격변화"],
    summary: "지속적인 단기 기억력 저하를 호소하는 80세 전직 회계사 남성, 갑작스러운 기억 감퇴로 내원한 73세 여성, 심각한 성격 변화 및 억제 불능 주소의 75세 여성 환자 등 개원가에서 직면하는 난해한 임상 리얼 케이스에 대한 심층 토론 및 추적 결과입니다.",
    clinicalPearls: [
      "환자의 MRI(위), florbetaben PET(아래) 19 Brain & Mind 증례 75세 여성이 기억력 장애 및 성격 변화를 주소로 딸과 함께 방문하였다.",
      "또한 주관적 인지 저하 환자에서 아밀로이드 PET 양성 률은 약 20~40%로 보고되고 있다.",
      "본 증례처럼 주관적 인지 저 하로 처음 진단했다고 하더라도 지속적인 기억력 호소가 있을 시는 위험요인을 확인 하고, 아밀로이드 PET 등의 추가 검사를 고려하는 것이 진단 및 예후 평가에 도움 이 될 수 있을 것으로 생각된다."
    ]
  },
  {
    id: "bm-8-03",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "03 Article Review.pdf",
    pdfPath: publicAsset("/B&M 8/03 Article Review.pdf"),
    category: "Article Review",
    title: "주관적 인지 저하(SCD) 및 경도인지장애(MCI) 환자의 종단적 삶의 질(HR-QoL) 변화 및 알츠하이머 예측 혈장 NfL 바이오마커 동향",
    author: "김영진, 나승희, 류나영, 편정민, 강민주",
    institution: "우성재활요양병원 / 인천성모병원 / 은평성모병원 / 순천향대병원 / 중앙보훈병원",
    pages: 18,
    tags: ["삶의질", "NfL바이오마커", "경도인지장애", "알츠하이머예측"],
    summary: "SCD와 MCI 환자들의 삶의 질 변화를 추적한 대규모 유럽 MEMENTO 코호트 분석 결과와, 혈장 neurofilament light chain(NfL) 농도 측정을 통해 뇌 내 신경 변성 및 알츠하이머 진행 위험도를 고도로 예측해내는 최신 국제 학술 연구 5편을 정밀 리뷰합니다.",
    clinicalPearls: [
      "결과 주관적 인지 저하(SCD), 경도 인지장애 (MCI), 알츠하이머병 치매 그룹 간의 혈장 NfL 농도 차이는 유의미한 수준(p＜0.001) 으로 나타났다.",
      "연구 기간 동안 주관적 인지 저하 (SCD) 환자의 30%가 경도 인지장애(MCI) 로, 경도 인지장애(MCI) 환자의 약 30%가 알츠하이머병치매(AD dementia)로 진행 되었으며, 진행성 환자들은 비진행성 환자 들에 비해 NfL 농도가 더 높았다.",
      "고찰 이 연구는 혈장 NfL 농도가 알츠하이머 병의 초기 병리와 관련된 신경 손상을 반 영하며, 인지 저하의 진행을 추적하는데 유용한 도구가 될 수 있음을 보여준다."
    ]
  },
  {
    id: "bm-8-04",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "04 Hot Issue.pdf",
    pdfPath: publicAsset("/B&M 8/04 Hot Issue.pdf"),
    category: "Hot Issue",
    title: "치매 및 인지장애 환자를 위한 성년후견·한정후견 제도와 의사능력 평가에 관한 법률적 관점의 고찰",
    author: "김연희",
    institution: "법무법인 의성 대표변호사",
    pages: 4,
    tags: ["성년후견", "한정후견", "의사능력평가", "의료법률"],
    summary: "인지장애 진단 후 유언 대용 신탁 계약을 체결해 자녀 간 거액의 소송이 발생했던 대법원 무효 확정 판결을 토대로, 임상 현장에서 치매 환자의 법적 의사능력(Testamentary Capacity) 유무를 의학적 소견서로 소명할 때 반드시 유의해야 할 법률 요건을 정리합니다.",
    clinicalPearls: [
      "치매 환자의 경우에는 특 정후견이나 후견계약보다는 성년후견이나 한정후견이 적합할 수 있지만, 치매의 정 도가 경미하여 정신적 제약 여부가 불확실 한 경우도 있기에 특정후견이나 후견계약 이 이루어지다가 치매가 진행되면서 성년 후견 또는 한정후견이 개시될 수도 있다.",
      "가정법원은 본인의 이익을 위 하여 특별히 필요할 때에만 임의후견인 또 는 임의후견감독인의 청구에 의하여 성년 후견, 한정후견 또는 특정후견의 심판을 할 수 있다.",
      "후견감독인은 후견인 의 사무를 감독하며, 피후견인의 신상이 나 재산에 대하여 급박한 사정이 있는 경 우 그의 보호를 위하여 필요한 행위 또는 처분을 할 수 있고, 후견인과 피후견인 사 이에 이해가 상반되는 행위에 관하여는 후 견감독인이 피후견인을 대리한다(민법 제 940조의6)."
    ]
  },
  {
    id: "bm-8-05",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "05 Special Review.pdf",
    pdfPath: publicAsset("/B&M 8/05 Special Review.pdf"),
    category: "Special Review",
    title: "신경과 의사가 진료실에서 결코 놓쳐서는 안 되는 실신·어지럼증 유발 핵심 부정맥과 표준 12유도 심전도 판독법",
    author: "박종성",
    institution: "동아대학교병원 순환기내과 교수",
    pages: 10,
    tags: ["심전도판독", "실신및어지럼", "부정맥감별", "순환기의학"],
    summary: "어지럼증이나 일시적 의식 소실(실신)을 주소로 내원한 신경과 환자들 중, 치명적인 심장 돌연사나 뇌졸중으로 이어질 수 있는 발작성 심방세동, 동정지(sinus arrest), 방실 차단 등 표준 심전도 상의 핵심 적색 경보 소견을 판독 사례 위주로 심층 강의합니다.",
    clinicalPearls: [
      "병적 동서맥이 있는 환자에서 장시간 심전도 모니터링을 시행하면 이 와 같은 동정지가 출현하는 것을 확인할 수 있다.",
      "따라서 어지럼(전실신)이나 실신으로 진료 중인 환자에서 좌각차단과 유사한 형 태의 심전도 이상 소견이 보일 때는 심각한 전도질환이나 심부전이 동반되어 있을 가 능성이 높다고 보고 접근해야 하겠다.",
      "좌전각차단을 동반한 우각차단의 심전도 QRS파의 지속 시간이 120 msec 이상이며, V1 흉부유도에서 토끼 귀 모양의 QRS파가 보이므로 얼핏 보면 우각차단처럼 보인다."
    ]
  },
  {
    id: "bm-8-06",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "06 Doctor Plus.pdf",
    pdfPath: publicAsset("/B&M 8/06 Doctor Plus.pdf"),
    category: "Doctor Plus",
    title: "알고 보면 알쏭달쏭한 그린 위 골프 룰 백과 / 푸치니 오페라 ‘라 보엠’과 뮤지컬 ‘렌트’ / 마약류 약리 기전 총정리 I",
    author: "민학수, 김상윤, 박선영",
    institution: "조선일보 스포츠전문기자 / 분당서울대병원 / 국립정신건강센터",
    pages: 12,
    tags: ["골프규칙", "오페라와뮤지컬", "마약류학리", "교양인문학"],
    summary: "2019년 개정된 퍼팅 그린 위 골프 공 충돌 시 무벌타 규칙 해설, 푸치니 명작 오페라 라 보엠의 멜로디가 현대 뉴욕을 배경으로 한 록 뮤지컬 렌트로 혁신적으로 변모한 예술적 여정, 그리고 1차 마약류의 생체 내 흡수 기전을 다채롭게 엮은 개원가 필수 인문학 모음집입니다.",
    clinicalPearls: [
      "62 Doctor Plus 오페라, ‘라 보엠’과 뮤지컬 ‘렌트’는 큰 세월의 차이에도 불구하고 많은 공통점과 차이점이 있다.",
      "퍼팅 그린 위 에 있지 않은 볼을 집으면 1벌타를 받는다.",
      "골프 규칙은 “잘못된 그린(사 용하지 않는 그린)으로부터 반드시 구제를 받아야 한다”고 규정하고 있다."
    ]
  },
  {
    id: "bm-8-07",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "07 Q_A.pdf",
    pdfPath: publicAsset("/B&M 8/07 Q_A.pdf"),
    category: "Q&A",
    title: "진료실 문답: 최신 아밀로이드 항체 치료제 레카네맙(레캄비)의 약리 작용과 국내 도입 후 기대 효능",
    author: "편집위원회",
    institution: "Brain & Mind 편집위원회",
    pages: 6,
    tags: ["레카네맙", "레캄비", "아밀로이드플라크", "치료제효능"],
    summary: "초기 알츠하이머의 지평을 연 신약 레카네맙(상품명 레캄비)의 분자 생물학적 표적 기전(올리고머 및 프로토피브릴 결합 작용)과 대규모 Clarity AD 임상 시험을 통해 입증된 인지 저하 지연 효과를 알기 쉬운 문답 형태로 명쾌하게 설명합니다.",
    clinicalPearls: [
      "CLARITY AD 시험은 경 도 인지장애(MCI) 또는 경도 알츠하이머병 (early AD) 환자 중 아밀로이드 베타 축적 이 확인된 약 1,795명을 대상으로 진행되 었습니다.",
      "따라서 진행된 또는 높은 아밀로이드 플라크를 보이는 알 츠하이머병의 병변 치료에 강점일 수 있습 니다.",
      "Brain & Mind 68 Q&A 레카네맙(레캄비)의 효과가 궁금합니다."
    ]
  },
  {
    id: "bm-8-08",
    issue: "B&M 8호",
    issueNum: 8,
    issueTitle: "2024 Vol.2 No.4",
    publishDate: "2024년 12월",
    filename: "08 B-M News.pdf",
    pdfPath: publicAsset("/B&M 8/08 B-M News.pdf"),
    category: "B-M News",
    title: "알코올 섭취량과 치매 발병률의 선형적 인과 관계 규명 외 글로벌 최신 의학 이슈 요약",
    author: "편집위원회",
    institution: "Brain & Mind 편집위원회",
    pages: 6,
    tags: ["의학브리핑", "알코올과치매", "치매후운동", "수면자세"],
    summary: "소량의 음주도 치매 예방에 전혀 도움이 안 되며 선형적으로 발병률을 높인다는 eClinicalMedicine 메타 분석 뉴스, 치매 확진 진단 후 운동 시작 시 사망률 20% 감소 결과, 앙와위(등을 대고 자는 자세) 수면과 알츠하이머병 축적 연관성을 브리핑합니다.",
    clinicalPearls: [
      "치매 진단 후 신체 활동도 사망 위험 20% 감소 Written by Jessica Freeborn on Medical News Today 75 Brain & Mind 모든 사람은 선호하는 수면 자세가 있습니다.",
      "이 연구는 eClinicalMedicine에 게재되었으며, 알코올 소비량과 치매 발병 위험 사이에 선형 관계가 있다고 결론짓고 있습 니다.",
      "• 새로운 연구에 따르면, 노인에서 변동하는 콜레스테롤 수치가 치매 위험을 증가시킬 수 있습니다."
    ]
  }
];

export const articles = [...generatedArticles, ...legacyArticles].sort((a, b) => {
  if (b.issueNum !== a.issueNum) return b.issueNum - a.issueNum;
  return a.filename.localeCompare(b.filename, "ko");
});

export { issueMetadata } from "./generatedArchive";
