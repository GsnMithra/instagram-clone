import './LoginPage.css';
import Logo from '../Resources/instagramLogo.jpg';
import InputBox from '../InputBox/InputBox';
import Footer from '../Footer/Footer';

function LoginPage () {
    const handleClick = (event) => {
        event.preventDefault ();
    };

    return (
        <div className='LoginPage'>
            <div className='loginPrompt'>
                <div className='image'>
                    {/* <Link to='/'> */}
                    <a href='#' onClick={handleClick}>
                        <img src={Logo} id='logoImage'></img>
                    </a>
                    {/* </Link> */}
                </div>
                <div className='loginInput'>
                    <InputBox placeHolder='Phone number, username, or email'/>
                    <InputBox placeHolder='Password'/>
                </div>
                <div className='lineSeperator'>
                    <hr id='leftLine'></hr>
                    <p id='orText'>OR</p>
                    <hr id='rightLine'></hr>
                </div>
            </div>
            <div className='pictureView'>

            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;