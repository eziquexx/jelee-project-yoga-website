# JELEE Mini Project - Yoga Responsive Website Redesign
실존하는 요가원 웹사이트를 선정하여 반응형으로 새롭게 제작하였습니다.

:star: [JELEE Notion - Mini Project](https://honey-plant-22e.notion.site/dev-jelee-5686cfa35c1b4c859a27de25d5fad5dd?pvs=4)로 이동하면 해당 미니 프로젝트 또는 다른 프로젝트를 보실 수 있습니다. 또한 자세한 내용을 보실 수 있습니다. :star:

<br/>

## 	:speech_balloon: 프로젝트 소개
[푸쉬파 요가 스튜디오](https://pushpayogastudio.modoo.at/)의 웹사이트를 벤치마킹하여 Redesign을 하였습니다.
그리고 반응형으로도 제작하여 사용자가 다양한 방식으로 접근을 할 수 있도록 하였습니다.
> [!CAUTION]
> 경고: 이 미니 프로젝트는 상업적인 용도가 아닙니다.

<br/>

## :walking: 프로젝트 목적
HTML5, CSS3을 사용하여 반응형 웹사이트를 제작하면서 경험을 쌓는 것과 동적인 부분을 JavaScript만을 사용하여 구현을 함으로써 언어에 대한 이해도와 경험을 쌓기 위함입니다.

<br/>

## :calendar: 개발 기간
2024-06-25 ~ 2024-08-04
- 06/15 ~ 06/16 레퍼런스 찾기
- 06/16 ~ 6/22 기획 및 시안 작업
- 07/23 구조 설계 (DOM Tree)
- 07/24 개발 시작
- 08/04 개발 완료 및 종료

<br/>

## 	:star: 프로그래머
- JELEE

<br/>

## :computer: 개발 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
- Visual Studio Code
- GitHub

<br/>

## :clipboard: 기술 스택
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- HTML5
- CSS3
- JavaScript

<br/>

## :gear: 주요 기능
- 원페이지 형식의 반응형 웹사이트입니다.
- 미디어 쿼리를 사용하여 브라우져 화면의 너비마다 보여지는 모습이 다르게 제작.
  - media screen and (max: ...px) {}
- 메뉴 버튼을 클릭하면 해당 섹션으로 이동하는 기능.
  - forEach()문, offsetTop(), scrollTo() 사용.
- 모바일 화면에서는 토글 버튼과 메뉴로 대체함.
  - classList.toggle() 사용.
- 수업 시간표가 적힌 부분을 토글 기능을 넣어 시간표를 접었다 폈다 할 수 있는 기능을 추가함.
  - classList.toggle() 사용.
- 갤러리의 이미지를 클릭하면 모달창이 화면에 출력되는 기능.
  - forEach()문, addEventListener("click") 사용.
- 모달창에 뜨는 이미지는 사용자가 선택한 이미지의 src 속성 값을 추출하여 모달창에 뜨는 이미지에 값을 주어 출력되는 기능.
  - modalImg.src = galleryImg.src 이런식으로 사용.
- 모달창이 떴을 경우 마우스 스크롤하는 기능과 터치하여 움직이는 기능을 방지하는 기능을 추가함.
  - document.body.style.overflow 사용, addEventListener("touchmove") 사용.

<br/>

## :eyes: 개발 참고 자료
- 메뉴 클릭하면 각 섹션으로 이동, top 버튼 클릭하면 상단으로 이동
  - [mozilla-scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)
  - [mozilla-offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)
- 모달창, 마우스 스크롤과 모바일 스크롤 방지
  - [w3scholl-modal](https://www.w3schools.com/howto/howto_css_modal_images.asp)
  - [stackoverflow-disabling mouse scrolling](https://stackoverflow.com/questions/7915882/disabling-mouse-scrolling)
  - [mozilla-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
  - [codepen-Disable scroll on Desktop and Mobile](https://codepen.io/wesleypimentel/pen/KpgXJW)
  - [stackoverflow-Disable scrolling in all mobile devices](https://stackoverflow.com/questions/10592411/disable-scrolling-in-all-mobile-devices)

<br/>

## :label: 저작권 및 사용권 정보
- 개인 미니 프로젝트이며 상업적이 용도가 아닙니다.
- [푸쉬파 요가 스튜디오](https://pushpayogastudio.modoo.at/)는 실존하는 요가원입니다.
