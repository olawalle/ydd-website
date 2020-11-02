import React, { useState, useEffect } from "react";
import "./styles/login.scss";
import ydd_logo from "../public/ydd-photos/ydd_logo.png";
import apiServices from "../services/apiServices";
import Select from "react-select";
import { useSnackbar } from "react-simple-snackbar";
import Link from "next/link";

export default function signup() {
  const options = {
    position: "top-right",
  };
  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  const maritalStats = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Widowed", label: "Widowed" },
  ];

  const sexes = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const [branches, setbranches] = useState([]);
  const [occupations, setOccupations] = useState([]);

  const [signupData, setsignupData] = useState({
    username: "",
    firstName: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    maritalStatus: "",
    occupationId: null,
    roleId: 0,
    churchId: 0,
    hasAccessRight: false,
  });

  useEffect(() => {
    apiServices
      .fetchChurches_()
      .then((res) => {
        let branches = res.data.data.branches
          .map((z) => Object.values(z)[0])
          .reduce((a, b) => a.concat(b), [])
          .map((b) => {
            return {
              ...b,
              label: b.name,
              value: b.churchId,
            };
          });
        setbranches(branches);
      })
      .catch((err) => {
        console.log(err);
      });

    apiServices
      .getJobs()
      .then((res) => {
        setOccupations(
          res.data.data.jobCategory.map((j) => {
            return {
              ...j,
              label: j.job,
              value: j.jobId,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    let {
      username,
      firstName,
      lastName,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
      email,
      maritalStatus,
      occupationId,
      roleId,
      churchId,
    } = signupData;
    let data = {
      username,
      firstName,
      lastName,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
      email,
      maritalStatus,
      occupationId,
      roleId: "member",
      churchId,
      levelId: "District",
      frontend_url: `http://${window.location.host}/login`,
    };

    console.log(data);
    apiServices
      .signup(data)
      .then((res) => {
        console.log(res);
        openSnackbar("Account created successfully", 6000);
      })
      .catch((err) => {
        console.log({ err });
        openSnackbar("An error occured. Please try again", 6000);
      });
  };

  const updatSignupForm = (key, val) => {
    console.log({ key, val, signupData });
    let data = { ...signupData, [key]: val };
    setsignupData(data);
  };

  return (
    <div className='auth-wrap'>
      <div className='login signup'>
        <Link href='/'>
          <img src={ydd_logo} alt='' className='logo' />
        </Link>
        <h1>Signup</h1>
        <div className='left'>
          <span>First Name</span>
          <input
            type='text'
            name='u'
            placeholder='First name'
            required='required'
            onChange={(e) => updatSignupForm("firstName", e.target.value)}
          />
        </div>
        <div className='right'>
          <span>Last Name</span>
          <input
            type='text'
            name='u'
            placeholder='Last name'
            required='required'
            onChange={(e) => updatSignupForm("lastName", e.target.value)}
          />
        </div>
        <div className='left'>
          <span>Username</span>
          <input
            type='text'
            name='u'
            placeholder='Username'
            required='required'
            onChange={(e) => updatSignupForm("username", e.target.value)}
          />
        </div>
        <div className='right'>
          <span>Phone number</span>
          <input
            type='text'
            name='u'
            placeholder='Phone Number'
            required='required'
            onChange={(e) => updatSignupForm("phoneNumber", e.target.value)}
          />
        </div>
        <div className='left'>
          <span>Email address</span>
          <input
            type='text'
            name='u'
            placeholder='Email address'
            required='required'
            onChange={(e) => updatSignupForm("email", e.target.value)}
          />
        </div>
        <div className='right'>
          <span>Date of Birth</span>
          <input
            type='date'
            name='p'
            placeholder='Date of birth'
            required='required'
            onChange={(e) => updatSignupForm("dateOfBirth", e.target.value)}
          />
        </div>
        <div className='left'>
          <span>Gender</span>
          <Select
            defaultValue={signupData.gender}
            onChange={(e) => setsignupData({ ...signupData, gender: e.value })}
            options={sexes}
          />
        </div>
        <div className='right'>
          <span>Marital status</span>
          <Select
            defaultValue={signupData.maritalStatus}
            onChange={(e) =>
              setsignupData({ ...signupData, maritalStatus: e.value })
            }
            options={maritalStats}
          />
        </div>
        <div className='left' style={{ width: "100%", marginTop: 10 }}>
          <span>Branch</span>
          <Select
            onChange={(e) =>
              setsignupData({ ...signupData, churchId: e.value })
            }
            options={branches}
          />
        </div>
        <div className='left' style={{ margin: "20px 0" }}>
          <span>Occupation</span>
          <Select
            defaultValue={signupData.occupationId}
            onChange={(e) =>
              setsignupData({ ...signupData, occupationId: e.value })
            }
            options={occupations}
          />
        </div>
        <div className='right' style={{ margin: "20px 0" }}>
          <span>Password</span>
          <input
            type='password'
            name='p'
            placeholder='Password'
            required='required'
            onChange={(e) => updatSignupForm("password", e.target.value)}
          />
        </div>

        <button
          className='btn btn-primary btn-block btn-large'
          onClick={handleSignup}
        >
          Sign up
        </button>

        <Link href='/login'>
          <p style={{ marginTop: 10, cursor: "pointer" }}>
            Already have an account? Login
          </p>
        </Link>
      </div>
    </div>
  );
}
