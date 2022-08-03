import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const Loginform = styled.div`
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
const Register = styled.a`
  margin: 10px;
  text-align: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  function handleEmail(e) {
    //e是event的意思
    setEmail(e.target.value);
    console.log(e);
  }
  function handlePassWord(e) {
    setPassword(e.target.value); //target裡有value
    console.log(e); //在console裡
  }
  async function handleSubmit(e) {
    e.preventDefault(); //避免瀏覽器預設行為 submit後不會再刷新
    const { data } = await axios.post("/user/login", { email, password }); //拿取資料
    const { token } = data;
    localStorage.setItem("token", token); //application>local strage裡有token
    console.log(localStorage.getItem("token"));
  }

  /*onSubmit 是在表單中的確認按鈕被點後時觸發的*/

  return (
    <div>
    <Navbar/>
    <Loginform>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Textbox
          placeholder="email"
          value={email}
          onChange={handleEmail}
          required
        ></Textbox>

        <Textbox
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassWord}
          required
        ></Textbox>
        <br />
        <Textbox type="submit" value="Sign in"></Textbox>
        <br />
        <Register href="/">Don't have an account? Sign Up</Register>
      </Form>
    </Loginform>
    </div>
  );
};

export default Login;
