import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import C_Logo from "../assets/img/C_Logo.png";
import logo192 from "../assets/img/logo192.png";
import C from "../assets/img/C++.png";
import html from "../assets/img/html.png";
import js from "../assets/img/js.png";
import python from "../assets/img/python.png";
import css from "../assets/img/css.png";
import mongo from "../assets/img/mongo.png";
import dj from "../assets/img/dj.png";
import sql from "../assets/img/sql.png";
import fb from "../assets/img/fb.png";
import ex from "../assets/img/express.png";
import node from "../assets/img/node.png";
import dbms from "../assets/img/dbms.png";
import figma from "../assets/img/figma.png";
import git from "../assets/img/git.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Programming Languages, Tools , etc that I currently know about:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={C} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={C_Logo} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={ex} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={logo192} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javacript</h5>
                            </div>
                            <div className="item">
                                <img src={dj} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={fb} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={dbms} alt="Image" />
                                <h5>DBMS</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
