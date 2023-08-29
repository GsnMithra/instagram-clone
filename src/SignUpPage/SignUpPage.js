import './SignUpPage.css';

import InstagramLogo from '../Resources/instagramLogo.jpg';
import FacebookIcon from '../Resources/facebookIconTransparent.png';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import AppStore from '../Resources/appStore.png';
import PlayStore from '../Resources/googlePlay.png';

function SignUpPage () {
    return (
        <div className='SignUpPage'>
            <div className='verticalStack'>
                <div className='mainWindow'>
                    <div id='imageHolder'>
                        <img src={InstagramLogo} id='logo' alt=''></img>
                    </div>
                    <div id='sometext'>
                        <span id='text'>Sign up to see photos and videos from your friends.</span>
                    </div>
                    <div className='facebookLogin'>
                        <div className='Button'>
                            <img src={FacebookIcon} alt='' id='facebookicon'></img>
                            <span>Log in with Facebook</span>
                        </div>
                    </div>
                    <div className='lineSeperator'>
                        <hr id='leftLine'></hr>
                        <span id='orText'>OR</span>
                        <hr id='rightLine'></hr>
                    </div>
                    <div className='inputPrompts'>
                        <InputBox 
                            placeHolder='Mobile Number or Email'
                            type='text'
                            // value={}
                            // onChange={}
                        />
                        <InputBox 
                            placeHolder='Full Name'
                            type='text'
                            // value={}
                            // onChange={}
                        />
                        <InputBox 
                            placeHolder='Username'
                            type='text'
                            // value={}
                            // onChange={}
                        />
                        <InputBox 
                            placeHolder='Password'
                            type='password'
                            // value={}
                            // onChange={}
                        />
                    </div>
                    <div className='eula'>
                        <span id='eulaAbove'>
                            People who use our service may have uploaded your contact information to Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628' target='blank'>Learn More</a>
                        </span>
                        <span id='eulaBelow'>
                            By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US' target='blank'>Terms</a> , <a href='https://www.facebook.com/privacy/policy' target='blank'>Privacy Policy</a> and <a href='https://www.instagram.com/legal/cookies'>Cookies Policy</a> .
                        </span>
                    </div>
                    <div id='signupButton'>
                        <Button value='Sign up'/>
                    </div>
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