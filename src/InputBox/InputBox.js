import './InputBox.css';

function InputBox ({ placeHolder, type, value, onChange }) {
    return (
        <input
            type={type}
            className='customized-input'
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
        />
    );
}

export default InputBox;