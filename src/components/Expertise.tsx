import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBrain,
  faChartLine,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsProgramming = ["Python", "C/C++", "Java", "JavaScript", "TypeScript"];
const labelsAI = ["LangChain", "LangGraph", "LlamaIndex", "RAG", "PyTorch", "TensorFlow"];
const labelsData = ["SQL", "PostgreSQL", "MongoDB", "NumPy", "Pandas", "Matplotlib", "Seaborn"];
const labelsDevOps = ["Git", "GitHub", "AWS (S3, Athena)", "Docker", "Kubernetes", "Helm", "Airflow", "Pytest", "CI/CD"];
const labelsFrameworks = ["FastAPI", "Streamlit"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Programming</h3>
            <p>
              Strong foundation in software engineering and full-stack development,
              with hands-on experience across multiple programming languages.
            </p>
            <div className="flex-chips">
              {labelsProgramming.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Artificial Intelligence & Machine Learning</h3>
            <p>
              Practical experience building Generative AI, LLM-based solutions,
              and computer vision systems for real-world applications.
            </p>
            <div className="flex-chips">
              {labelsAI.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3>Data & Analytics</h3>
            <p>
              Skilled in data engineering, exploratory data analysis, and visualization
              using modern data tools and libraries.
            </p>
            <div className="flex-chips">
              {labelsData.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Cloud</h3>
            <p>
              Experienced with deploying and scaling applications on the cloud,
              using containerization, orchestration, and CI/CD best practices.
            </p>
            <div className="flex-chips">
              {labelsDevOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>Frameworks & Tools</h3>
            <p>
              Leveraging modern frameworks to rapidly prototype, deploy,
              and scale data-driven and AI applications.
            </p>
            <div className="flex-chips">
              {labelsFrameworks.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
