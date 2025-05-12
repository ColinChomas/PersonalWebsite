import './Header.css';
import HeaderObject from './HeaderObject';

export default function Header({currentPage}) {

    return (
        <>
            <div className="header">
                <HeaderObject text="Home" selected={"Home" ===currentPage}/>
                <HeaderObject text="About" selected={"About" === currentPage}/>
                <HeaderObject text="Portfolio" selected={"Portfolio" === currentPage}/>
                <HeaderObject text="Resume" selected={"Resume" === currentPage}/>
            </div>
            <hr/>
        </>
    )
}   