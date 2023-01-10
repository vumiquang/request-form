import React from "react";
import videoBackGround from "../../assets/backgroundVideo.mp4";
import style from "./LoginPage.module.scss";
const Login = (props) => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className={style.background}
        src={videoBackGround}
      ></video>
      <div className={style.login}>
        <form className={style.form}>
          
        </form>
      </div>
    </>
  );
};

export default Login;
