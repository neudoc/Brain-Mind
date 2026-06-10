# Brain & Mind Archive Final Update

최종 업데이트일: 2026-05-27

## 배포 주소

- GitHub Pages: https://neudoc.github.io/Brain-Mind/
- Repository: git@github.com:neudoc/Brain-Mind.git
- Branch: `main`

## 최종 반영 범위

- `BM PDF` 폴더에 추가된 1호부터 13호까지의 전체 PDF를 기준으로 웹 아카이브를 확장했습니다.
- 기존에 퍼블리시되어 있던 8호와 9호의 웹 구조는 유지하면서, 1-7호와 10-13호도 같은 원고별 카드 방식으로 등록했습니다.
- 1호부터 13호까지 모든 호수를 웹에서 선택할 수 있습니다.
- `전체 호수` 모드를 추가해 1-13호 전체 원고를 한 번에 검색할 수 있게 했습니다.

## PDF 분할 기준

- 각 호의 전체 PDF에 포함된 책갈피를 기준으로 원고별 PDF를 분할했습니다.
- 분할된 PDF는 `public/B&M {호수}/` 폴더에 저장했습니다.
- 각 호의 표지는 전체 PDF 1페이지에서 PNG로 추출해 `public/B&M {호수}호표지.png`로 저장했습니다.

## Special Topic PDF 수정 기준

- 각 호의 `01 Special Topic.pdf`는 표지, 편집 정보, 목차, 빈 간지를 제외했습니다.
- 최종 기준은 원본 전체 PDF의 6페이지부터 다음 섹션 직전까지입니다.
- 이에 따라 Special Topic PDF 첫 페이지가 바로 원고 제목 페이지로 시작합니다.
- 카드에 표시되는 페이지 수도 새 PDF 길이에 맞게 업데이트했습니다.

최종 Special Topic 페이지 수:

| 호수 | 페이지 수 |
| --- | ---: |
| B&M 1호 | 6p |
| B&M 2호 | 6p |
| B&M 3호 | 4p |
| B&M 4호 | 6p |
| B&M 5호 | 6p |
| B&M 6호 | 6p |
| B&M 7호 | 4p |
| B&M 8호 | 6p |
| B&M 9호 | 6p |
| B&M 10호 | 4p |
| B&M 11호 | 12p |
| B&M 12호 | 18p |
| B&M 13호 | 10p |

## 데이터 및 UI 변경

- 새 생성 데이터 파일: `src/data/generatedArchive.js`
- 기존 8/9호 데이터와 새 생성 데이터를 병합: `src/data/articles.js`
- 전체 호수 선택 및 통합 검색 로직: `src/App.jsx`
- 1-13호 및 전체 호수 선택 UI: `src/components/Sidebar.jsx`
- 아카이브 설명 문구 조정: `src/components/Header.jsx`

## 검색 기능

- 기본 진입 상태는 `전체 호수`입니다.
- `전체 호수` 선택 시 검색, 카테고리 필터, 태그 필터가 1-13호 전체 원고를 대상으로 동작합니다.
- 개별 호수를 선택하면 기존처럼 해당 호수 안에서만 검색합니다.
- 검색 대상은 제목, 저자, 소속, 요약, 태그입니다.

## Special Topic 저자 정보

1-7호와 10-13호의 Special Topic 카드에서 `편집위원회`로 표시되던 값을 실제 저자와 소속으로 교체했습니다.

| 호수 | 저자 | 소속 |
| --- | --- | --- |
| B&M 1호 | 양동원 | 가톨릭대학교 서울성모병원 |
| B&M 2호 | 김은주, 정지향 | 부산대학교병원 / 이화여자대학교 서울병원 |
| B&M 3호 | 임재성 | 울산대학교 서울아산병원 |
| B&M 4호 | 정지향 | 이화여자대학교 이대서울병원 |
| B&M 5호 | 김성윤 | 울산대학교 서울아산병원 |
| B&M 6호 | 김성윤 | 울산대학교 서울아산병원 |
| B&M 7호 | 강경훈 | 칠곡경북대학교병원 |
| B&M 10호 | 김상윤 | 분당서울대학교병원 |
| B&M 11호 | 김성윤, 정지향 | 울산대학교 서울아산병원 / 이화여자대학교 이대서울병원 |
| B&M 12호 | 나해리, 정지향 | 보바스기념병원 / 이화여자대학교 이대서울병원 |
| B&M 13호 | 김지현, 김성윤 | 이화여자대학교 이대서울병원 / 김성윤정신건강의학과의원 |

## 검증 내역

로컬 검증:

```bash
npm run lint
npm run build
```

두 명령 모두 통과했습니다.

브라우저 검증:

- 전체 호수 통합 검색 표시 확인
- 13호 Special Topic 카드 페이지 수 `10p` 표시 확인
- 13호 Special Topic PDF 첫 페이지가 빈 페이지가 아닌 원고 제목 페이지로 시작하는 것 확인
- PDF 미리보기 모달 동작 확인

배포 검증:

- GitHub Actions 배포 성공
- GitHub Pages URL `HTTP/2 200` 확인
- 13호 Special Topic PDF 배포본 다운로드 후 첫 페이지 내용 확인

## 최근 배포 커밋

- `0daae03` - `Publish full Brain & Mind archive`
- `00db510` - `Trim special topic PDFs`
- `5536c99` - `Remove special topic blank pages`

## 참고

- 원본 전체 PDF가 들어 있는 `BM PDF/` 폴더는 로컬 작업용입니다.
- 웹 배포에는 `public/` 아래의 분할 PDF와 표지 이미지가 사용됩니다.
- `BM PDF/`는 중복 대용량 원본이므로 GitHub에는 커밋하지 않았습니다.
