import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className="App">
      <AnimatedBackground />
        <div className={`main-container dark-mode`}>

            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
            </FadeIn>
            <Footer />
        </div>
    </div>
    );
}

export default App;