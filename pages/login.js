import React, { useState, useEffect } from "react";
import "./styles/login.scss";
import ydd_logo from "../public/ydd-photos/ydd_logo.png";
import apiServices from "../services/apiServices";
import { useSnackbar } from "react-simple-snackbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "antd";

export default function login() {
  const router = useRouter();
  const options = {
    position: "top-right",
  };
  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const [authId, setauthId] = useState("");
  const [toReg, setToReg] = useState(0);
  const [loading, setloading] = useState(false);

  const userLogin = (e) => {
    setloading(true);
    const { username, password } = loginData;
    let data = {
      username,
      password,
    };
    // authId ? (data.authId = authId) : null;
    apiServices
      .login(data, authId)
      .then((res) => {
        setloading(false);

        if (!res.data.data) {
          openSnackbar(res.data.message, 6000);
          return;
        }
        window.localStorage.setItem(
          "afm-data",
          JSON.stringify(res.data.data.user)
        );
        window.localStorage.setItem(
          "afm-data-token",
          JSON.stringify(res.data.data.token)
        );
        toReg === 1 ? router.push("/iyc-register") : router.push("/");
      })
      .catch((err) => {
        console.log({ err });
        setloading(false);
        openSnackbar("Invalid username or password", 6000);
      });
  };

  useEffect(() => {
    let query = router.query.authId
      ? router.query.authId.replace(" ", "+")
      : "";
    let authId = query || "";
    setauthId(authId);

    let query_ = router.query.reg || 0;
    setToReg(parseFloat(query_));
  }, [loginData]);

  return (
    <div className='auth-wrap'>
      <div className='login'>
        <Link href='/'>
          <img
            src={ydd_logo}
            alt=''
            className='logo'
            style={{ cursor: "pointer" }}
          />
        </Link>
        <h1>Login</h1>

        <p className='label'>Username</p>
        <input
          type='text'
          name='u'
          placeholder='Username'
          required='required'
          defaultValue={loginData.username}
          onChange={(e) =>
            setloginData({
              ...loginData,
              username: e.target.value,
            })
          }
        />

        <p className='label'>Password</p>
        <input
          type='password'
          name='p'
          placeholder='Password'
          required='required'
          defaultValue={loginData.password}
          onChange={(e) =>
            setloginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />
        <Button
          className='btn btn-primary btn-block btn-large'
          onClick={userLogin}
          loading={loading}
        >
          Log in
        </Button>
        <Link href='/signup'>
          <a>
            <p style={{ marginTop: 10, cursor: "pointer" }}>
              Do not have an account? Sign up
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
