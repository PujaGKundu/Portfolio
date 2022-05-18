import Buttons from "./Button";
import img from "./props/img2.jpg";
import { BsMouse } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div id="home" className="container home-container">
        <div className="logo">
          <img src={img} alt="Profile" />
        </div>

        <a href="#footer" className="scroll-down">
          <hr />
          <h5>Scroll Down</h5>
          <BsMouse className="scroll" />
          <hr />
        </a>
        <h2>
          <span id="about">About Me</span> <br />
          <p>
            Courteous and enthusiastic, I am interested in IT and everything in
            it's orbit. Where the front-end has caught my interest, and I would
            like to explore more in this field. As this area complements my
            studies, I am keen to gain more experience in this field. For this
            reason, I am looking for a company willing to offer me a placement
            among their developers. In return, I would offer my full commitment,
            and be a pleasant and friendly addition to your team.
          </p>
          <p>
            I am therefore currently looking for a job as a full stack developer
            or a front-end developer.
          </p>
        </h2>
        <Buttons />
      </div>
    </>
  );
}
