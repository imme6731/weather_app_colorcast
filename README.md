## 제작의도

하늘상태에 따라 아이콘과 배경색을 다르게 표현하여 한눈에 현재 날씨를 확인할 수 있는 모바일 사이트

## 설치항목

- [x] styled-components
- [x] react-router-dom
- [x] styled-reset
- [x] node-fetch@2
- [x] 타이틑 관련
- [x] 폰트어썸
- [x] swiper
- [x] chakra
- [x] react-spinner

## todo

### 12월 11일

- [x] 리액트 초기셋팅
- [x] router 설정
- [x] header, footer 컴포넌트 제작
- [x] api 설정

### 12월 12일

[Home]

- [x] 전체적인 UI 구성
- [x] main api 설정 (초단기예보)

### 12월 13일

[Home]

- [x] main api 설정 (단기예보, 역지오코딩)
- [x] 날씨별 icon 설정

### 12월 14일

- [x] 시간별 api 설정
- [x] 요일별 api 설정

- [x] 미세먼지 api 설정
- [x] 배경색상 case 설정

### 12월 15일

[Menu]

- [x] 전체적인 UI 구성
- [x] 이벤트 작업

[습도], [대기오염], [풍향/풍속]

- [x] 전체적인 UI 구성

### 12월 16일

[습도]

- [x] main api 설정
- [x] 시간별 api 설정

### 12월 17일

[대기오염]

- [x] main api 설정
- [x] 시간별 api 설정
- [x] 배경색상 case 설정

### 12월 18일

[풍향/풍속]

- [x] main api 설정
- [x] 시간별 api 설정

### 12월 19일

- [x] loading UI 제작 및 설정
- [x] 404 UI 제작
- [x] helmet 구성
- [x] 디테일 작업 (header pageY, loading )

### 12월 20일

- [x] 전체적인 검토
- [x] 디테일 수정 & api 오류 수정

### 12월 21일

- [x] 최종 검토
- [x] 배포 테스트 2차
- [x] 작업 마무리

## new

## problem

- home main >> 네트워크에서 패치함수 계속 호출됨 => home useeffect의 [] 안에 rs를 넣어서 발생한 문제, rs.x, rs.y로 입력하면 됨
- api : fetch 에러 => 카카오로 바꾸고 오류 안남
- useCurrentLocation이 처음 랜더링 될때 default 값으로 호출됨 => 디폴트값 없애고 로딩 넣기
- 랜더링할때마다 img태그 테두리 생김 => height 값 넣어서 그런거였음
- 날씨 값에 따라 root 배경색 바꾸고 싶은데 어떻게 해야할지... => querySelector 이용하여 root 선택후 배경색 지정하는 함수 만들어 활용!!
- 랜더링 시 카카오 api 400 error 뜸 => return 되는 컴포넌트에서 조건문 작업
- 배포 후 api fetch https 보안 오류 뜸 => api는 http인데 배포 주소는 https 여서 발생, 구글링해서 코드 index.html에 넣었더니 오류 안뜸
