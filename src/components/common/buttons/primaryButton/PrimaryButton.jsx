import './PrimaryButton.css';

function PrimaryButton({ text, inverted, onClick }) {
    return (
        <button className={`primary-button ${inverted ? 'inverted' : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default PrimaryButton;