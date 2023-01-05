# 23.01.04

```js
npx create-react-app 원하는 이름
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
...
 <img src={logo} className="App-logo" alt="logo" />
```
