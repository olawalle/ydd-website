import React, { useState, useEffect } from 'react';
import { Form, Dropdown, Checkbox, Button, Icon, Label, Menu, Input, Radio } from 'semantic-ui-react';
import axios from 'axios';

const classDivisionOptions = [
    {
        key: 'Science',
        text: 'Science',
        value: 'Science'
    },
    {
        key: 'Art',
        text: 'Art',
        value: 'Art'
    },
    {
        key: 'Commercial',
        text: 'Commercial',
        value: 'Commercial'
    }
];


const Register = () => {
    let [hubOptions, setHubOptions] = useState(null);
    let [occupationOptions, setOccupationOptions] = useState(null);
    let [hub, setHub] = useState('');
    let [accommodation, setAccommodation] = useState(false);
    let [educationCareer, setEducationCareer] = useState('');
    let [classDivision, setClassDivision] = useState('');
    let [faculty, setFaculty] = useState('');
    let [job, setJob] = useState('');

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://91.235.129.103:7200/api/v1/config/resources/virtual-hubs'
        })
        .then(res => {
            setHubOptions(res.data.data.hubs);
        })
        .catch(err => {
            throw new Error (err);
        });
    }, []);
    
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://91.235.129.103:7200/api/v1/config/resources/occupation'
        })
        .then(res => {
            setOccupationOptions(res.data.data);
        })
        .catch(err => {
            throw new Error (err);
        });
    }, []);

    const handleFieldChange = (e, val) => {
        setHub(val.value);
    };

    const handleCheckAccommodation = (e, val) => {
        setAccommodation(val.checked);
    } 

    const handleCheck = (e, val) => {
        setEducationCareer(val.value);
    }

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
        let data = {
            hub: hub,
            accommodation: accommodation,
            educationCareer: educationCareer,
            classDivision: classDivision,
            faculty: faculty,
            job: job 
        };

        console.log(data);
    };
    
    return (
        <div className="area">
            <h3 style={{paddingBottom: '20px', textAlign: 'center'}}>Register for 2020 International Youth Camp
            <br/><span style={{fontSize: '0.6em'}}>(Check "I need Accommodation" if you want to be on premise)</span>
            </h3>
            
            <br/><br/>
            
            <Form onSubmit={handleSubmit}>
                <div style={{paddingBottom: '40px', float: 'right', marginRight: '30px'}}>
                    <Menu compact>
                        <Menu.Item as='a'>
                        <Icon name='mail' /> Hub Capacity
                        <Label color='red' floating>
                            {hubOptions && hub ? hubOptions.find(data => data.district === hub).capacity : 0}
                        </Label>
                        </Menu.Item>
                        <Menu.Item as='a'>
                        <Icon name='users' /> Accommodation
                        <Label color='teal' floating>
                            {hubOptions && hub ? hubOptions.find(data => data.district === hub).accommodation.male : 0}
                        </Label>
                        </Menu.Item>
                    </Menu>
                </div>
                
                <div style={{paddingTop: '30px'}}>
                <Form.Select
                    fluid
                    label='Hub'
                    options={hubOptions && hubOptions.map(data => ({key: data.district, text: data.district, value: data.district}))}
                    placeholder='Select Hub'
                    onChange={handleFieldChange}
                />
                </div>

                <Checkbox style={{padding: '20px 20px', marginLeft: '-20px'}} label='I Need Accommodation' checked={accommodation} onChange={handleCheckAccommodation} />
        
                <div style={{paddingBottom: '10px'}}>
                    <h5>Choose Your Education/Career</h5>
                </div>
                <div>
                    <div style={{padding: '5px 0'}}>
                        <Radio name='eduCar' label='Secondary Student' value='Secondary Student' checked={educationCareer === 'Secondary Student'} onChange={handleCheck} />
                        {educationCareer === 'Secondary Student' &&
                            <Form.Group widths='equal' style={{paddingTop: '20px'}}>
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
                                    options={classDivision ? (occupationOptions[`${classDivision.toLowerCase()}Options`]).map(data => ({key: data, text: data, value: data})) : [{key: '1', text: 'You need to select a class'}]}
                                    placeholder='Select Faculty'
                                    onChange={handleFacultyChange}
                                />
                            </Form.Group>
                        }
                    </div>
                    <hr/>
                    <div style={{padding: '5px 0'}}>
                        <Radio name='eduCar' label='SS3 And Post-Secondary School Students' value='SS3 And Post-Secondary School Students' checked={educationCareer === 'SS3 And Post-Secondary School Students'} onChange={handleCheck} />
                        {educationCareer === 'SS3 And Post-Secondary School Students' &&
                            <Form.Group widths='equal' style={{paddingTop: '20px'}}>
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
                                    options={classDivision ? (occupationOptions[`${classDivision.toLowerCase()}Options`]).map(data => ({key: data, text: data, value: data})) : [{key: '1', text: 'You need to select a class'}]}
                                    placeholder='Select Faculty'
                                    onChange={handleFacultyChange}
                                />
                            </Form.Group>
                        }
                    </div>
                    <hr/>
                    <div style={{padding: '5px 0'}}>
                        <Radio name='eduCar' label='Undergraduate' value='Undergraduate' checked={educationCareer === 'Undergraduate'} onChange={handleCheck}/>
                        {educationCareer === 'Undergraduate' &&
                            <div style={{paddingTop: '20px'}}>
                                <Form.Select
                                    fluid
                                    label='Job Type'
                                    placeholder='Select a job type'
                                    options={classDivisionOptions}
                                    options={occupationOptions && (occupationOptions['jobCategory']).map(data => ({key: data, text: data, value: data}))}
                                    onChange={handleJobChange}
                                />
                            </div>
                        }
                    </div>
                    <hr/>
                    <div style={{padding: '5px 0'}}>
                        <Radio name='eduCar' label='Fresh Graduate/Post-Graduate' value='Fresh Graduate/Post-Graduate' checked={educationCareer === 'Fresh Graduate/Post-Graduate'} onChange={handleCheck} />
                        {educationCareer === 'Fresh Graduate/Post-Graduate' &&
                            <div style={{paddingTop: '20px'}}>
                                <Form.Select
                                    fluid
                                    label='Job Type'
                                    placeholder='Select a job type'
                                    options={classDivisionOptions}
                                    options={occupationOptions && (occupationOptions['jobCategory']).map(data => ({key: data, text: data, value: data}))}
                                    onChange={handleJobChange}
                                />
                            </div>
                        }
                    </div>
                    <hr/>
                    <div style={{padding: '5px 0'}}>
                        <Radio name='eduCar' label='Career Man/Woman' value='Career Man/Woman' checked={educationCareer === 'Career Man/Woman'} onChange={handleCheck} />
                        {educationCareer === 'Career Man/Woman' &&
                            <div style={{paddingTop: '20px'}}>
                                <Form.Select
                                    fluid
                                    label='Job Type'
                                    placeholder='Select a job type'
                                    options={classDivisionOptions}
                                    options={occupationOptions && (occupationOptions['jobCategory']).map(data => ({key: data, text: data, value: data}))}
                                    onChange={handleJobChange}
                                /> 
                            </div>
                        }
                    </div>
                    <hr/>
                    <div style={{padding: '5px 0'}}>
                    <Radio name='eduCar' label='Entrepreneur' value='Entrepreneur' checked={educationCareer === 'Entrepreneur'} onChange={handleCheck} />
                        {educationCareer === 'Entrepreneur' &&
                            <div style={{paddingTop: '20px'}}>
                                <Form.Select
                                    fluid
                                    label='Entrepreneur'
                                    placeholder='Select your type of Entrepreneur'
                                    options={classDivisionOptions}
                                    options={occupationOptions && (occupationOptions['entrepreneurCategory']).map(data => ({key: data, text: data, value: data}))}
                                    onChange={handleJobChange}
                                />
                            </div>
                        }
                    </div>
                    <hr/>
                    <Radio name='eduCar' label='Senior Colleague' value='Senior Colleague' checked={educationCareer === 'Senior Colleague'} onChange={handleCheck} />
                </div>
                
                <div style={{paddingTop: '30px'}}>
                    <Button primary fluid>Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;