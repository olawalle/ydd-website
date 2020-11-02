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
    username: "",
    password: "",
  });
  const [authId, setauthId] = useState("");
  const [loading, setloading] = useState(false);

  const userLogin = (e) => {
    setloading(true);
    const { username, password } = loginData;
    let data = {
      username,
      password,
    };
    apiServices
      .login(data)
      .then((res) => {
        setloading(false);
        window.localStorage.setItem(
          "afm-data",
          JSON.stringify(res.data.data.user)
        );
        window.localStorage.setItem(
          "afm-data-token",
          JSON.stringify(res.data.data.token)
        );
        router.push("/");
      })
      .catch((err) => {
        console.log({ err });
        setloading(false);
        openSnackbar("Invalid username or password", 600000);
      });
  };

  useEffect(() => {
    let query = router.query.authId
      ? router.query.authId.replace(" ", "+")
      : "";
    let authId = query || "";
    setauthId(authId);
  }, []);

  return (
    <div className='auth-wrap'>
      <div className='login'>
        <Link href='/'>
          <img src={ydd_logo} alt='' className='logo' />
        </Link>
        <h1>Login</h1>

        <p className='label'>Email address</p>
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
        <button
          className='btn btn-primary btn-block btn-large'
          onClick={userLogin}
          disabled={loading}
        >
          Log in
        </button>
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
