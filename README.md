## 제작의도

하늘상태에 따라 아이콘과 배경색을 다르게 표현하여 한눈에 현재 날씨를 확인할 수 있는 모바일 사이트

## 설치항목

- [x] styled-components
- [x] react-router-dom
- [x] styled-reset
- [x] node-fetch@2
- [] 타이틑 관련
- [x] 폰트어썸
- [x] swiper

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

- [] 미세먼지 api 설정
- [] 배경색상 case 설정

### 12월 15일

[Menu]

- [] 전체적인 UI 구성
- [] 이벤트 작업

[습도], [대기오염], [풍향/풍속]

- [] 전체적인 UI 구성

### 12월 16일

[습도]

- [] main api 설정
- [] 시간별 api 설정

### 12월 17일

[대기오염]

- [] main api 설정
- [] 시간별 api 설정
- [] 배경색상 case 설정

### 12월 18일

[풍향/풍속]

- [] main api 설정
- [] 시간별 api 설정

### 12월 19일

- [] 스플래쉬 UI 제작
- [] 404 UI 제작
- [] helmet 구성
- [] 디테일 작업

### 12월 20일

- [] 전체적인 검토
- [] 배포 테스트 1차

### 12월 21일

- [] 최종 검토
- [] 배포 테스트 2차
- [] 작업 마무리

## new

## problem

- home main >> 네트워크에서 패치함수 계속 호출됨 => home useeffect의 [] 안에 rs를 넣어서 발생한 문제, rs.x, rs.y로 입력하면 됨
- api : fetch 에러 => 카카오로 바꾸고 오류 안남

- home main >> json 문법에러
- useCurrentLocation이 처음 랜더링 될때 default 값으로 호출됨
