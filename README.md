# 23.01.04

```js
npm create-react-app (원하는 이름) or npx create-next-app (원하는 이름) --template typescript
git init
git -M main
git add .
git remote origin (giturl)
git commit -am ""
git push
```
리액트 프로젝트 폴더 생성 및 깃과 연동

```html
 <img src={require("../public/images/logo.png").default} className="App-logo" alt="logo" />
```
다음과 같이 작성했을때
```js
module not found: error: you attempted to import ../public/images/logo.png which falls outside of the project src/ directory. relative imports outside of src/ are not supported.
```
이미지 import시 위의 오류가 뜸
<br>
이유는 src안에 images란 폴더가 없었기 때문임
<br>
src 폴더 안에 images를 넣고 원하는 이미지 파일을 넣고 아래와 같이 작성하여 해결
```html
import logo from ./images/logo.png
 <img src={logo} className="App-logo" alt="logo" />
```
<br>

# 23.01.05

```js
npm install path
npm install http-error
npm install morgan
npm install next
```
1. path 모듈 설치 : 원하는 위치의 파일을 가져오기 위해서 설치
2. http-error 모듈 설치 : 웹상의 error를 콘솔로 보기위해 설치
3. morgan 모듈 설치 : 로그 정리를 위해 설치
4. next 모듈설치: nextjs를 사용하기위해 설치

## 프론트 기능
1. input 글씨 쓰고 전송버튼 클릭시 모달창에 댓글 만들기
 - innerHTML로 새로운 div영역을 만들어 안에 값이 들어가게 만듦
 - 댓글이 만들어졌으면 input안에는 글이 사라지게 만듦
 - input이나 새로 만든 div를 디자인하여 모서리를 둥글게 해줌
 - 엔터시에도 댓글이 만들어 지는것이 좋을것같아 엔터 이벤트 추가해줌
2. 새로만든 div 클릭시 삭제
 - 사용자 이름 및 댓글 전체를 지워야되서 새로 만들어진 영역 전체를 지워줌

# 23.01.06

```js
npm i python3
npm i chile-process
```
1. 파이썬3을 사용하기 위한 모듈 설치
2. nodejs를 통해 restAPI를 사용하여 파이썬과 react를 서로 통신하기 위해 child-process사용

## 주의할점
child-process 호환성에 주의
 *ps 파이썬 위치오류로 인해 진도 부진
 ㄴ 파이썬 다시 깔고 vscode에서 파이썬 버전 설정 후 파이썬 호출 가능(23.01.08)

# 23.01.07

```js
npm i python-shell
```
1. nodejs를 통해 restAPI를 사용하여 파이썬과 react를 서로 통신하기 위해 python-shell사용

