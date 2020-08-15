import React, { useState, useEffect } from "react";
import "./styles/login.scss";
import ydd_logo from "../public/ydd-photos/ydd_logo.png";
import apiServices from "../services/apiServices";
import { useSnackbar } from "react-simple-snackbar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter();
  const options = {
    position: "top-right",
  };
  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  const [loginData, setloginData] = useState({
    username: "afmydd",
    password: "pa$$word",
  });

  const userLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;
    let data = {
      username,
      password,
    };
    console.log(data);
    apiServices
      .login(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ err });
        openSnackbar("Invalid username or password", 6000);
      });
  };

  // useEffect(() => {
  //   let halfs = router.asPath.split("?");
  //   let token = halfs[1] ? halfs[1].split("=")[1] : null;
  //   console.log(token);
  // }, []);

  return (
    <div className="auth-wrap">
      <img src={ydd_logo} alt="" className="logo" />

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
          onChange={(e) =>
            setloginData({
              ...loginData,
              username: e.target.value,
            })
          }
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          onChange={(e) =>
            setloginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          onClick={userLogin}
        >
          Log in
        </button>
        <Link href="/signup">
          <p style={{ marginTop: 10, cursor: "pointer" }}>
            Do not have an account? Sign up
          </p>
        </Link>
      </div>
    </div>
  );
}
