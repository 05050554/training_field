import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar"

const Get_Data = () => {
  const [arrData, setArrData] = useState([]);
  const [userInput, setUserInput] = useState({
    select: "",
    timeup: "",
    timedown: "",
  });

  function handleClick(e) {
    e.preventDefault();
    console.log(JSON.stringify(userInput));
    const get_api = async () => {
      let data = await axios.post(
        "http://140.125.45.156:8000/report_form",
        userInput
      );

      setArrData(data.data);
      console.log(data);
      console.log(data.data[0]);
      console.log(arrData);

    //     let newArr = []
    //     console.log(data)
    //     data.map(d =>{
    //         newArr.push(d.data)
    //     })
    //     setArrData(newArr)
    //   setArrData(data);
   
    
    };


    get_api();

  }

  function handleInput(e) {
    const { value, name } = e.target;
    setUserInput((preData) => ({
      ...preData,
      [name]: value,
    }));
  }


  return (
    <div>
      <Navbar/>
      <br/>
      <form onSubmit={handleClick}>
        <input
          onChange={handleInput}
          value={userInput.select}
          placeholder="Type Select"
          name="select"
        ></input>
        <input
          onChange={handleInput}
          value={userInput.timeup}
          placeholder="Type Timeup"
          name="timeup"
        ></input>
        <input
          onChange={handleInput}
          value={userInput.timedown}
          placeholder="Type Timedown"
          name="timedown"
        ></input>
        <button type="submit">Search</button>
        {/* {arrData.map((t) => (
          <p>{t}</p>
        ))} */}
      </form>
     
    </div>
  );
};

export default Get_Data;
