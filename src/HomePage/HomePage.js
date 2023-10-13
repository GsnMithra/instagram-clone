import './HomePage.css';
import InstagramLogo from '../Resources/instagramLogo.jpg'

import HomeIcon from '../Resources/paneInstagramMain/homeInstagram.png'
import NotifyIcon from '../Resources/paneInstagramMain/notifyInstagram.png';
import SearchIcon from '../Resources/paneInstagramMain/searchInstagram.png';
import CreateIcon from '../Resources/paneInstagramMain/createInstagram.png';

function HomePage () {
    return (
        <div className='HomePage'>
            <div className='mainContent'>
                <div className='hamburgerMenu'>
                    <div className='logoArea'>
                        <img src={InstagramLogo} id='instaLogo' alt=''></img>
                    </div>
                    <div className='menuButtons'>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Home</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={SearchIcon} id='homeButton' alt=''></img>
                                <span>Search</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Explore</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Reels</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Messages</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={NotifyIcon} id='homeButton' alt=''></img>
                                <span>Notifications</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={CreateIcon} id='homeButton' alt=''></img>
                                <span>Create</span>
                            </div>
                        </div>
                        <div id='buttons'>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Profile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
