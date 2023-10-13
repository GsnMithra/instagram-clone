import './HomePage.css';
import InstagramLogo from '../Resources/instagramLogo.jpg'

import HomeIcon from '../Resources/paneInstagramMain/homeInstagram.png'

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
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Home</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
