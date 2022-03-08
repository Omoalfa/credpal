import './index.css';

const Button = ({ type='primary', onClick, disabled, text }) => {
    return (
        <button className={`d-button ${type}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;
