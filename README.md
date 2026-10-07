# 지역난방 현장 편람 · 우리집 열요금 비교

2026-10-07 최신 소스입니다. 회사 심볼, 공공기관 포털 톤, 질문형 점검과 3단계 난방비 비교가 포함됩니다.

## 업로드·배포
1. 압축을 풀고 heating-field-handbook 폴더 안의 내용을 GitHub 저장소에 복사합니다.
2. GitHub Desktop으로 Commit → Publish repository를 합니다. 비공개 저장소를 권장합니다.
3. Cloudflare Workers & Pages에서 GitHub 저장소를 가져옵니다.
4. Worker 이름: heating-field-handbook
5. Build command: npm run build / Deploy command: npx wrangler deploy
6. Worker Settings → Variables and Secrets에 실제 인증키를 Secret으로 등록합니다.

키 이름: LIST_SERVICE_KEY, BASIC_SERVICE_KEY, ENERGY_SERVICE_KEY, WEATHER_SERVICE_KEY
각 공공데이터 서비스의 활용 승인과 인증키가 필요합니다. 실제 키는 포함하지 않았습니다.
AI 리포트 화면은 삭제되어 OpenAI 키는 필요하지 않습니다. 빌드가 참조하는 내부 AI 파일은 유지합니다.

## 소스 위치
- dist/client/index.html: 현장 편람
- dist/client/app.js / ui.js / data.js: 편람 기능과 본문
- dist/client/comparison.html / comparison-ui.js: 난방비 비교
- dist/client/style.css / shell.css / portal-theme.css / comparison-ui.css: 디자인
- dist/client/pages/: 원문 426쪽 이미지
- dist/client/company-symbol.png: 회사 심볼
- src/worker.js: 서버 원본
- src/ai-spec.js: 현재 빌드 참조 파일
- build.mjs: 서버 빌드
- dist/server/index.js: 서버 빌드 결과
- wrangler.json: Cloudflare 배포 설정

**dist/client에는 원본 화면 파일이 있습니다. dist/ 전체를 삭제하거나 Git 제외하지 마세요.**
서버 수정은 src/worker.js에서 하고 npm run build로 결과를 만듭니다.

## 로컬 실행 (선택)
Node.js를 설치한 뒤 이 폴더에서 실행합니다.
```sh
npm run build
npx wrangler dev
```
최초 Wrangler 설치 안내가 나올 수 있습니다. 테스트는 npm test입니다.
인증키는 로컬 .dev.vars에 이름=값 형식으로 넣습니다. 이 파일은 업로드하지 않습니다.
HTML을 직접 더블클릭하면 API 조회는 사용할 수 없습니다.

## 이후 수정
변경 파일을 Commit → Push origin하면 연결된 Cloudflare가 자동 배포합니다.
현재 ChatGPT 홈페이지와 이 GitHub 저장소는 별도이므로 수정 내용은 직접 반영해야 합니다.

## 접근 범위
GitHub 비공개 설정은 코드만 비공개입니다. 기본 Cloudflare 주소는 외부 방문자가 접근할 수 있습니다.
현재 ChatGPT 홈페이지의 소유자 전용 접근 설정은 자동 이전되지 않습니다.
사내 전용이면 Cloudflare Access 등 별도 접근 제한을 구성하세요.

상세 절차는 함께 들어 있는 배포안내서.html을 브라우저에서 열어 확인하세요.
