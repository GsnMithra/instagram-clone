import './HomePage.css';
import InstagramLogo from '../Resources/instagramLogo.jpg'
import Icons from '../Resources/extraImages.png'

function HomePage () {
    return (
        <div className='HomePage'>
            <div className='mainContent'>
                <div className='hamburgerMenu'>
                    <div className='logoArea'>
                        <img src={InstagramLogo} id='instaLogo' alt=''></img>
                    </div>
                    <div className='menuButtons'>
                        <div id='button'>
                            <img src={Icons} id='homeButton' alt=''></img>
                            <span>Home</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
