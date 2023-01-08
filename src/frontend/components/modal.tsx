// import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/modal.css';
import React, { useState } from 'react';
import { stringify } from 'querystring';

/*********************************************************************
 * 담당자 : 김건희
 * 함수 : appendCommand()
 * 기능 : 1. backend에 저장했는 값을 가지고 frondend에 값들을 뿌려주는 역할
 *       2. 입력값을 입력하기 위해 엔터 또는 버튼을 누를시 input 입력값을 초기화
 *       3. 입력란에 아무값도 없을 경우 알람기능 추가
 *********************************************************************/
//버튼을 누를시 feed 박스에 값 넣기
function appendCommand() {
    let feedAdd = "";
    let addValue = (document.getElementById("command") as HTMLInputElement).value;
    let i = 0;
    let state="create";
    if (addValue==="") alert("내용이 비었습니다.")

    feedAdd += `<div id="delete+${i}" class="deleteBox" style="display: flex; flex-direction:column">`
        + `<div id="name">김건희</div>`
        + `<div id="scheduleName">${addValue}</div>`
        + `</div>`;
    (document.getElementById('feed') as HTMLElement).innerHTML += feedAdd;
    var command=(document.getElementById('command') as HTMLInputElement).value;
    
    fetch('/postsave', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({command:command})
  }).then((res:any)=>res.json())
  .then((res:any)=>{
    if (!res.deleteTodoListSuccess) {
      console.log(res.message);
      return window.alert(res.message);
  } else {
      res.send({command:command,state:state,date:Date()})
  }
  });
  (document.getElementById('command') as HTMLInputElement).value = "";

    (document.getElementById(`delete+${i}`) as HTMLInputElement).addEventListener("click",(e:Event)=>{
    let state="delete";
    (document.getElementById(`delete+${i}`) as HTMLInputElement).remove();
      fetch('/post_log_save',{
        method : 'post',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({state:state})
      }).then((res)=>{res.json().then((res)=>{
        if (!res.newCommandSuccess){
          console.log(res.message);
          return window.alert(res.message);
        }
        else{
          res.send({command:command,state:state,date:date()})
        }
      }).catch((err)=>{
        console.log(err);
      })
    });
  })
  fetch('/post_log_save',{
    method : 'post',
    headers:{
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({state:state})
  }).then((res)=>{res.json().then((res)=>{
    if (!res.newCommandSuccess){
      console.log(res.message);
      return window.alert(res.message);
    }
    else{
      res.send({command:command,state:state,date:Date()})
    }
  }).catch((err)=>{
    console.log(err);
  })
});
}
//날짜 값 계산 및 포맷
function date(){
  const TIME_ZONE = 3240 * 10000;
  const d = new Date();
  const date = new Date(+d + TIME_ZONE).toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];

  let nowTime=date + ' ' + time

  return nowTime;
}
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      appendCommand();
  };
}, true);

//모달창
function Modal() {
  return (
    <div className="Modal">
      <header className="Modal-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id='feed' className='feed'>
        
      </div>
      <div className='CommandPost'>
        <input id='command' type='text'></input>
        <div className='clickButton' onClick={appendCommand}><p> | </p>전송</div>
      </div>
    </div>
  );
}

export default Modal;
