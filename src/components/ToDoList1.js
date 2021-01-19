// import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// /*style part */
// const Wrap = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// const Content = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const AddList = styled.div`
//   /* display:flex;
//     justify-content:center; */
// `;

// const Text = styled.input`
//   /* display:flex;
//     justify-content:center; */
// `;

// const Send = styled.button`

// `;

// const List = styled.ul`
//   /* display:flex;
//     justify-content:center; */
// `;

// /*js part */
// const ToDoList1 = () => {
// /*指定document*/
//     var list = document.querySelector('.List');
//     var sendData = document.querySelector('.Send');
//     /*取出 localstorage裡的資料*/
//     var data = JSON.parse(localStorage.getItem('listData')) || [];

// /*監聽事件*/

//     sendData.addEventListener('click',handleText);
//     list.addEventListener('click',delData);
//     updateList(data);

// /*新增*/
// function handleText(e) {
//     e.preventDefault();
//     console.log(e);

//     var txt = e.target.value;

//     var todo = {
//       content: txt
//     };
//     data.push(todo);

//     // 更新網頁內容
//     updateList(data);
//     // 更新localstorage,要存入要轉成string
//     localStorage.setItem('listData', JSON.stringify(data));
//   }

// /*更新*/
// function updateList(items) {
//     // 定義 str暫存todo的項目
//     var str = "";
//     var len = items.length;
//     // updateList(items)的 items是指 localStorage的 object項目
//     // 用for跑出所有的待辦item
//     for(var i = 0; i < len; i++) {
//       str += '<li><a href="#" data-index=' + i + '>刪除</a><span>'+ items[i].content+ '</span></li>'
//     };
//     // 存回頁面更新html
//     // list.innerHTML = str;
//     list = str;
//   }

// /*刪除*/
// function delData(e) {
//     e.preventDefault();
//     // 確認點擊的是否為a元素，否則跳出
//     if(e.target.tagName !== 'A') { return };

//     // 確認點擊的a元素 index
//     var index = e.target.dataset.index;

//     // 刪除data
//     data.splice(index,1);

//     // 將data存回localStorage
//     localStorage.setItem('listData',JSON.stringify(data));

//     // 更新頁面的list
//     updateList(data);
//   }

//   /*return part*/
//   return (
//     <Wrap>
//       <Content>
//         <AddList>
//           <Text
//           type="text"
//           onChange = {handleText}
//           placeholder="請填寫代辦內容"
//           required
//           ></Text>
//           <Send
//           type="button"
//           >
//             新增
//           </Send>
//         </AddList>
//         <List></List>
//       </Content>
//     </Wrap>
//   );
// };

// export default ToDoList1;

// import React from "react";

// const ToDoList1 = () => {
//   // -------- 指定 dom -------- //
//   var list = document.querySelector(".list");
//   var sendData = document.querySelector(".send");
//   // 取出 localstorage裡的資料，有就取值，沒就塞空陣列
//   var data = JSON.parse(localStorage.getItem("listData")) || [];

//   // -------- 加入列表 -------- //
//   function addData(e) {
//     e.preventDefault();

//     var txt = document.querySelector(".text").value;
//     // 新增 todo的 object
//     // content 是 localStorage object裡的 key
//     // txt 是 localStorage object裡的 value
//     var todo = {
//       content: txt,
//     };
//     data.push(todo);
//     // 更新網頁內容
//     updateList(data);
//     // 更新localstorage,要存入要轉成string
//     localStorage.setItem("listData", JSON.stringify(data));
//   }

//   // --------  更新列表 -------- //
//   function updateList(items) {
//     // 定義 str暫存todo的項目
//     var str = "";
//     var len = items.length;
//     // updateList(items)的 items是指 localStorage的 object項目
//     // 用for跑出所有的待辦item
//     for (var i = 0; i < len; i++) {
//       str +=
//         '<li><a href="#" data-index=' +
//         i +
//         ">刪除</a><span>" +
//         items[i].content +
//         "</span></li>";
//     }
//     // 存回頁面更新html
//     list.innerHTML = str;
//   }

//   // --------  刪除列表 -------- //
//   function toggleDone(e) {
//     e.preventDefault();
//     // 確認點擊的是否為a元素，否則跳出
//     if (e.target.tagName !== "A") {
//       return;
//     }
//     // 確認點擊的a元素 index
//     var index = e.target.dataset.index;
//     // 刪除data
//     data.splice(index, 1);
//     // 將data存回localStorage
//     localStorage.setItem("listData", JSON.stringify(data));
//     // 更新頁面的list
//     updateList(data);

//     // --------  監聽和更新 -------- //
//     // 監聽btn 送出 todo
//     sendData.addEventListener("click", addData);
//     // 刪除 todo
//     list.addEventListener("click", toggleDone);
//     // 更新列表
//     updateList(data);
//   }
//   return (
//     <div class="wrap clearfix">
//       <div class="content">
//         <div class="addList">
//           <input
//             type="text"
//             class="text"
//             placeholder="請填寫代辦內容"
//             required
//           ></input>
//           <input type="button" class="send" value="加入代辦"></input>
//         </div>
//         <ul class="list"></ul>
//       </div>
//     </div>
//   );
// };

// export default ToDoList1;



import React from "react";

const ToDoList1 = () => {
  const addItems = document.querySelector(".add-items");
  const itemsList = document.querySelector(".plates");
  const submitBtn = document.querySelector('input[type="submit"]');
  const inputArea = document.querySelector('input[type="text"]');

  //當localStorage沒有資料陣列，指定一個空陣列放入資料庫
  if (localStorage.getItem("item") === null) {
    var storageArray = [];
    localStorage.setItem("item", JSON.stringify(storageArray));
    //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
  } else {
    var storageArray = JSON.parse(localStorage.getItem("item"));
  }

  // addItems.addEventListener('submit', addItem);

   function handleClick(event) {
      event.preventDefault();
      //取得輸入欄位的資料
      let inputValue = inputArea.value;
      //建立一個符合我們需求的物件資料
      let inputObject = { value: inputValue, done: false };
      //將新物件加入我們的陣列
      storageArray.push(inputObject);
      //將陣列修改成JSON字串
      let stringJson = JSON.stringify(storageArray)
      //將處理後的JSON字串更新到資料庫中
      localStorage.setItem(`item`, stringJson);
      //將輸入欄位清空
      inputArea.value = '';
      //將資料呈現在頁面上
      // createlist()
  };

  function createlist() {
    //將資料庫的陣列取出
    let arrayJason = JSON.parse(localStorage.getItem('item'));
    //假如資料庫內的陣列有內容存在，執行以下的程式碼
    if (arrayJason.length !== 0) {
        //先清空ul容器內的元素
        itemsList.innerHTML = '';
        //對陣列裡的每個元素執行函式
        arrayJason.forEach(function (item) {
            //在DOM上創造一個<li>元素
            let createLi = document.createElement('li');
            //在DOM上創造一個<input>元素
            let createInput = document.createElement('input');
            //將<input>元素加上 type="checkbox"這個屬性
            createInput.setAttribute('type', 'checkbox');
            //在DOM上創造一個<label>元素
            let createLabel = document.createElement('label');
            //將物件中的 done 值指定給 <label> 元素的 checked 屬性
            createInput.checked = item['done'];
            //將<input>元素加上監聽事件與觸發函式
            createLabel.addEventListener('click', checkStatus);
            //將物件中的 value 值指定給 <input> 元素的文字內容
            createLabel.textContent = item['value'];
            //將 <input> 元素加到 <li> 容器元素底下
            createLi.appendChild(createInput);
            //將 <label> 元素加到 <li> 容器元素底下
            createLi.appendChild(createLabel);
            //將 <li> 元素加到 <ul> 容器元素底下
            itemsList.appendChild(createLi);
        });
      //假如資料庫內的陣列有內容存在，執行以下的程式碼
      } else {
        itemsList.innerHTML = '<li>Loading Tapas...</li>';
    }
};

function checkStatus(event) {
   event.preventDefault();
    //將目前頁面中的所有 <label> 元素選出來
    let allLable = document.querySelectorAll('label');
    //將前一步中的 Nodelist 轉為陣列
    let labelArray = Array.from(allLable);
    //取得觸發事件元素的 index
    let getIndex = labelArray.indexOf(event.target);
    //將資料庫中的陣列資料叫出來
    let arrayJason = JSON.parse(localStorage.getItem('item'));
    //當 click 事件觸發時，將 done 的屬性布林值改為相反
    arrayJason[getIndex]['done'] = !arrayJason[getIndex]['done'];
    //將新的資料陣列轉成 JSON string 結構
    let stringJson = JSON.stringify(arrayJason);
    //將新的 JSON string 丟到資料庫中
    localStorage.setItem(`item`, stringJson);
    //重新將資料呈現在頁面上
    createlist();
    };
  return (
    <form class="add-items">
      <input type="text" name="item" placeholder="Item Name" required></input>
      <input type="submit" onClick = {handleClick} value="+ Add Item"></input>
    </form>
  );
};

export default ToDoList1;

