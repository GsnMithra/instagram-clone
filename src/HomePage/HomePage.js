import './HomePage.css';

import { useState } from 'react';
import Post from '../Post/Post';

import CompletedFeed from '../Resources/feedCompleted.png';
import InstagramLogo from '../Resources/instagramLogo.jpg'
import HomeIcon from '../Resources/paneInstagramMain/homeInstagram.png'
import NotifyIcon from '../Resources/paneInstagramMain/notifyInstagram.png';
import SearchIcon from '../Resources/paneInstagramMain/searchInstagram.png';
import CreateIcon from '../Resources/paneInstagramMain/createInstagram.png';

function HomePage () {
    const [pageVisible, setPageVisible] = useState ('home');

    return (
        <div className='HomePage'>
            <div className='mainContent'>
                <div className='hamburgerMenu'>
                    <div className='logoArea'>
                        <img src={InstagramLogo} id='instaLogo' alt=''></img>
                    </div>
                    <div className='menuButtons'>
                        <div id='buttons' onClick={() => {setPageVisible ('home')}}>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Home</span>
                            </div>
                        </div>
                        <div id='buttons' onClick={() => {setPageVisible ('search')}}>
                            <div id='home'>
                                <img src={SearchIcon} id='homeButton' alt=''></img>
                                <span>Search</span>
                            </div>
                        </div>
                        <div id='buttons' onClick={() => {setPageVisible ('messages')}}>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Messages</span>
                            </div>
                        </div>
                        <div id='buttons' onClick={() => {setPageVisible ('notify')}}>
                            <div id='home'>
                                <img src={NotifyIcon} id='homeButton' alt=''></img>
                                <span>Notifications</span>
                            </div>
                        </div>
                        <div id='buttons' onClick={() => {setPageVisible ('create')}}>
                            <div id='home'>
                                <img src={CreateIcon} id='homeButton' alt=''></img>
                                <span>Create</span>
                            </div>
                        </div>
                        <div id='buttons' onClick={() => {setPageVisible ('profile')}}>
                            <div id='home'>
                                <img src={HomeIcon} id='homeButton' alt=''></img>
                                <span>Profile</span>
                            </div>
                        </div>
                    </div>
                </div>
                {pageVisible === 'home' && <div className='homePage'>
                    <div className='homeMainContent'>
                        <div className='homeStories'>
                        
                        </div>
                        <div className='homeContent'>
                            <Post />
                            <div></div>
                            <Post />
                            <Post />
                            <div className='feedCompleted'>
                            <hr></hr>
                            <img 
                                src={CompletedFeed} 
                                alt=''
                                id='tick'
                                height={60}
                                width={60} 
                            />
                            <div className='caughtUp'>
                                You're All Caught Up!
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='homeSuggestions'>
                        <div className='accountInformation'>
                        </div>
                        <div className='suggestedForYou'>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default HomePage;
