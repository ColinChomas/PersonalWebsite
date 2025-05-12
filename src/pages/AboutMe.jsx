import React from 'react';
import './AboutMe.css';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';

function AboutMe() {
    return (
        <>
            <Header/>
            <div className="container">
                <h1>About Me</h1>
                <p>
                    My name is Colin Chomas and I am a Full Stack Web Developer studying at the Rochester Institute of Technology. 
                    I am passionate about learning and growing my skills in web development and software engineering.
                    On this website, you can find some of my class projects and personal projects that I have worked on. 
                    As well as some of my hobbies and interests.
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default AboutMe;