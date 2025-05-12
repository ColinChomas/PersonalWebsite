import './Header.css';
import HeaderObject from './HeaderObject';

export default function Header() {

    return (
        <>
            <div className="header">
                <HeaderObject text="Home" selected={false}/>
                <HeaderObject text="About" selected={true}/>
                <HeaderObject text="Portfolio" selected={false}/>
                <HeaderObject text="Resume" selected={false}/>
            </div>
        </>
    )
}   