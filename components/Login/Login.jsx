import Image from "next/image";
import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Button from "../../components/Button/Button";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { LoginWrapper } from "./LoginStyle";
import logo from "../../assets/img/logo.png";
import Typography from "../Typography/Typography";
import login from "../../assets/img/login.jpg";
const Login = () => {
  const [type, setType] = useState("login");
  return (
    <LoginWrapper>
      <div className="login-wrapper">
        <div className="row">
          <div className="col-6 right-section ">
            <div className="row">
              <div className="col-6">
                <Image
                  src={logo}
                  layout="intrinsic"
                  width="50px"
                  height="47.5px"
                  alt=""
                />
              </div>
              <div className="col-6">
                <SwitchToggle />
              </div>
            </div>
            <div className="w-100 mt-5">
              <Typography color="#000" className="mb-0">
                ثبت نام در به سود
              </Typography>
            </div>
            <div className="row mt-2">
              {type === "login" ? null : (
                <>
                  <div className="col-lg-6 col-md-6 col-12">
                    <InputField placeholder="نام" label="نام" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <InputField
                      placeholder="نام خانوادگی"
                      label="نام خانوادگی"
                    />
                  </div>
                </>
              )}
              <div className="col-12">
                <InputField placeholder="09351234567" label="شماره تماس" />
              </div>
              <div className="col-12">
                <InputField placeholder="******" label="رمز عبور" />
              </div>
              <div className="col-12">
                <Button>{type === "login" ? "ورود" : "ثبت نام"}</Button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image src={login} layout="intrinsic" alt="" />
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
