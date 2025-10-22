import React from "react";
import Chip from '@mui/material/Chip';
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
                <a href="https://github.com/YassineNefzi/interactive-story-generator" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/interactive-story-generator" target="_blank" rel="noreferrer"><h2>Odyssey.AI - AI Story Generator</h2></a>
                <p>an AI-powered interactive story generator that creates branching narratives with multiple paths and endings. Users can choose their preferred story theme, explore dynamic story nodes, and shape the storyline in real time through their decisions.</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Pydantic" className="chip" />
                    <Chip label="React" className="chip" />
                    <Chip label="FastAPI" className="chip" />
                    <Chip label="Langchain" className="chip" />
                    <Chip label="Agents" className="chip" />
                    <Chip label="Groq API" className="chip" />
                    <Chip label="Choreo" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/CodeScout" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/CodeScout" target="_blank" rel="noreferrer"><h2>CodeScout</h2></a>
                <p>CodeScout is an intelligent research agent that helps developers find the best tools for their needs. It uses AI-powered web scraping to search, analyze, and compare developer tools, libraries, and platforms automatically.</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Pydantic" className="chip" />
                    <Chip label="Langchain" className="chip" />
                    <Chip label="LangGraph" className="chip" />
                    <Chip label="Agents" className="chip" />
                    <Chip label="Web Scraping" className="chip" />
                    <Chip label="Web Search" className="chip" />
                    <Chip label="Groq API" className="chip" />
                    <Chip label="Firecrawl" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/Minerva" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/Minerva" target="_blank" rel="noreferrer"><h2>Minerva</h2></a>
                <p>Minerva is a data science AI assistant. Provided with a csv file, it will perform thorough exploratory data analysis. Moreover, you can ask it about either specific columns in your dataset or general informations</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Langchain" className="chip" />
                    <Chip label="Streamlit" className="chip" />
                    <Chip label="Exploratory Data Analysis" className="chip" />
                    <Chip label="Data Visualization" className="chip" />
                    <Chip label="Numpy" className="chip" />
                    <Chip label="Matplotlib" className="chip" />
                    <Chip label="Seaborn" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/SnakeAI" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/SnakeAI" target="_blank" rel="noreferrer"><h2>SnakeAI</h2></a>
                <p>Training a model to play snake using reinforcement learning.</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Reinforcement Learning" className="chip" />
                    <Chip label="PyGame" className="chip" />
                    <Chip label="PyTorch" className="chip" />
                    <Chip label="Agent" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/Motionless-Solutions" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Motionless-Solutions" target="_blank" rel="noreferrer"><h2>Motionless Solutions</h2></a>
                <p>A smart home surveillance system based on motion detection, face recognition and Raspberry Pi.</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Go" className="chip" />
                    <Chip label="Computer Vision" className="chip" />
                    <Chip label="Raspberry Pi" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/YassineNefzi/YaraAI" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/YaraAI" target="_blank" rel="noreferrer"><h2>YaraAI</h2></a>
                <p>Yara is a personal AI assistant designed to help the user in daily activities such as casual chatting, text and article summarization and information retrieval from PDFs.</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Langchain" className="chip" />
                    <Chip label="Langserve" className="chip" />
                    <Chip label="Agents" className="chip" />
                    <Chip label="FastAPI" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/YassineNefzi/PerroAI" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/YassineNefzi/PerroAI" target="_blank" rel="noreferrer"><h2>PerroAI</h2></a>
                <p>An AI assistant capable of helping children with speech impediments, as well as doctors or parents who want to parse PDF files (books)</p>
                <div className="project-tech">
                    <Chip label="Python" className="chip" />
                    <Chip label="Langchain" className="chip" />
                    <Chip label="FastAPI" className="chip" />
                    <Chip label="RAG" className="chip" />
                    <Chip label="Docker" className="chip" />
                    <Chip label="Git/Github" className="chip" />
                </div>
            </div>
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