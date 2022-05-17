import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <div id="contact" className="container contact-container">
        <h1>Contact me</h1>
        <div className="contact-links">
          <a href="#contact" className="contact">
            <AiOutlineWhatsApp className="icon" />
            <h2>
              whatsapp <span>+91 913 076 7281</span>
            </h2>
          </a>
          <a
            href="https://github.com/PujaGKundu"
            rel="noreferrer"
            target="_blank"
            className="contact"
          >
            <AiOutlineGithub className="icon" />
            <h2>
              github <span>PujaGKundu</span>
            </h2>
          </a>
          <a
            href="mailto:pujakundu100@gmail.com"
            className="contact"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail className="icon" />
            <h2>
              mail <span>pujakundu100@gmail.com</span>
            </h2>
          </a>
          <a
            href="https://twitter.com/PujaKundu7"
            rel="noreferrer"
            target="_blank"
            className="contact"
          >
            <AiOutlineTwitter className="icon" />
            <h2>
              twitter <span>@PujaGKundu7</span>
            </h2>
          </a>
          <a
            href="https://www.linkedin.com/in/puja-kundu-aaa113131"
            className="contact"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin className="icon" />
            <h2>
              linkedin <span>Puja Kundu</span>
            </h2>
          </a>
        </div>
      </div>
    </>
  );
}
