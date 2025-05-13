import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import './Portfolio.css';


export default function Portfolio() {

    return (
        <>
            <Header currentPage="Portfolio"/>
            <div className="container-portfolio">
                <h1>My Portfolio</h1>
                <h2>RIT Course Projects</h2>
                <div className="portfolio-section">
                    <h3>ISTE 340 - Client Programming</h3>
                    <div className="portfolio-item">
                        <h4><a href="https://people.rit.edu/cwc6640/ISTE340/project2/dist/" target="_blank">Project 2</a></h4>
                        <div className="portfolio-item-content">
                            <div className="portfolio-images">
                                <img src="src\assets\screenshots\340\project2\homepage.png" alt="Project 2" />
                            </div>
                            <p>
                                Goal of the project:
                                <br/> Create a web page using React.js that displays the data found at the RIT ischool api. 
                                <br/> Learn how to utilze existing react components and how to create your own react components. 
                                <br/> Achieved Grade: 93/100
                                <br/> <a href="https://github.com/ColinChomas/iste340_p2" target="_blank">Github Repository</a>
                            </p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <h4>Project 3</h4>
                        <div className="portfolio-item-content">
                            <div className="portfolio-images">
                                <img src="src\assets\screenshots\340\project3\home.png" alt="Project 3 Home page" />
                                <img src="src\assets\screenshots\340\project3\table.png" alt="Project 3 table" />
                                <img src="src\assets\screenshots\340\project3\tooltip.png" alt="Project 3 tool tip" />
                            </div>
                            <p>
                                Goal of the project:
                                <br/> Recreate the RIT ischool account using C# Model View Controller.
                                <br/> Learn how to use C# and ASP.NET to create a web application.
                                <br/> Achieved Grade: 88/100
                                <br/> <a href="https://github.com/ColinChomas/iste340_p3" target="_blank">Github Repository</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}