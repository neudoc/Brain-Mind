# Hospital Archive Design Update

이 문서는 `Brain & Mind` 웹사이트를 어두운 네온/AI 대시보드 느낌에서 밝고 차분한 병원 자료실/학술 아카이브 느낌으로 변경한 과정을 정리한 기록입니다.

## 목표

기존 디자인은 다음 요소 때문에 AI 제품/네온 대시보드처럼 보였습니다.

- 어두운 배경
- 형광 민트, 시안, 보라 계열 강조색
- glow, glassmorphism, 강한 그림자
- 어두운 카드 위 밝은 텍스트
- 여러 채도의 네온 배지 색상

이번 업데이트의 목표는 다음과 같습니다.

- 병원 자료실처럼 안정적이고 오래 읽기 편한 화면
- 의학 저널 아카이브에 맞는 전문적이고 절제된 색감
- PDF 자료 탐색에 적합한 밝은 배경과 높은 가독성
- 네온/AI스러운 장식 제거
- 카드, 필터, 버튼, PDF 뷰어의 색상 체계 통일

## 선택한 팔레트

최종 방향은 `Hospital Archive` 팔레트입니다.

```text
Background: #FAFAF8
Card:       #FFFFFF
Text:       #1D2939
Subtext:    #475467 / #667085
Primary:    #2B5C7E
Secondary:  #597C74
Accent:     #A66A3F
Border:     #D9E0E7
```

역할:

- `#2B5C7E`: 메인 버튼, 활성 issue, 주요 아이콘, 제목 hover
- `#597C74`: Clinical Pearls, 태그 선택 상태, 보조 강조
- `#A66A3F`: 총 페이지 같은 제한적 정보 강조
- `#FFFFFF`: 카드, 사이드바, 검색창, PDF drawer
- `#FAFAF8`: 전체 페이지 배경
- `#D9E0E7`: 경계선

## 주요 수정 파일

```text
src/index.css
src/App.jsx
src/components/Sidebar.jsx
src/components/Header.jsx
src/components/SearchBar.jsx
src/components/ArticleCard.jsx
src/components/PdfViewer.jsx
```

## 1. CSS 토큰 변경

[src/index.css](./src/index.css)의 `:root` 색상 토큰을 어두운 네온 팔레트에서 밝은 병원 자료실 팔레트로 변경했습니다.

변경 전 핵심:

```css
--bg-base: #050814;
--bg-sidebar: rgba(9, 14, 28, 0.92);
--bg-card: rgba(13, 20, 38, 0.82);
--primary: #14b8a6;
--primary-hover: #2dd4bf;
--accent-blue: #38bdf8;
--accent-violet: #a78bfa;
--text-primary: #f8fafc;
```

변경 후 핵심:

```css
--bg-base: #fafaf8;
--bg-sidebar: #ffffff;
--bg-card: #ffffff;
--bg-card-hover: #fbfcfd;
--primary: #2b5c7e;
--primary-hover: #214965;
--primary-soft: #e8f1f6;
--secondary: #597c74;
--secondary-soft: #edf5f2;
--accent: #a66a3f;
--accent-soft: #f5eee8;
--border-light: #d9e0e7;
--text-primary: #1d2939;
--text-secondary: #475467;
--text-muted: #667085;
```

## 2. 배경 변경

기존에는 어두운 그라데이션과 네온 컬러가 배경에 깔려 있었습니다.

변경 후:

- 밝은 white-to-off-white 배경
- 아주 약한 블루/그린/앰버 tint
- 격자 패턴도 더 옅게 조정

```css
body {
  background-color: var(--bg-base);
  background-image:
    linear-gradient(180deg, #ffffff 0%, #f7f8fa 38%, #fafaf8 100%),
    linear-gradient(90deg, rgba(43, 92, 126, 0.045), rgba(89, 124, 116, 0.035) 55%, rgba(166, 106, 63, 0.025));
}
```

## 3. glassmorphism 제거

기존 `.glass-panel`, `.glass-card`는 blur, inset highlight, hover glow가 있었습니다.

변경 후:

- blur 제거
- 강한 그림자 제거
- 흰 배경 + 얇은 border + 약한 shadow
- hover도 `translateY(-2px)`와 border 정도만 사용

핵심 방향:

```css
.glass-panel {
  background: #ffffff;
  border-right: 1px solid #d9e0e7;
  box-shadow: 8px 0 22px rgba(29, 41, 57, 0.06);
}

.glass-card {
  background: #ffffff;
  border: 1px solid #d9e0e7;
  box-shadow: 0 8px 20px rgba(29, 41, 57, 0.06);
}
```

## 4. 버튼 변경

기존:

- 민트-청록 gradient
- glow shadow
- shine animation

변경 후:

- 단색 의학 블루 버튼
- 흰색 outline secondary 버튼
- hover도 밝고 차분하게

```css
.btn-primary {
  background: var(--primary);
  color: #ffffff;
}

.btn-secondary {
  background: #ffffff;
  color: var(--text-accent);
  border: 1px solid #c9dbe8;
}
```

## 5. 배지 색상 변경

기존 카테고리 배지는 민트, 보라, 시안, 핑크 등 네온 느낌이 강했습니다.

변경 후:

- 연한 배경 + 진한 텍스트
- 낮은 채도의 blue, teal, amber, brown 계열
- box-shadow 제거

예:

```css
.badge-special-topic {
  background: #e8f1f6;
  color: #2b5c7e;
  border-color: #c9dbe8;
}

.badge-morning-case {
  background: #edf5f2;
  color: #426b63;
  border-color: #cfe2dc;
}

.badge-hot-issue {
  background: #f5eee8;
  color: #8d5731;
  border-color: #e5d0c1;
}
```

## 6. Hero 영역 변경

[src/App.jsx](./src/App.jsx)의 `heroHighlight` 색상 설정을 변경했습니다.

기존:

```js
themeColor: "from-[#14b8a6]/18 via-[#0f172a]/80 to-[#0b1020]/80 border-[#14b8a6]/25"
pillColor: "bg-[rgba(16,185,129,0.12)] text-[#34d399] border-[#10b981]/20"
```

변경 후:

```js
themeColor: "from-[#ffffff] via-[#f7fafc] to-[#edf5f2] border-[#d6e2ea]"
pillColor: "bg-[#e8f1f6] text-[#2b5c7e] border-[#c9dbe8]"
```

8호의 이전호 테마는 muted amber 계열로 변경했습니다.

```js
themeColor: "from-[#ffffff] via-[#faf8f5] to-[#f5eee8] border-[#e3d8cf]"
pillColor: "bg-[#f5eee8] text-[#8d5731] border-[#e5d0c1]"
```

## 7. Sidebar 변경

[src/components/Sidebar.jsx](./src/components/Sidebar.jsx)

수정 방향:

- 흰 배경 사이드바
- 로고 아이콘은 연한 블루 박스
- 활성 issue는 단색 `#2B5C7E`
- 필터 항목은 흰 카드형 row
- 선택된 category는 `#E8F1F6` 배경
- 선택된 tag는 `#597C74` 배경

네온 색상을 제거하고, 자료실의 필터 패널처럼 읽히도록 정리했습니다.

## 8. Header/Search 변경

[src/components/Header.jsx](./src/components/Header.jsx)
[src/components/SearchBar.jsx](./src/components/SearchBar.jsx)

수정 방향:

- 제목은 `#1D2939`
- 설명/메타 텍스트는 `#667085`
- 검색창은 흰 배경 + 옅은 border
- 검색결과 배지는 줄바꿈되지 않도록 `whitespace-nowrap`, `min-w-[8rem]` 적용
- 헤더는 항상 세로 배치로 안정화

검색결과가 `검색결 과 10 건`처럼 쪼개지는 문제도 함께 해결했습니다.

## 9. ArticleCard 변경

[src/components/ArticleCard.jsx](./src/components/ArticleCard.jsx)

수정 방향:

- 카드 배경: 흰색
- 제목: `#1D2939`
- 제목 hover: `#2B5C7E`
- 저자/소속: `#667085`
- 요약: `#475467`
- Clinical Pearls: 연한 그린/청록 배경
- 태그: 밝은 gray chip
- 버튼은 새 `.btn-primary`, `.btn-secondary` 스타일 사용

Clinical Pearls는 네온 박스 대신 병원 자료의 핵심 요약 박스처럼 보이도록 조정했습니다.

## 10. PDF Viewer 변경

[src/components/PdfViewer.jsx](./src/components/PdfViewer.jsx)

수정 방향:

- drawer 배경을 white로 변경
- toolbar를 `#F7F8FA`로 변경
- 아이콘 버튼을 white/gray border 버튼으로 변경
- 다운로드 버튼만 `#2B5C7E`
- iframe 배경은 밝은 gray
- overlay는 `#1D2939` 35% opacity

## 11. 검증

수정 후 아래 명령을 모두 통과했습니다.

```bash
npm run lint
npm run build
```

브라우저에서 확인한 값:

```text
body background: rgb(250, 250, 248)
body color:      rgb(29, 41, 57)
card background: rgb(255, 255, 255)
card border:     rgb(217, 224, 231)
sidebar bg:      rgb(255, 255, 255)
```

데스크톱과 모바일 화면도 확인했습니다.

## 12. 다음에 같은 변경을 할 때 체크리스트

1. `src/index.css`의 root token부터 바꿉니다.
2. dark/glow/glass 관련 CSS를 제거합니다.
3. Tailwind class에 직접 박힌 색상을 `rg "#10b981|#14b8a6|#34d399|#38bdf8|#a78bfa|#0d1426"`로 찾습니다.
4. `App.jsx` hero 색상과 fallback HTML 색상을 바꿉니다.
5. `Sidebar.jsx`, `Header.jsx`, `SearchBar.jsx`, `ArticleCard.jsx`, `PdfViewer.jsx` 순서로 하드코딩 색상을 정리합니다.
6. `npm run lint`
7. `npm run build`
8. 브라우저에서 desktop/mobile 모두 확인합니다.
9. 헤더 텍스트, 검색결과 배지, 카드 제목, Clinical Pearls 박스의 줄바꿈을 확인합니다.

## 13. 배포 전 확인

이 디자인 변경은 아직 로컬 변경 상태일 수 있습니다. 배포하려면 다음 순서로 진행합니다.

```bash
git status --short
npm run lint
npm run build
git add .
git commit -m "Update design to hospital archive style"
git push
```

GitHub Pages 배포 상태 확인:

```bash
curl -s 'https://api.github.com/repos/neudoc/Brain-Mind/actions/runs?per_page=1' \
  | rg '"status"|"conclusion"|"html_url"'
```

실제 URL:

```text
https://neudoc.github.io/Brain-Mind/
```
