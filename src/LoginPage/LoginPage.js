import './LoginPage.css';
import Logo from '../Resources/instagramLogo.jpg';
import InputBox from '../InputBox/InputBox';

function LoginPage () {
    return (
        <div className='LoginPage'>
            <div className='loginPrompt'>
                <div className='image'>
                    {/* <Link to='/'> */}
                        <img src={Logo} id='logoImage' alt='Instagram'></img>
                    {/* </Link> */}
                </div>
                <div className='loginInput'>
                    <InputBox placeHolder='Phone number, username, or email'/>
                    <InputBox placeHolder='Password'/>
                </div>
            </div>
            <div className='pictureView'>

            </div>
        </div>
    );
}

export default LoginPage;