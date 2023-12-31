# Svelte Weather App

SvelteKit과 공공 API를 사용하여 날씨 앱을 구현합니다.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/)
- [OpenWeather API](https://openweathermap.org/)

## 기능 요구사항

- [ ] 특정 위치(위도, 경도)에 해당하는 날씨 정보를 표시하는 페이지 추가
  - [X] 현재 기온 및 날씨, 일 최고기온/최저기온 표시하기
  - [X] 24시간 예보 표시하기 (시간/날씨/온도/습도)
  - [X] 일주일 예보 표시하기 (습도/오전날씨/오후날씨/최고기온/최저기온)
- [ ] 위치를 변경하는 페이지 추가
  - [ ] 오픈API 엑셀 데이터를 파싱하여 코드 내에서 사용 가능한 데이터로 변경하기
  - [ ] 시/군/구/동/읍/면을 선택하는 기능 추가하기
  - [ ] 시/군/구/동/읍/면을 검색하는 기능 추가하기
- [ ] [Geolocation API](https://developer.mozilla.org/ko/docs/Web/API/Geolocation)를 사용해 사용자 위치정보 가져오기
- [ ] UI/UX 작업
