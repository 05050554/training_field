import React, { useState, useEffect } from "react";

const TodoListGary = () => {
  const [todo, setTodo] = useState([]);
  const [state, setState] = useState();
  /*前者 回傳useState的值 後者為*/

  useEffect(()=>{  /* useEffect是告訴React你的component需要在render後做一些事情*/
    function changeTodo(item){
        setTodo(item)
    }
      const item = JSON.parse(localStorage.getItem('todolist'))
      if(item){
        changeTodo(item)
        // setTodo(item) 
        /*這樣寫如果只有寫這一行且沒有加上,[]的話就會跳出warning但可以執行 (盡量不要這樣寫)*/
      }

  },[])


  // todo.forEach(t => console.log(t))
  const handleSTodo = () => {
    setTodo((prev) => {
      let newArray = [...prev]; /*把先前的狀態寫入陣列中*/
      newArray.push({           /*在尾端加入新的項目*/
        content: state,         /*push輸入欄位裡的東西*/
    
      });
      
      // document.getElementById("input").value = "";
      localStorage.setItem("todolist",JSON.stringify(newArray))
      return newArray;
      
    });
  };

  function handleClear(){
    localStorage.clear();
    setTodo([])
    setState('')
  }

  return (
    <div>
       <h3>Todolist</h3>
      <input id = 'input' value = {state} onChange={(e) => setState(e.target.value)}></input>
      <button onClick={handleSTodo}>Add</button>
      <section>
        {todo.map((t) => (
          /*map 原理 請見Map.Principle.js*/
          <p >{t.content}</p>
          
        ))}
      </section>
      <button onClick = {handleClear}>Clear localstorage</button>
    </div>
  );
};

export default TodoListGary;
