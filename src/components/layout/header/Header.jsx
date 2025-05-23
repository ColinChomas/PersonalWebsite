import './Header.css';
import HeaderObject from './HeaderObject.jsx';

export default function Header({ currentPage }) {

    return (
        <>
            <div className="header">
                <HeaderObject text="Home" selected={"Home" === currentPage} destination=""/>
                <HeaderObject text="About" selected={"About" === currentPage} destination="about-me"/>
                <HeaderObject text="Portfolio" selected={"Portfolio" === currentPage} destination="portfolio"/>
                <HeaderObject text="Resume" selected={"Resume" === currentPage} destination="resume"/>
                <HeaderObject text="Contact Me" selected={"Contact" === currentPage} destination="contact-me"/>
            </div>
            <hr/>
        </>
    )
}   