import './LoginPage.css';
import Logo from '../Resources/instagramLogo.jpg';
import InputBox from '../InputBox/InputBox';
import Footer from '../Footer/Footer';
import ImageA from '../Resources/instagramMain.png'
import ImageB from '../Resources/instagramMain2.png'
import ImageC from '../Resources/instagramMain3.png'

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
                <div className='lineSeperator'>
                    <hr id='leftLine'></hr>
                    <p id='orText'>OR</p>
                    <hr id='rightLine'></hr>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;