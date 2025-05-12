import './App.css';
import PrimaryButton from './components/common/buttons/primaryButton/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about-me');
  };

  const typeEffect = (element, text, delay) => {
    element.textContent = ''; // Clear existing content
    let index = 0;

    const interval = setInterval(() => {
      element.textContent = text.slice(0, index + 1); // Set the substring up to index
      index++;

      if (index === text.length) {
        clearInterval(interval); // Stop when complete
      }
    }, delay);

    return true;
  };


  useEffect(() => {
    const titleElement = document.querySelector('.intro h1');
    const titleText = "Hello, I am Colin Chomas";
    const titleText2 = "Hallo, ich heiße Colin Chomas";

    const subTitleText = "Full-Stack web development student at the Rochester Institute of Technology";
    const subTitleText2 = "Webentwicklungsstudent am Rochester Institute of Technology";
    const delay = 100;

    // Log the language properties
    console.log('navigator.language:', navigator.language);

    const isGerman = navigator.language.toLowerCase() === 'de-de' || navigator.language.toLowerCase() === 'de';
    const textToType = isGerman ? titleText2 : titleText;

    console.log(isGerman);

    typeEffect(titleElement, textToType, delay);

    const subTitleElement = document.querySelector('.intro h3');
    const subTextToType = isGerman ? subTitleText2 : subTitleText;

    typeEffect(subTitleElement, subTextToType, delay);

  }, []);


  return (
    <>
      <div class="intro">
          <h1></h1>
          <h3></h3>
          <PrimaryButton id="button1" text="About Me" inverted={false} onClick={handleNavigate} />
      </div>
    </>
  )
}

export default App
