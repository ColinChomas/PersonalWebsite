import React from 'react';
import './AboutMe.css';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import TextBlock from '../components/common/TextBlock';
import getData from '../utils/GetData';

function AboutMe() {
    const [loaded, setLoaded] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData('src/assets/json/AboutMe.json')
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
                <h1>Loading...</h1>
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