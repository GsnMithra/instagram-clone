import './LoginPage.css';

import FacebookIcon from '../Resources/facebookIcon.png';
import Logo from '../Resources/instagramLogo.jpg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import InputBox from '../InputBox/InputBox';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';

import ImageA from '../Resources/instagramMain.png'
import ImageB from '../Resources/instagramMain2.png'
import ImageC from '../Resources/instagramMain3.png'
import AppStore from '../Resources/appStore.png';
import PlayStore from '../Resources/googlePlay.png';

function LoginPage () {
    const navigate = useNavigate ();
    const [user, setUser] = useState ('')
    const [pass, setPass] = useState ('')
    const [wrong, setVisible] = useState (false)

    const handleChangeUser = (user) => {
        setUser (user.target.value);
    }

    const handleChangePass = (pass) => {
        setPass (pass.target.value);
    }

    const login = () => {
        const creds = {
            username: user,
            password: pass
        };

        axios.post ('http://localhost:4000/login', creds)
            .then ((res) => {
                const reply = res.data;
                if (!reply.exists | !reply.credentials)
                    setVisible (true);
                if (reply.exists && reply.credentials)
                    navigate ('/');
            }).catch ((e) => {
                console.error (e)
            })
    }

    return (
        <div className='LoginPage'>
            <div className='pictureView'>
                <div className='imageX'>
                    <img src={ImageA} className="fade-image" alt=''></img>
                    <img src={ImageB} className="fade-image" alt=''></img>
                    <img src={ImageC} className="fade-image" alt=''></img>
                </div>
            </div>
            <div className='verticalStack'>
                <div className='loginPrompt'>
                    <div className='image'>
                        <img src={Logo} id='logoImage' alt=''></img>
                    </div>
                    <div className='loginInput'>
                        <InputBox 
                            placeHolder='Phone number, username, or email' 
                            type='text'
                            value={user}
                            onChange={handleChangeUser}
                            />
                        <InputBox 
                            placeHolder='Password'
                            type='password'
                            value={pass}
                            onChange={handleChangePass}
                            />
                    </div>
                    <div onClick={login} id='loginButton'>
                        <Button value='Log in' />
                    </div>
                    <div className='lineSeperator'>
                        <hr id='leftLine'></hr>
                        <span id='orText'>OR</span>
                        <hr id='rightLine'></hr>
                    </div>
                    <div className='facebookLogin'>
                        <img src={FacebookIcon} alt=''></img>
                        <span id='faceLogin'>Log in with Facebook</span>
                    </div>
                    {wrong && <div id='wrongCredentials'>
                        <span>Sorry, your password was incorrect. Please double-check your password.</span>
                    </div>}
                    <div className='forgotPassword'>
                        <span>Forgot password?</span>
                    </div>
                </div>
                <div className='createAccount'>
                    <span id='create'>Don't have an account?</span>
                    <a href='/accounts/emailsignup'><span id='signup'>Sign up</span></a>
                </div>
                <div className='mobileAppliction'>
                    <span id='getApp'>Get the app.</span>
                    <div className='iosAndroid'>
                        <img src={AppStore} id='ios' alt=''></img>
                        <img src={PlayStore} id='android' alt=''></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;