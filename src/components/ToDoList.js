import React, { useState, useEffect, useImperativeHandle } from "react";
import styled from "styled-components";
import axios from "axios";
/*style part */
const myDiv = styled.div``;
const Title = styled.h2`
  /* display:flex;
    justify-content:center; */
`;
const TextBox = styled.input`
  /* width:500px;
    height:50px; */
`;
const AddBtn = styled.button`
  /* height:50px; */
`;

const AddList = styled.ul``;
/*js part */
const ToDoList = () => {
  const [List, setList] = useState("");
  var list = document.querySelector(".AddList");


  
  //當localStorage沒有資料陣列，指定一個空陣列放入資料庫
  if (localStorage.getItem("input") === null) {
    var storageArray = [];
    localStorage.setItem("input", JSON.stringify(storageArray));
    //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
  } else {
    var storageArray = JSON.parse(localStorage.getItem("input"));
    const inputArray = storageArray;
    console.log(inputArray);
    
    updateList();
    alert(inputArray);
    // handleInputArray();

    // localStorage.setItem("input", JSON.stringify(storageArray));
    // console.log(storageArray);
    // var j;
    // for(j=0;j<inputArray.length;j++)
    // {
    // var li = document.createElement("li"); //先建立一個 li 標籤
    // var inputValue = inputArray[j];
    // var t = document.createTextNode(inputValue); //再建立一個文字節點
    // li.appendChild(t); //把文字附加到 li 標籤之後
    // console.log(li.appendChild(t))
    // var l=document.getElementById("listTo");
    // console.log(l);
    //  }
     
    // <div dangerouslySetInnerHTML={inputArray}></div>
  }

  // function handleInputArray(){
  //   var storageArray = JSON.parse(localStorage.getItem("input"));
  //   // localStorage.setItem("input", JSON.stringify(storageArray));
  //   // console.log(storageArray);
  //   const inputArray = storageArray;
  //   console.log(inputArray);
  //   // list = inputArray;
  // }

  function updateList(){
    var storageArray = JSON.parse(localStorage.getItem("input"));
    const inputArray = storageArray;
    console.log(inputArray)
    // document.getElementById("array").innerHTML=inputArray;
    // var str ='';
    // for(let i =0;i<inputArray.length;i++){
    //   str +=`<li data-num =${i}> ${inputArray[i].value}</li>`
    // }
    // list.innerHTML =str;
  }

  function newlist(e) {
    const { value } = e.target;
    setList((prevData) => ({
      /*prevData是用來類似把值疊加下來 EX:Email輸入完 下面兩個會無法輸入 沒有加的話後面的值會無法填入 */
      ...prevData,
      value,
    }));
    setList(e.target.value);
    console.log(e);
  }

  /*新增事件*/
  function handleClick(e) {
    e.preventDefault();
    // console.log(List);
    // console.log("-------------");
    // console.log(JSON.stringify(List));

    var li = document.createElement("li"); //先建立一個 li 標籤
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue); //再建立一個文字節點
    li.appendChild(t); //把文字附加到 li 標籤之後
    if (inputValue === "") {
      alert("請輸入東西!");
    } else {
      document.getElementById("listTo").appendChild(li);
      //取得輸入欄位的資料
      let inputValue =  List ;
      //建立一個符合我們需求的物件資料
      // let inputObject ={value: inputValue};
      let inputObject = inputValue;
      //將新物件加入我們的陣列
      storageArray.push(inputObject);
      //將陣列修改成JSON字串
      let stringJson = JSON.stringify(storageArray);
      //將處理後的JSON字串更新到資料庫中
      localStorage.setItem("input", stringJson);
      /*空白*/
      document.getElementById("input").value = "";
      updateList();
    }



    /*x鍵*/
    var close = document.getElementsByClassName("close");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var i;

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";

        // var deleEl = {List}

        // var deleVal = deleEl.indexOf(i);

        // array.splice(deleVal);

        // localStorage.getItem('stringJson');
        // localStorage.removeItem('stringJson');

        // console.log(window.localStorage.getItem('input'));
        // localStorage;

        //localStorage.clear(div);

        document.getElementById("listTo").appendChild(li);

        let inputValue =  List ;
        //建立一個符合我們需求的物件資料
        // let inputObject ={value: inputValue};
        let inputObject = inputValue;
        //將刪除物件
        // storageArray.pop(inputObject);
        // var k
        // for (k= 0 ;k< close.length; k++)
        storageArray.splice( List , 1);

        //將陣列修改成JSON字串
        let stringJson = JSON.stringify(storageArray);
        //將處理後的JSON字串更新到資料庫中
        localStorage.setItem("input", stringJson);
        console.log(i);

        // deleRefresh();
      };
    }

   
  }


  /*clear鍵*/
  function handleClearStr() {
    localStorage.clear();
  }

  /*return part*/
  return (
    <myDiv>
      <Title>ToDoList</Title>
      <TextBox
        id="input"
        value={List}
        onChange={newlist}
        placeholder="想要做什麼..."
        required
      ></TextBox>
      <AddBtn onClick={handleClick}>新增</AddBtn>

      <AddList  id="listTo"></AddList>

      <button onClick={handleClearStr}>click me to clear localStorage</button>
    <ul id = "array"></ul>
    </myDiv>
  );
};
export default ToDoList;
