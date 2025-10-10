import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="contact-info">
            <div className="contact-item">
              <EmailIcon />
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:ynyassine7@gmail.com">ynyassine7@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <PhoneIcon />
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+21626488599">+216 26 488 599</a>
              </div>
            </div>

            <div className="contact-item">
              <LinkedInIcon />
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/yassine-nefzi" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yassine-nefzi
                </a>
              </div>
            </div>

            <div className="contact-item">
              <GitHubIcon />
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/YassineNefzi" target="_blank" rel="noopener noreferrer">
                  github.com/YassineNefzi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;