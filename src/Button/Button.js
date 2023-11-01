import './Button.css'

function Button ({ value }) {
    return (
        <div className='Button'>
            <span>{value}</span>
        </div>
    );
}

export default Button;