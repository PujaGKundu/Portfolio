import { BsMouse } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";

export default function Footer() {
  return (
    <>
      <div id="footer" className="container footer-container">
        <h1>
          That's all
          <a href="#home">
            <h2>
              <BsMouse />- scroll up-
            </h2>
          </a>
        </h1>
        <div className="social-links">
          <a href="https://github.com/PujaGKundu">
            <TiSocialGithub className="social" />
          </a>
        </div>
      </div>
    </>
  );
}
