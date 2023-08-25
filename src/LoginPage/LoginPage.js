import './LoginPage.css';
import { useState } from 'react';
import Logo from '../Resources/instagramLogo.jpg';

function LoginPage () {
    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername (event.target.value);
    }

    return (
        <div className='LoginPage'>
            <div className='loginPrompt'>
                <div className='image'>
                    {/* <Link to='/'> */}
                        <img src={Logo} id='logoImage' alt='Instagram'></img>
                    {/* </Link> */}
                </div>
                <div className='loginInput'>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
            </div>
            <div className='pictureView'>

            </div>
        </div>
    );
}

export default LoginPage;