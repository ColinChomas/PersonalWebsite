import React from 'react';
import './AboutMe.css';
import Header from '../components/layout/header/Header.jsx';
import Footer from '../components/layout/footer/Footer.jsx';
import TextBlock from '../components/common/TextBlock.jsx';
import getData from '../utils/GetData.js';

function AboutMe() {
    const [loaded, setLoaded] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const url = `${import.meta.env.BASE_URL}src/assets/json/AboutMe.json`;
        getData(url)
            .then((json) => {
                setData(json);
                setLoaded(true);
            }
        )
    }, []);
    // console.log(data);
    if (!loaded){
        return (
            <div className="loading">
            </div>
        )
    }
    return (
        <>
            <Header currentPage="About"/>
            <div className="container">
                <h1>About Me</h1>
                <img src="src\assets\images\ColinSquare480.jpg" alt="" className="portrait"/>
                <br/>
                {data.map((object, index) => (
                    <TextBlock key={index} object={object} className="text-block"/>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default AboutMe;