import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2025 – Jul 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Generative AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Wooclap · Paris, France</h4>
            <p>
              Built a security chatbot with LlamaIndex & hybrid retrieval, deployed scalable app with Docker/Kubernetes/AWS,
              created Streamlit UI for real-time Q&A, and automated feedback pipelines with Airflow.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 – Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Avidea · Tunis, Tunisia</h4>
            <p>
              Extracted and processed data from PostgreSQL, performed exploratory data analysis, visualized anomalies,
              and applied unsupervised learning techniques for fraud detection.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Generative AI Engineer (Part-Time)</h3>
            <h4 className="vertical-timeline-element-subtitle">Perro Solutions · Tunis, Tunisia</h4>
            <p>
              Built an AI companion with LangChain & RAG for speech therapy, developed FastAPI endpoints,
              and deployed system with Docker and Git/GitHub.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 – Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Technozor · Tunis, Tunisia</h4>
            <p>
              Built a real-time computer vision system to detect diseased plants and improved diagnostic accuracy
              with custom image processing pipelines.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
