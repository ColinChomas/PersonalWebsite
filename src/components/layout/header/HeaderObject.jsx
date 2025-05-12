import './Header.css';

export default function HeaderObject({text, selected}) {
    const className = selected ? "headerObject selected" : "headerObject";

    return (
        <>
            <div className={className}>
                <h4>{text}</h4>
            </div>
        </>
    )
}