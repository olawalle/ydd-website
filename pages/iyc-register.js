import React, { useState, useEffect } from "react";
import {
  Form,
  Checkbox,
  Button,
  Icon,
  Label,
  Menu,
  Radio,
} from "semantic-ui-react";
import axios from "axios";
import "./styles/register.scss";
import Nav from "../components/Nav";
import { Modal } from "antd";

const classDivisionOptions = [
  {
    key: "Science",
    text: "Science",
    value: "Science",
  },
  {
    key: "Art",
    text: "Art",
    value: "Art",
  },
  {
    key: "Commercial",
    text: "Commercial",
    value: "Commercial",
  },
];

const Register = () => {
  let [hubOptions, setHubOptions] = useState(null);
  let [occupationOptions, setOccupationOptions] = useState(null);
  let [totalRegistered, setTotalRegistered] = useState(null);
  let [hub, setHub] = useState("");
  let [accommodation, setAccommodation] = useState(false);
  let [educationCareer, setEducationCareer] = useState("");
  let [classDivision, setClassDivision] = useState("");
  let [faculty, setFaculty] = useState("");
  let [job, setJob] = useState("");
  let [sending, setSending] = useState(false);
  let [registeredUser, setRegisteredUser] = useState(null);
  let [open, setOpen] = useState(false);
  let [error, setError] = useState("");
  const [userData, setUserData] = useState({});
  //const [token, setToken] = useState("");
  //let registeredUser = null;
  useEffect(() => {
    axios({
      method: "get",
      url: "http://91.235.129.103:7200/api/v1/config/resources/virtual-hubs",
    })
      .then((res) => {
        setHubOptions(res.data.data.hubs);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://91.235.129.103:7200/api/v1/config/resources/occupation",
      // headers: {
      //   clientId: "A4m0xs4",
      // },
    })
      .then((res) => {
        setOccupationOptions(res.data.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://91.235.129.103:7700/api/v1/iyc/register",
    })
      .then((res) => {
        setTotalRegistered(res.data.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    let user = localStorage.getItem("afm-data")
      ? JSON.parse(localStorage.getItem("afm-data"))
      : {};
    //let token = localStorage.getItem("afm-data-token");
    //setToken(token);
    setUserData({
      username: user.username,
      gender: user.gender,
      email: user.email,
      firstName: user.firstName,
    });
  }, []);

  const handleFieldChange = (e, val) => {
    setHub(val.value);
  };

  const handleCheckAccommodation = (e, val) => {
    console.log(val);
    setAccommodation(val.checked);
  };

  const handleCheck = (e, val) => {
    setEducationCareer(val.value);
  };

  const handleClassDivisionChange = (e, val) => {
    setClassDivision(val.value);
  };

  const handleFacultyChange = (e, val) => {
    setFaculty(val.value);
  };

  const handleJobChange = (e, val) => {
    setJob(val.value);
  };

  const handleSubmit = () => {
    if (educationCareer && ((classDivision && faculty) || job)) {
      let data = {
        username: userData.username,
        gender: userData.gender,
        email: userData.email,
        firstName: userData.firstName,
        hub: hub,
        accommodation: accommodation,
        educationCareer: educationCareer,
        classDivision: classDivision,
        faculty: faculty,
        job: job,
      };
      setSending(true);
      axios({
        method: "post",
        url: "http://91.235.129.103:7700/api/v1/iyc/register",
        data: data,
      })
        .then((res) => {
          if (res.data.success) {
            setRegisteredUser(res.data.data);
            setSending(false);
            setOpen(true);
            setHub("");
            setAccommodation(false);
            setEducationCareer("");
            setClassDivision("");
            setFaculty("");
            setJob("");
          } else {
            setSending(false);
            setOpen(true);
            setError("You can only register once");
          }
        })
        .catch((err) => {
          setSending(false);
          setOpen(true);
          setError("Something went wrong");
          throw new Error(err);
        });
    } else {
      setOpen(true);
      setError("Your form is incomplete. Complete the form");
    }
  };

  return (
    <>
      <Nav />
      <div className='iyc-register'>
        <div className='area'>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
            Register for 2020 International Youth Camp
            <br />
            <span style={{ fontSize: "0.6em" }}>
              (Check "I Need Accommodation" if you want to be on premise)
            </span>
          </h3>

          <br />
          <br />

          <Modal
            centered
            visible={open}
            closable={true}
            onCancel={() => setOpen(false)}
            title={error ? "Error!!!" : "Congratulations!!!"}
            footer={null}
          >
            {error && <p>{error}</p>}
            {registeredUser && (
              <>
                <p>
                  You have just registered successfully for the 2020
                  International Youth Camp.
                </p>
                <p>
                  Your Registration ID is <b>{registeredUser.regId}</b>.
                </p>
                <p>
                  Please note that you specified your Worship Hub as{" "}
                  <b>{registeredUser.hub}</b> and your educational/career
                  details as:{" "}
                  <b>
                    {registeredUser.educationCareer} /{" "}
                    {registeredUser.faculty
                      ? registeredUser.faculty
                      : registeredUser.job
                      ? registeredUser.job
                      : ""}
                  </b>
                  .
                </p>
              </>
            )}
          </Modal>

          <Form onSubmit={handleSubmit}>
            <div className='itms'>
              <Menu compact>
                <Menu.Item as='a'>
                  <Icon name='mail' /> Hub Capacity
                  <Label color='red' floating>
                    {hubOptions && hub
                      ? hubOptions.find((data) => data.district === hub)
                          .capacity -
                        totalRegistered.filter((data) => data.hub === hub)
                          .length
                      : 0}
                  </Label>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='users' /> Accommodation
                  <Label color='teal' floating>
                    {hubOptions && hub
                      ? hubOptions.find((data) => data.district === hub)
                          .accommodation[userData.gender.toLowerCase()] -
                        totalRegistered
                          .filter((data) => data.hub === hub)
                          .filter(
                            (data) =>
                              data.gender.toLowerCase() ===
                              userData.gender.toLowerCase()
                          )
                          .filter((data) => data.accommodation).length
                      : 0}
                  </Label>
                </Menu.Item>
              </Menu>
            </div>

            <div style={{ paddingTop: "30px" }}>
              <Form.Select
                fluid
                required
                label='Hub'
                options={
                  hubOptions &&
                  hubOptions.map((data) => ({
                    key: data.district,
                    text: data.district,
                    value: data.district,
                  }))
                }
                placeholder='Select Hub'
                onChange={handleFieldChange}
              />
            </div>

            <Checkbox
              style={{ padding: "20px 20px", marginLeft: "-20px" }}
              label='I Need Accommodation'
              checked={accommodation}
              onChange={handleCheckAccommodation}
            />

            <div style={{ paddingBottom: "10px" }}>
              <h5>Choose Your Education/Career</h5>
            </div>
            <div>
              <div style={{ padding: "5px 0" }}>
                <Radio
                  name='eduCar'
                  label='Secondary Student'
                  value='Secondary Student'
                  checked={educationCareer === "Secondary Student"}
                  onChange={handleCheck}
                />
                {educationCareer === "Secondary Student" && (
                  <Form.Group widths='equal' style={{ paddingTop: "20px" }}>
                    <Form.Select
                      fluid
                      label='Class Division'
                      options={classDivisionOptions}
                      placeholder='Select Class Division'
                      onChange={handleClassDivisionChange}
                    />
                    <Form.Select
                      fluid
                      label='Faculty'
                      options={
                        classDivision
                          ? occupationOptions[
                              `${classDivision.toLowerCase()}Options`
                            ].map((data) => ({
                              key: data,
                              text: data,
                              value: data,
                            }))
                          : [{ key: "1", text: "You need to select a class" }]
                      }
                      placeholder='Select Faculty'
                      onChange={handleFacultyChange}
                    />
                  </Form.Group>
                )}
              </div>
              <hr />
              <div style={{ padding: "5px 0" }}>
                <Radio
                  name='eduCar'
                  label='SS3 And Post-Secondary School Students'
                  value='SS3 And Post-Secondary School Students'
                  checked={
                    educationCareer === "SS3 And Post-Secondary School Students"
                  }
                  onChange={handleCheck}
                />
                {educationCareer ===
                  "SS3 And Post-Secondary School Students" && (
                  <Form.Group widths='equal' style={{ paddingTop: "20px" }}>
                    <Form.Select
                      fluid
                      label='Class Division'
                      options={classDivisionOptions}
                      placeholder='Select Class Division'
                      onChange={handleClassDivisionChange}
                    />
                    <Form.Select
                      fluid
                      label='Faculty'
                      options={
                        classDivision
                          ? occupationOptions[
                              `${classDivision.toLowerCase()}Options`
                            ].map((data) => ({
                              key: data,
                              text: data,
                              value: data,
                            }))
                          : [{ key: "1", text: "You need to select a class" }]
                      }
                      placeholder='Select Faculty'
                      onChange={handleFacultyChange}
                    />
                  </Form.Group>
                )}
              </div>
              <hr />
              <div style={{ padding: "5px 0" }}>
                <Radio
                  name='eduCar'
                  label='Undergraduate'
                  value='Undergraduate'
                  checked={educationCareer === "Undergraduate"}
                  onChange={handleCheck}
                />
                {educationCareer === "Undergraduate" && (
                  <div style={{ paddingTop: "20px" }}>
                    <Form.Select
                      fluid
                      label='Job Type'
                      placeholder='Select a job type'
                      options={classDivisionOptions}
                      options={
                        occupationOptions &&
                        occupationOptions["jobCategory"].map((data) => ({
                          key: data,
                          text: data,
                          value: data,
                        }))
                      }
                      onChange={handleJobChange}
                    />
                  </div>
                )}
              </div>
              <hr />
              <div style={{ padding: "5px 0" }}>
                <Radio
                  name='eduCar'
                  label='Fresh Graduate/Post-Graduate'
                  value='Fresh Graduate/Post-Graduate'
                  checked={educationCareer === "Fresh Graduate/Post-Graduate"}
                  onChange={handleCheck}
                />
                {educationCareer === "Fresh Graduate/Post-Graduate" && (
                  <div style={{ paddingTop: "20px" }}>
                    <Form.Select
                      fluid
                      label='Job Type'
                      placeholder='Select a job type'
                      options={classDivisionOptions}
                      options={
                        occupationOptions &&
                        occupationOptions["jobCategory"].map((data) => ({
                          key: data,
                          text: data,
                          value: data,
                        }))
                      }
                      onChange={handleJobChange}
                    />
                  </div>
                )}
              </div>
              <hr />
              <div style={{ padding: "5px 0" }}>
                <Radio
                  name='eduCar'
                  label='Career Man/Woman'
                  value='Career Man/Woman'
                  checked={educationCareer === "Career Man/Woman"}
                  onChange={handleCheck}
                />
                {educationCareer === "Career Man/Woman" && (
                  <div style={{ paddingTop: "20px" }}>
                    <Form.Select
                      fluid
                      label='Job Type'
                      placeholder='Select a job type'
                      options={classDivisionOptions}
                      options={
                        occupationOptions &&
                        occupationOptions["jobCategory"].map((data) => ({
                          key: data,
                          text: data,
                          value: data,
                        }))
                      }
                      onChange={handleJobChange}
                    />
                  </div>
                )}
              </div>
              <hr />
              <div style={{ padding: "5px 0" }}>
                <Radio
                  name='eduCar'
                  label='Entrepreneur'
                  value='Entrepreneur'
                  checked={educationCareer === "Entrepreneur"}
                  onChange={handleCheck}
                />
                {educationCareer === "Entrepreneur" && (
                  <div style={{ paddingTop: "20px" }}>
                    <Form.Select
                      fluid
                      label='Entrepreneur'
                      placeholder='Select your type of Entrepreneur'
                      options={classDivisionOptions}
                      options={
                        occupationOptions &&
                        occupationOptions["entrepreneurCategory"].map(
                          (data) => ({
                            key: data,
                            text: data,
                            value: data,
                          })
                        )
                      }
                      onChange={handleJobChange}
                    />
                  </div>
                )}
              </div>
              <hr />
              <Radio
                name='eduCar'
                label='Senior Colleague'
                value='Senior Colleague'
                checked={educationCareer === "Senior Colleague"}
                onChange={handleCheck}
              />
            </div>

            <div style={{ paddingTop: "30px" }}>
              {!sending ? (
                <Button primary fluid>
                  Submit
                </Button>
              ) : (
                <Button loading primary fluid>
                  loading
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
