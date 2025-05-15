import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import './Resume.css';

export default function Portfolio() {

    return (
        <>
            <Header currentPage="Resume"/>
            <div className="resume-container">
                <h1>My Resume</h1>
                <embed src={`${import.meta.env.BASE_URL}assets/Colin_Chomas_Resume_2025_2.pdf`} type="application/pdf" width="100%" height="100%"/>
            </div>
            <Footer/>
        </>
    )
}
