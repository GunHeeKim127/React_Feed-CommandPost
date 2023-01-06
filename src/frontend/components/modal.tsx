// import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/modal.css';
import feed from '../typescripts/feed'
import React, { useState } from 'react';
// /*************************************************************
//  * 담당자 : 김건희
//  * 함수 : createTodoList()
//  * 기능 : 1. 할 일에 메모를 할때 생성되는 문자열을 입력 받아 backend에 저장
//  *       2. todoList에 빈 값 입력시 알람은 뜨지만 리로딩하면 빈값을 가진 div생성되는 문제 발생
//  *       3. 문제 해결 : 빈값일때 백엔드에서 저장한 값을 지우도록 작성
//  *************************************************************/
// function createTodoList() {
//     input.style.outline= 'none';
//     input.style.border= 'none';
//     input.style.background= 'lightgrey';

// const todoListVal = document.getElementById('todaySelect').value
// fetch('todoList/createTodoList', {
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({todoListVal: todoListVal})
// }).then((res) => {
//     res.json()
//         .then((res) => {
//             if (!res.newTodoListSuccess) {
//                 console.log(res.message);
//                 return window.alert(res.message);
//             }
//             if(res.todoList.todoListVal==="") {
//                 alert("입력란에 아무것도 없습니다. 입력하여주세요");
//                 fetch('todoList/deleteTodoList', {
//                     method: 'post',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({_id: res.todoList._id})
//                 }).then((res) => res.json())
//                     .then((res) => {
//                         if (!res.deleteTodoListSuccess) {
//                             console.log(res.message);
//                             return window.alert(res.message);
//                         } else {
//                             document.getElementById(res.todoList._id).remove()
//                         }
//                     }).catch((err)=>{
//                     console.log(err)
//                 })
//             }
//             else{
//                 appendTodoList(res.todoList);
//             }
//         }).catch((err) => {
//         console.log(err);
//     })
// })
// }
/*********************************************************************
 * 담당자 : 김건희
 * 함수 : appendTodoList()
 * 기능 : 1. backend에 저장했는 값을 가지고 frondend에 값들을 뿌려주는 역할
 *       2. 입력값을 입력하기 위해 엔터 또는 버튼을 누를시 input 입력값을 초기화
 *       3. 입력란에 아무값도 없을 경우 알람기능 추가
 *********************************************************************/
//버튼을 누를시 feed 박스에 값 넣기
function appendCommand() {
    let feedAdd = "";
    let addValue = (document.getElementById("command") as HTMLInputElement).value;

    feedAdd += `<div id="delete" class="scheduleCheckBox" style="display: flex;">`
        + `<div id="scheduleName">${addValue}</div>`
        + `</div>`;
    (document.getElementById('feed') as HTMLElement).innerHTML = feedAdd;
    (document.getElementById('command') as HTMLInputElement).value = "";
    (document.getElementById('delete') as HTMLInputElement).addEventListener("click",(e:Event)=>{
      (document.getElementById('delete') as HTMLInputElement).remove();
    })
    date();
}
//날짜 값 계산 및 포맷
function date(){
  const TIME_ZONE = 3240 * 10000;
  const d = new Date();
  const date = new Date(+d + TIME_ZONE).toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];

  console.log(date + ' ' + time);
  let nowTime=date + ' ' + time
  return nowTime;
}
// function deletecommand(){
//   (document.getElementById('delete') as HTMLInputElement).remove();
// }
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
