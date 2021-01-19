import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Registerform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const Title = styled.h1`
  font-weight: normal;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Textbox = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 20px;
`;
const CheckText = styled.p`
  margin: 10px;
  text-align: center;
`;

const RegisterPage = () => { /*把需要控制的都寫在一起，可以方便管理使用*/
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [checkPassword, setCheckPassword] = useState("");
  const [checkText, setCheckText] = useState(true);
  function handleEmail(e) {
    const { value, name } = e.target;
    setUserInfo(prevData =>({   /*prevData是用來類似把值疊加下來 EX:Email輸入完 下面兩個會無法輸入 沒有加的話後面的值會無法填入 */ 
        ...prevData,
        [name]:value
    }));
  }
   const handleSubmit = async(e) => {/*把抓到的資料轉成json檔*/
      e.preventDefault()
      console.log(userInfo)
      console.log("-------------");
      console.log(JSON.stringify(userInfo))
      const data = await axios.post("/user/register", userInfo);
      console.log(data)
  }

  return (
    <Registerform>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Textbox
          placeholder="email"
          name="email"
          value={userInfo.email}
          onChange={handleEmail}
          required
        ></Textbox>

        <Textbox
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleEmail}
          placeholder="password"
          required
        ></Textbox>
        <br />
        <Textbox
          type="password"
          name="checkPassword"
          placeholder="password"
          required
          value={userInfo.checkPassword}
          onChange={handleEmail}
        ></Textbox>
        {checkText ? "" : <CheckText>二次密碼不正確</CheckText>}

        <br />
        <Textbox type="submit" value="Register" disabled={!checkText}></Textbox>
        <br />
        {/* <Register href="/">Don't have an account? Sign Up</Register> */}
      </Form>
    </Registerform>
  );
};

export default RegisterPage;