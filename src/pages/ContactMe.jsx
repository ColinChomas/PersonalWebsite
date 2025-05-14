import './ContactMe.css';
import Header from '../components/layout/header/Header.jsx';
import Footer from '../components/layout/footer/Footer.jsx';
import getData from '../utils/GetData.js';
import React from 'react';


export default function ContactMe() {

    const [data, setData] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        const url = `${import.meta.env.BASE_URL}src/assets/json/ContactMe.json`;
        getData(url)
            .then((json) => {
                setData(json);
                setLoaded(true);
            }
        )
    }, []);
    if (!loaded){
        return (
            <div className="loading">
            </div>
        )
    }
    return (
        <>
            <Header currentPage="Contact"/>
            <div className="contactMe-container">
                <h2>Contact Me</h2>
                <div className="contactMe-items">
                    {data.map((object, index) => (
                        <div key={index} className="contactMe-item">
                            <h3>{object.title}: <a href={object.link} target="_blank">{object.text}</a></h3>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}
