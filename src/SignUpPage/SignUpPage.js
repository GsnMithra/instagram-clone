import './SignUpPage.css';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InstagramLogo from '../Resources/instagramLogo.jpg';
import FacebookIcon from '../Resources/facebookIconTransparent.png';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import AppStore from '../Resources/appStore.png';
import PlayStore from '../Resources/googlePlay.png';
import Birthday from '../Resources/birthdayIcon.png';
import DateOfBirth from '../DateOfBirth/DateOfBirth';

function SignUpPage () {
    const navigate = useNavigate ();
    const [birthdayPromptVisible, setBirthday] = useState (false)

    const toggleBirthday = () => {
        setBirthday (!birthdayPromptVisible)
    }
    
    const [emailornumber, setEmailNumber] = useState ('')
    const [fullname, setFullName] = useState ('')
    const [username, setUserName] = useState ('')
    const [password, setPassword] = useState ('')
    
    const [month, monthChange] = useState (-1)
    const [date, dateChange] = useState (-1)
    const [year, yearChange] = useState (-1)

    const handleChangeNumber = (change) => {
        setEmailNumber (change.target.value)
    }

    const handleChangeName = (change) => {
        setFullName (change.target.value)
    }

    const handleChangeUser = (change) => {
        setUserName (change.target.value)
    }
    
    const handleChangePass = (change) => {
        setPassword (change.target.value)
    }
 
    const register = () => {
        const details = {
            mailornum: emailornumber,
            fullname: fullname,
            username: username,
            password: password,
            dateofbirth: {
                month: month,
                date: date,
                year: year
            }
        };

        axios.post ('http://localhost:4000/register', details)
            .then ((res) => {
                console.log (res.body);
                navigate ('/')
            }).catch ((e) => {
                console.error (e)
            })
    }

    return (
        <div className='SignUpPage'>
            <div className='verticalStack'>
                <div className='mainWindow' style={birthdayPromptVisible ? { paddingRight: '40px', paddingLeft: '40px', paddingTop: '11px', paddingBottom: '29px' } : {}}>
                    {birthdayPromptVisible && <>
                        <div className='birthdayPrompt'>
                            <img src={Birthday} alt='' id='birthdayIcon'></img>
                            <span id='birthdayHeading'>Add Your Birthday</span>
                            <div className='headingText'>
                                <span id='headingText'>This won't be a part of your public profile.</span>
                                <a href='https://help.instagram.com/155833707900388'><span id='headingTextLink'>Why do I need to provide my birthday?</span></a>
                            </div>
                            <DateOfBirth 
                                monthSet={monthChange}
                                dateSet={dateChange}
                                yearSet={yearChange}
                            />
                        </div>
                        <div className='textArea'>
                            <span id='mandatoryText'>
                                You need to enter the date you were born
                            </span>
                            <span id='duhText'>
                                Use your own birthday, even if this account is for a business, a pet, or something else
                            </span>
                        </div>
                        <div id="finalize">
                            <div onClick={register}>
                                <Button value='Next' />
                            </div>
                            <div onClick={toggleBirthday}>
                                <span id='goback'>Go Back</span>
                            </div>
                        </div>
                    </>}
                    {!birthdayPromptVisible && <><div id='imageHolder'>
                        <img src={InstagramLogo} id='logo' alt=''></img>
                    </div><div id='sometext'>
                            <span id='text'>Sign up to see photos and videos from your friends.</span>
                        </div><div className='facebookLogin'>
                            <div className='Button'>
                                <img src={FacebookIcon} alt='' id='facebookicon'></img>
                                <span>Log in with Facebook</span>
                            </div>
                        </div><div className='lineSeperator'>
                            <hr id='leftLine'></hr>
                            <span id='orText'>OR</span>
                            <hr id='rightLine'></hr>
                        </div><div className='inputPrompts'>
                            <InputBox
                                placeHolder='Mobile Number or Email'
                                type='text'
                                value={emailornumber}
                                onChange={handleChangeNumber} />
                            <InputBox
                                placeHolder='Full Name'
                                type='text'
                                value={fullname}
                                onChange={handleChangeName} />
                            <InputBox
                                placeHolder='Username'
                                type='text'
                                value={username}
                                onChange={handleChangeUser} />
                            <InputBox
                                placeHolder='Password'
                                type='password'
                                value={password}
                                onChange={handleChangePass} />
                        </div><div className='eula'>
                            <span id='eulaAbove'>
                                People who use our service may have uploaded your contact information to Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628' target='blank' id='learn'>Learn More</a>
                            </span>
                            <span id='eulaBelow'>
                                By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US' target='blank'>Terms</a> , <a href='https://www.facebook.com/privacy/policy' target='blank' id='privacy'>Privacy Policy</a> and <a href='https://www.instagram.com/legal/cookies' id='cookies'>Cookies Policy</a> .
                            </span>
                        </div><div id='signupButton' onClick={toggleBirthday}>
                            <Button value='Sign up' />
                        </div></>}
                </div>
                <div className='createAccount'>
                    <span id='create'>Have an account?</span>
                    <a href='/'><span id='signup'>Log in</span></a>
                </div>
                <div className='mobileAppliction'>
                    <span id='getApp'>Get the app.</span>
                    <div className='iosAndroid'>
                        <img src={AppStore} id='ios' alt=''></img>
                        <img src={PlayStore} id='android' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;