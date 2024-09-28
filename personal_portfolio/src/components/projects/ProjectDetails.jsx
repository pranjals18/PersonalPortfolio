import React, { useState } from "react";
import "./projects.css";
import codeorbit_img from "../../assets/codeorbit.png";
import pizzamania_img from "../../assets/pizzamania.png";
import crypinfo_img from "../../assets/crypinfo.png";
import alumnet_img from "../../assets/alumnet.jpg";
import cgc_image from "../../assets/CGC.png";

const ProjectDetails = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="projects__container container grid">
      {/* ------------------------------------------- CGC ------------------------------------------- */}

      <div className="projects__content">
        <div>
          <img className="project-img" src={cgc_image} alt="" />
          <h3 className="projects__title">
            Career Guidance Cell
          </h3>
        </div>

        <span className="projects__button" onClick={() => toggleTab(1)}>
          View More
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </span>

        <div
          className={
            toggleState === 1
              ? "projects__modal active-modal"
              : "projects__modal"
          }
        >
          <div className="projects__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times projects__modal-close"
            ></i>

            <h3 className="projects__modal-title">Career Guidance Cell</h3>
            <p className="projects__modal-description">College Placement App</p>

            <ul className="projects__modal-projects grid">
              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Tech Stack: Next.js, Node.js, Express.js, MongoDB, JWT,
                  TypeScript, JavaScript
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Developed a placement web application to provide real-time
                  updates on company visits for recruitment.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Designed a student portal dashboard that provides real-time
                  statistical analysis of 100% of placement data, displaying the
                  total companies visited along with recent company visits.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Built a filtering system that evaluates student eligibility
                  for a company based on GPA and graduation year.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Enhanced security by using bcrypt for hashing passwords and
                  JWT (JSON Web Tokens) for secure user authentication, ensuring
                  that user data and sessions are protected.
                </p>
              </li>
            </ul>
            <div class="projects__buttons">
              <a
                href="https://cgcstudents.vercel.app"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Demo</span>
                <i class="uil uil-link"></i>
              </a>

              <a
                href="https://github.com/pranjals18/CGC-Placements"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
                <i class="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- Pizza Mania ---------------------------------------- */}

      <div className="projects__content">
        <div>
          <img className="project-img" src={pizzamania_img} alt="" />
          <h3 className="projects__title">Pizza Mania</h3>
        </div>

        <span className="projects__button" onClick={() => toggleTab(2)}>
          View More
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </span>

        <div
          className={
            toggleState === 2
              ? "projects__modal active-modal"
              : "projects__modal"
          }
        >
          <div className="projects__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times projects__modal-close"
            ></i>

            <h3 className="projects__modal-title">Pizza Mania</h3>
            <p className="projects__modal-description">Pizza Selling Website</p>

            <ul className="projects__modal-projects grid">
              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Tech Stack: React, Bootstrap, Bootstrap Icons, React Router
                  DOM
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Developed a dynamic front-end interface for a pizza selling
                  website using React.js.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Utilized Bootstrap framework for rapid prototyping and
                  responsive design, ensuring compatibility across various
                  devices and screen sizes.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Implemented React Router DOM for efficient navigation between
                  different pages, ensuring smooth user experience without full
                  page reloads.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Designed and implemented various components including the
                  homepage, menu, cart, and checkout using React’s
                  component-based architecture.
                </p>
              </li>
            </ul>
            <div class="projects__buttons">
              <a
                href="https://pizzamania1809.vercel.app/"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Demo</span>
                <i class="uil uil-link"></i>
              </a>
              <a
                href="https://github.com/PranjalShinde18/Pizza-Mania"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
                <i class="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------- CrypInfo ---------------------------------------- */}

      <div className="projects__content">
        <div>
          <img className="project-img" src={crypinfo_img} alt="" />
          <h3 className="projects__title">CrypInfo </h3>
        </div>

        <span className="projects__button" onClick={() => toggleTab(3)}>
          View More
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </span>

        <div
          className={
            toggleState === 3
              ? "projects__modal active-modal"
              : "projects__modal"
          }
        >
          <div className="projects__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times projects__modal-close"
            ></i>

            <h3 className="projects__modal-title">CrypInfo</h3>
            <p className="projects__modal-description">
              Crypto Currency Website
            </p>

            <ul className="projects__modal-projects grid">
              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Tech Stack: React, Bootstrap, Bootstrap Icons, React Router
                  DOM
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Implemented React Router DOM for seamless navigation between
                  pages, providing an efficient and smooth user experience
                  without full page reloads.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Integrated real-time market data and analytics through APIs,
                  offering users up-to-date information on market trends and
                  cryptocurrency performance.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Implemented interactive charts and historical data
                  visualizations for individual cryptocurrencies using Chart.js.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Enhanced user interface with animations and transitions using
                  Framer Motion, improving the overall user experience and
                  engagement.
                </p>
              </li>
            </ul>
            <div class="projects__buttons">
              <a
                href="https://cripinfo1809.vercel.app/"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Demo</span>
                <i class="uil uil-link"></i>
              </a>
              <a
                href="https://github.com/PranjalShinde18/CrypInfo-Crypto-Currency-Information-Application"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
                <i class="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* ---------------------------------------- Code Orbit ---------------------------------------- */}

      {/* <div className="projects__content">
        <div>
          <img className="project-img" src={codeorbit_img} alt="" />
          <h3 className="projects__title">Code Orbit</h3>
        </div>

        <span className="projects__button" onClick={() => toggleTab(4)}>
          View More
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </span>

        <div
          className={
            toggleState === 4
              ? "projects__modal active-modal"
              : "projects__modal"
          }
        >
          <div className="projects__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times projects__modal-close"
            ></i>

            <h3 className="projects__modal-title">Code Orbit</h3>
            <p className="projects__modal-description">
              Collaborative Coding Platform
            </p>

            <ul className="projects__modal-projects grid">
              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Tech Stack: React, CSS, Node.js, Express.js, MongoDB,
                  Socket.io, JWT
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Developed a comprehensive platform to facilitate real-time
                  collaborative coding and project management.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Implemented real-time collaboration features using Socket.io,
                  enabling multiple users to work on code simultaneously and see
                  changes in real time.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Designed and built a project management system to organize
                  tasks, track progress.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Integrated a JavaScript playground within the browser,
                  allowing users to write, run, and test code directly.
                </p>
              </li>
            </ul>
            <div class="projects__buttons">
              <a
                href="https://github.com/PranjalShinde18/CodeTogether"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
                <i class="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* ---------------------------------------- Alumnet ---------------------------------------- */}

      {/* <div className="projects__content">
        <div>
          <img className="project-img" src={alumnet_img} alt="" />
          <h3 className="projects__title">Alumnet</h3>
        </div>

        <span className="projects__button" onClick={() => toggleTab(5)}>
          View More
          <i className="uil uil-arrow-right projects__button-icon"></i>
        </span>

        <div
          className={
            toggleState === 5
              ? "projects__modal active-modal"
              : "projects__modal"
          }
        >
          <div className="projects__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times projects__modal-close"
            ></i>

            <h3 className="projects__modal-title">Alumnet</h3>
            <p className="projects__modal-description">Alumni Network App</p>

            <ul className="projects__modal-projects grid">
              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Tech Stack : Flutter , Dart , Firebase , Cloud Firestore
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Developed a Flutter app featuring a streamlined homepage for
                  intuitive post/news feed browsing.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Implemented functionalities for users to effortlessly add
                  posts.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Incorporated a seamless chat feature, which facilitates
                  communication with friends directly within the app.
                </p>
              </li>

              <li className="projects__modal-project">
                <i className="uil uil-check-circle projects__modal-icon"></i>
                <p className="projects__ modal-info">
                  Designed an interactive profile page for users to personalize
                  their experience and manage their account details efficiently.
                </p>
              </li>
            </ul>

            <div class="projects__buttons">
              <a
                href="https://github.com/PranjalShinde18/Alumni_Net-App"
                class="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Github</span>
                <i class="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default ProjectDetails;
