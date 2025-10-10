import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/YassineNefzi/Minerva" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/Minerva" target="_blank" rel="noreferrer"><h2>Minerva</h2></a>
                <p>Minerva is a data science AI assistant. Provided with a csv file, it will perform thorough exploratory data analysis. Moreover, you can ask it about either specific columns in your dataset or general informations</p>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/YaraAI" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/YaraAI" target="_blank" rel="noreferrer"><h2>YaraAI</h2></a>
                <p>Yara is a personal AI assistant designed to help the user in daily activities such as casual chatting, text and article summarization and information retrieval from PDFs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/SnakeAI" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/SnakeAI" target="_blank" rel="noreferrer"><h2>SnakeAI</h2></a>
                <p>Training a model to play snake using reinforcement learning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/PerroAI" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/PerroAI" target="_blank" rel="noreferrer"><h2>PerroAI</h2></a>
                <p>An AI assistant capable of helping children with speech impediments, as well as doctors or parents who want to parse PDF files (books)</p>
            </div>
            <div className="project">
                <a href="https://github.com/Motionless-Solutions" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Motionless-Solutions" target="_blank" rel="noreferrer"><h2>Motionless Solutions</h2></a>
                <p>A smart home surveillance system based on motion detection, face recognition and Raspberry Pi.</p>
            </div>
            {/* <div className="project">
                <a href="https://drive.google.com/file/d/1_9XuyOpnaoLRMgqSIe2JaXV-mPOcCSa0/view" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1_9XuyOpnaoLRMgqSIe2JaXV-mPOcCSa0/view" target="_blank" rel="noreferrer"><h2>Vision Foot</h2></a>
                <p>An intelligent blind-football coach.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Vision Foot</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://quickformcv.com/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://quickformcv.com/" target="_blank" rel="noreferrer"><h2>QuickFormCV</h2></a>
                <p>An AI-powered resume builder that helps users create professional resumes in minutes, offering expert templates, real-time previews, and intelligent writing suggestions.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;