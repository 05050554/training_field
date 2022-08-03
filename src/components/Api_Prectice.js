import React, { useState, useEffect } from "react";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Api_Pretice = () => {
  //   const [catchData, setCatchData] = useState([]);
  const [arrData, setArrData] = useState([]); /*不是陣列的話MAP會錯誤*/
  const [searchData, setSearchData] = useState("");
  const [newArryData, setNewArryData] = useState();

  useEffect(() => {
    const get_api = async () => {
      /*https://cors-anywhere.herokuapp.com/*/
      let { data } = await axios.get(
        "https://api.punkapi.com/v2/beers?page=1&per_page=20"
      );
      //   let newArr = []
      //   console.log(data)
      //   data.map(d =>{
      //       newArr.push(d.id)
      //   })
      //   setArrData(newArr)
      setArrData(data);
      console.log(data);
    };

    get_api();
  }, []);

  function handleInput(e) {
    setSearchData(e.target.value);
    // console.log(e.target.value);

    // console.log(arrData);
    // const fil = arrData.filter(J => J.tagline === searchData);
    // console.log(fil);
    // setArrData(fil);
  }

  function handleClick(e) {
    e.preventDefault();
    const fil = arrData.filter((J) => J.name === searchData);
    // console.log(fil);
    setArrData(fil);
    console.log(arrData)
  }

  return (
   
    <div className="Api" id="Api">
       <Navbar/>
      {/* <Link to="/">Click Back To LinkPrac</Link> */}
      <br/>
      <form onSubmit={handleClick} style={{textAlign:"center"}} >
        <input onChange={handleInput} value={searchData} placeholder="Type Full Name"></input>
        <button type="submit">Search</button>
      </form>
      <GridList cellHeight={500} cols={3}>
        {arrData.map((t) => (
          // <p key={t}>{t}</p>
          <GridListTile key={t.imge_url} cols={t.cols || 1} style={{textAlign:"center"}}>
            <img src={t.image_url} style={{ maxWidth: "30%",maxHeight:"90%" }} />

            <GridListTileBar
              title={t.name}
              subtitle={<span>by: {t.contributed_by}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
      
    </div>
  );
};

export default Api_Pretice;
