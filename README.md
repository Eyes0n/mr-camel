# 프리온보딩코스 미스터카멜 기업 과제

## [🔗 배포 링크](https://optimistic-leakey-16a8a8.netlify.app/)

### 주요 기능 영상

![3](https://user-images.githubusercontent.com/45257139/127739644-683b5934-e183-4ab7-a07c-757711cbe719.gif)

[🔗 기능별 영상 링크](https://github.com/bohyunkang/mr-camel/wiki/%EA%B8%B0%EB%8A%A5%EB%B3%84-%EC%98%81%EC%83%81)

## 1. 구현에 있어 신경 쓴 부분

- `Github issue` 활용한 task 관리
- `ErrorBoundary`를 활용한 에러 처리
- `utils` 함수 생성 및 관리
- `Figma` 활용한 프로토 타입 UI 디자인

## 2. 팀원 별 기능 구현 사항

### 👩🏻‍💻 [강보현](https://github.com/bohyunkang)

- **[상품 상세 페이지]**
  - '랜덤 상품 조회' 버튼 클릭 시 현 상품 제외하고 랜덤 로드 기능 구현
  - '관심 없음' 버튼 클릭 시 랜덤 로드 기능 구현
- **[모든 페이지]**
  - HTML 마크업 및 CSS 스타일링

### 👩🏻‍💻 [김남주](https://github.com/skawnkk)

- **[상품 상세 페이지]**
  - 상품 상세 조회 시 이력 데이터 누적 기능 구현
  - 동일 상품 조회 시 최신 데이터 갱신 기능 구현
  - '관심 없음' 버튼 클릭 시 이력 데이터 갱신 기능 구현
- **[모든 페이지]**
  - Figma UI 디자인

### 👨🏻‍💻 [박현찬](https://github.com/Eyes0n)

- **[상품 조회 이력 목록 페이지]**
  - 00시 기준 상품 조회 이력 및 관심 없는 상품 목록 초기화 기능 구현
  - 정렬 기능: 최근 조회 순, 낮은 가격 순 팝업 기능 구현
  - '관심 없음' 상품 클릭 시 경고 메시지 모달 창 기능 구현
- **[모든 페이지]**
  - HTML 마크업 및 CSS 스타일링
- **[Refactoring & Bug Fix]**
  - **Bug**
    - 상황: 상세 페이지에서 관심없음 버튼 또는 랜덤 상품 버튼 클릭 시 SPA로 동작하지 않고 새로고침 되는 문제 발생
    - 원인: history라이브러리를 사용한 Router의 history props가 전체 페이지를 유발 <br>
            history가 변경되면 자체적으로 새로고침 유발
      ```js
        import history from 'histroy';
          ...
          <Router history={history}>
          ...
      ```
    - 해결: history라이브러리 제거 -> 관련 메소드 제거 <br/>
            이에 따라 상세 페이지에서 쿼리스트링으로 상품 데이터를 추출하는 로직 제거 <= **contextApi**로 대응
  - **Refactor 전** 
    - history라이브러리를 사용하여 상품 상세 페이지에서 사용되는 데이터를 url에서 가져옴
  - **Refactor 후** 
    - contextApi로 전체 상품 데이터를 관리하고 상품 상세 페이지 url에 상품id를 params로 넘겨주고 해당 페이지에서 id에 해당하는 상품 데이터를 추출하여 사용
  - **test 추가**
    - [ProductsContext.test.js](https://github.com/Eyes0n/mr-camel/commit/125cefc9cc1ac4095c999f15df55982cb16fa004)
### 👩🏻‍💻 [이다은](https://github.com/daeun-react)

- **[상품 조회 이력 목록 페이지]**
  - 브랜드 목록 필터링 : 전체 및 존재하는 브랜드 목록 필터링 기능 구현
  - 관심 없는 목록 필터링 : 관심 없는 상품 숨기기 체크박스 기능 구현
- **[모든 페이지]**
  - HTML 마크업 및 CSS 스타일링

## 3. 설치 및 시작 방법

```
git clone https://github.com/bohyunkang/mr-camel.git
cd mr-camel
npm i
npm start
```

## 4. 협업 규칙

1. 브랜치는 아래와 같이 관리한다.

- `main` : 기능이 최종적으로 반영되는 브랜치
- `develop` : deploy 준비가 완료된 상태의 코드가 있는 브랜치
- `feature/[페이지]` : 페이지 별 기능 작업이 진행되는 브랜치
- `feature/[기능]` : 기능 별 기능 작업이 진행되는 브랜치

2. 커밋 메시지는 팀 컨벤션을 활용한다.

[🔗 7ill Resource 팀 커밋 메시지 컨벤션 회의록](https://bohyunkang.notion.site/7ill-Resource-a35b56e12d44404c8ec73e2f4f533b23)

3. 피그마 디자인을 참고하여 작업한다.

[🔗 피그마 링크](https://www.figma.com/file/s2OXvYsvFw1y6yDf6Tzof5/7illResource-1-team-library?node-id=0%3A1)
