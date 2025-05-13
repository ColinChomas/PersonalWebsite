import { Link } from 'react-router-dom';
import './Header.css';

export default function HeaderObject({text, selected, destination}) {
    const className = selected ? "headerObject selected" : "headerObject";

    return (
        <>
            <Link
                    to={'/'+destination}
                    className={className}
            >
                <div >

                        <h4>{text}</h4>
                </div>
            </Link>
        </>
    )
}