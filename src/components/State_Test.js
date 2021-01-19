import React, { useState } from "react";
// import "./State_Test/State_Test.css";
import "./State_Test.css";

const State_Test = () => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false); /*狀態管理 預設為關*/
  return (
    <div className="ham">
      <div className="sp">
        <button onClick={() => setOpen(!open)}>TIPS</button>
      </div>
      {open ? (
        <div className="menu">
          <ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
            <li>list4</li>
            <li>list5</li>
            <li>list6</li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {open ? (
        <div className="menu_p">
          <p>Open</p>
        </div>
      ) : (
        <div className="menu_p">
          <p>Close</p>
        </div>
      )}
    </div>
  );
};

export default State_Test; /*open===ture 跟 open? 一樣 ture執行前面 反之 後者*/

/*!= 反狀態   ()=>  arrow function callback 就是去執行一個涵式*/

/*=>{'menu'?"":""} 判斷*/
