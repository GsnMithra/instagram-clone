import './InputBox.css';
import { useState } from 'react';

function InputBox ({ placeHolder, type }) {
    const [username, setUsername] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused (true);
    }

    const handleUsernameChange = (event) => {
        setUsername (event.target.value);
    }

    const handleInputBlur = () => {
        setIsInputFocused (username !== '');
    };

    return (
        <input
            type={type}
            id="username"
            className='customized-input'
            value={username}
            onChange={handleUsernameChange}
            placeholder={placeHolder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
        />
    );
}

export default InputBox;