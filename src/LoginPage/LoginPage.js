import './LoginPage.css';

import FacebookIcon from '../Resources/facebookIcon.png';
import Logo from '../Resources/instagramLogo.jpg';

import InputBox from '../InputBox/InputBox';
import Footer from '../Footer/Footer';

import ImageA from '../Resources/instagramMain.png'
import ImageB from '../Resources/instagramMain2.png'
import ImageC from '../Resources/instagramMain3.png'
import AppStore from '../Resources/appStore.png';
import PlayStore from '../Resources/googlePlay.png';

function LoginPage () {
    const handleClick = (event) => {
        event.preventDefault ();
    };

    return (
        <div className='LoginPage'>
            <div className='pictureView'>
                <div className='imageX'>
                    <img src={ImageA} className="fade-image"></img>
                    <img src={ImageB} className="fade-image"></img>
                    <img src={ImageC} className="fade-image"></img>
                </div>
            </div>
            <div className='verticalStack'>
                <div className='loginPrompt'>
                    <div className='image'>
                        {/* <Link to='/'> */}
                        <a href='#' onClick={handleClick}>
                            <img src={Logo} id='logoImage'></img>
                        </a>
                        {/* </Link> */}
                    </div>
                    <div className='loginInput'>
                        <InputBox placeHolder='Phone number, username, or email' type='text'/>
                        <InputBox placeHolder='Password' type='password'/>
                    </div>
                    <div className='loginButton'>
                        <span>Log in</span>
                    </div>
                    <div className='lineSeperator'>
                        <hr id='leftLine'></hr>
                        <span id='orText'>OR</span>
                        <hr id='rightLine'></hr>
                    </div>
                    <div className='facebookLogin'>
                        <img src={FacebookIcon}></img>
                        <span id='faceLogin'>Log in with Facebook</span>
                    </div>
                    <div className='forgotPassword'>
                        <span>Forgot password?</span>
                    </div>
                </div>
                <div className='createAccount'>
                    <span id='create'>Don't have an account?</span>
                    <span id='signup'>Sign up</span>
                </div>
                <div className='mobileAppliction'>
                    <span id='getApp'>Get the app.</span>
                    <div className='iosAndroid'>
                        <img src={AppStore} id='ios'></img>
                        <img src={PlayStore} id='android'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;