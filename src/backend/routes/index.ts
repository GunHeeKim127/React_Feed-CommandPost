import { Express } from "express";
import { spawn } from "child_process";
import { error } from "console";

var express = require('express');
var router = express();

/////////////////////////////////////////////////////////////////////
//댓글을 써서 파이썬에 저장된 값을 불러와서 다시 front쪽으로 넘겨주는 작업
/////////////////////////////////////////////////////////////////////
router.get('/',async(req:any,res:any)=> {
  var dataToSend:any;
  // spawn new child process to call the python script
  const python = spawn('python3', ['./python/post.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
   console.log('Pipe data from python script ...');
   dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  // send data to browser
  res.render({dataToSend:dataToSend,newCommandSuccess:"success",message:error})
  });
})

///////////////////////////////////////////////////////////
//댓글을 쓰게 되면 댓글 data를 가져와서 뒤에 저장시켜주는 부분
//////////////////////////////////////////////////////////
router.post('/postsave',async(req:any,res:any)=>{
  var dataToSend:any;
  // spawn new child process to call the python script
  const python = spawn('python3', ['./python/postsave.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
   console.log('Pipe data from python script ...');
   dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  // send data to browser
  res.send({dataToSend:dataToSend,newCommandSuccess:"success",message:error})
  });

})

/////////////////////////////////////////////////////////
//댓글을 쓰거나 지울때 사용자가 행한 행위를 저장시키는 부분
////////////////////////////////////////////////////////
router.post('/post_log_save',async(req:any,res:any)=>{

})
