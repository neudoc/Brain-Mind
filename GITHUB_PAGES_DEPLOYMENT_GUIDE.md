# Brain & Mind GitHub Pages 배포 기록 및 재현 가이드

이 문서는 `Brain & Mind` Vite/React 사이트를 GitHub Pages에 안정적으로 배포하기 위해 실제로 수행한 과정과, 중간에 발생한 오류 및 해결 방법을 정리한 체크리스트입니다.

현재 배포 주소:

```text
https://neudoc.github.io/Brain-Mind/
```

주의: `https://neudoc.github.io`는 계정 루트 사이트 주소입니다. 이 프로젝트는 repository project site라서 반드시 `/Brain-Mind/`까지 포함해야 합니다.

## 1. 로컬 프로젝트 확인

작업 폴더:

```bash
cd "/Users/neudoc/Desktop/Brain&Mind"
```

현재 Git remote:

```bash
git remote -v
```

정상 값:

```text
origin  git@github.com:neudoc/Brain-Mind.git (fetch)
origin  git@github.com:neudoc/Brain-Mind.git (push)
```

변경 사항 확인:

```bash
git status --short --branch
```

## 2. Vite 설정

GitHub Pages project site는 root가 아니라 repository 이름 아래에 배포됩니다. 따라서 production build에서는 `base`가 `/Brain-Mind/`여야 합니다.

[vite.config.js](./vite.config.js):

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Brain-Mind/' : '/',
  plugins: [react(), tailwindcss()],
}))
```

중요:

- `process.env.NODE_ENV`를 직접 쓰면 현재 ESLint 설정에서 `process is not defined`가 날 수 있습니다.
- `defineConfig(({ mode }) => ...)` 형태를 쓰면 lint 오류 없이 production/dev를 구분할 수 있습니다.

## 3. public asset 경로 처리

GitHub Pages에서는 `/B&M 9/...` 같은 절대 경로가 사이트 루트로 향해 깨질 수 있습니다. `import.meta.env.BASE_URL`를 통해 경로를 만들어야 합니다.

예:

```js
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
```

사용 예:

```js
coverImage: publicAsset("/B&M 9호표지.png")
pdfPath: publicAsset("/B&M 9/01 Special Topic.pdf")
```

이렇게 하면 로컬에서는 `/B&M 9/...`로, GitHub Pages production에서는 `/Brain-Mind/B&M 9/...`로 동작합니다.

## 4. GitHub Actions workflow

파일 위치:

```text
.github/workflows/deploy.yml
```

현재 정상 동작하는 구성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

중요:

- `actions/configure-pages@v5`가 빠지면 build는 성공해도 deploy 단계가 실패할 수 있습니다.
- GitHub repository Settings -> Pages에서 Source를 `GitHub Actions`로 설정해야 합니다.

## 5. GitHub Pages 설정

GitHub repository에서:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

이 설정이 되어 있어야 `.github/workflows/deploy.yml`이 실제 Pages 배포에 사용됩니다.

## 6. SSH key 설정

처음 push할 때 발생한 오류:

```text
Host key verification failed.
```

해결:

```bash
mkdir -p ~/.ssh
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

그 다음 발생한 오류:

```text
git@github.com: Permission denied (publickey).
```

원인: Mac의 SSH public key가 GitHub 계정에 등록되어 있지 않음.

SSH key 생성:

```bash
ssh-keygen -t ed25519 -C "GitHub에 사용하는 이메일"
```

ssh-agent 등록:

```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

만약 `--apple-use-keychain`에서 에러가 나면:

```bash
ssh-add ~/.ssh/id_ed25519
```

공개키 복사:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

GitHub 웹에서 등록:

```text
프로필 사진 -> Settings -> SSH and GPG keys -> New SSH key
```

입력:

```text
Title: MacBook Pro
Key type: Authentication Key
Key: 방금 복사한 공개키 붙여넣기
```

연결 테스트:

```bash
ssh -T git@github.com
```

성공 메시지 예:

```text
Hi neudoc! You've successfully authenticated...
```

주의: repository Settings의 `Deploy keys`가 아니라 GitHub 계정 Settings의 `SSH and GPG keys`에 등록하는 것을 권장합니다.

## 7. 배포 전 검증

항상 push 전에 아래 두 명령을 통과시킵니다.

```bash
npm run lint
npm run build
```

production build에서 `/Brain-Mind/` base가 들어갔는지 확인:

```bash
rg '/Brain-Mind/' dist/index.html dist/assets
```

예상:

```text
dist/index.html ... href="/Brain-Mind/favicon.svg"
dist/index.html ... src="/Brain-Mind/assets/..."
dist/index.html ... href="/Brain-Mind/assets/..."
```

## 8. Commit 및 push

```bash
git status --short
git add .
git commit -m "설명"
git push
```

처음 upstream을 연결해야 하는 경우:

```bash
git push -u origin main
```

## 9. Actions 상태 확인

브라우저:

```text
https://github.com/neudoc/Brain-Mind/actions
```

터미널에서 API로 확인:

```bash
curl -s 'https://api.github.com/repos/neudoc/Brain-Mind/actions/runs?per_page=1' \
  | rg '"status"|"conclusion"|"html_url"'
```

정상:

```text
"status": "completed"
"conclusion": "success"
```

## 10. 배포 URL 확인

```bash
curl -I -L https://neudoc.github.io/Brain-Mind/
```

정상:

```text
HTTP/2 200
```

404가 나면 확인할 것:

- 주소가 `https://neudoc.github.io/Brain-Mind/`인지 확인합니다.
- `https://neudoc.github.io`만 열면 404가 정상입니다.
- GitHub Actions 최신 run이 `success`인지 확인합니다.
- GitHub Settings -> Pages -> Source가 `GitHub Actions`인지 확인합니다.
- Pages 배포 직후에는 캐시/전파 때문에 1-2분 정도 기다립니다.

## 11. 이번 작업에서 실제로 해결한 오류

### Tailwind 클래스가 적용되지 않던 문제

원인: JSX에는 Tailwind utility class가 있었지만 Vite에 Tailwind plugin이 연결되어 있지 않았습니다.

해결:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

그리고 `vite.config.js`에:

```js
import tailwindcss from '@tailwindcss/vite'

plugins: [react(), tailwindcss()]
```

### CSS 전역 reset이 Tailwind 여백을 덮던 문제

문제 코드:

```css
* {
  margin: 0;
  padding: 0;
}
```

해결: `margin`과 `padding` reset 제거. Tailwind utility의 `p-*`, `m-*`, `gap-*`이 정상 적용됩니다.

### GitHub Pages root URL 404

잘못된 주소:

```text
https://neudoc.github.io
```

올바른 주소:

```text
https://neudoc.github.io/Brain-Mind/
```

### Actions deploy 실패

증상: build job은 성공, deploy job만 실패.

해결:

- `.github/workflows/deploy.yml`에 `actions/configure-pages@v5` 추가
- repo Settings -> Pages -> Source를 `GitHub Actions`로 설정

## 12. 빠른 재현 체크리스트

1. `npm run lint`
2. `npm run build`
3. `vite.config.js`의 production base가 `/Brain-Mind/`인지 확인
4. public PDF/이미지 경로가 `import.meta.env.BASE_URL` 기반인지 확인
5. `.github/workflows/deploy.yml`에 `configure-pages`, `upload-pages-artifact`, `deploy-pages`가 있는지 확인
6. `git status --short`
7. `git add . && git commit -m "..." && git push`
8. GitHub Actions latest run이 `success`인지 확인
9. `curl -I -L https://neudoc.github.io/Brain-Mind/`가 `HTTP/2 200`인지 확인
