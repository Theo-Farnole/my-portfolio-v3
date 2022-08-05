import React from "react";

const Home = () => {
    return <>
        <div id="content">

            <div id="about-me">
                <div className="text-container">

                    <div id="title">
                        Hi, I'm Théo Farnole. 😁<br />
                        <span className="job color-primary">Game Developer</span>
                    </div>

                    <p>
                        I develop video games since 2011. Graduating from GameSup, I learned game designing while enhancing my programming skills.<br />
                        <br />
                        I mainly develop games on <strong>Unity</strong> and Unreal Engine.<br />
                        Before jumping into code, I always do a quick <strong>UML diagram</strong> to iterate on paper (instead of iterating on an already produced code).<br />
                        I am always searching for ways to improve my skills. And I love to share my finds with my colleagues.
                    </p>
                </div>



                <a className="button download-cv" href="others/FARNOLE_Theo_Technical_Game_Designer_CV.pdf">
                    DOWNLOAD RESUME
                </a>

            </div>

            <hr />

            <h1 id="professional-xp">PROFESSIONAL EXPERIENCE</h1>

            <section className="project-overview">

                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="gameleon-experience.php">
                        <img src="img/gameleon-experience/page_cover.webp" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">Game Developer Internship</strong><br />
                        8 months | 2020-2021<br />
                        Unity & C#
                    </p>

                    <ul>
                        <li><b>Tools</b> creation</li>
                        <li>Improving programming knowledge</li>
                        <li><b>UI</b>: wireframing, programming, implementation</li>
                    </ul>

                    <a className="button" href="gameleon-experience.php">
                        SEE MORE
                    </a>
                </div>
            </section>

            <hr />

            <h1>PERSONAL PUBLISHED PROJECT 🥳</h1>

            <section className="project-overview">
                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="stickwars.php">
                        <img style={{ "objectPosition": "100% 100%" }} src="img/stickwars/homepage.jpg" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">Game Developer</strong><br />
                        Platformer | Unity & C# | 2020<br />
                        <br />
                        StickWars
                    </p>

                    <ul>
                        <li>Developing the game</li>
                        <li>Publishing the game</li>
                    </ul>

                    <a className="button" href="stickwars.php">
                        SEE MORE
                    </a>
                </div>
            </section>

            <section className="project-overview">
                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="runrunball.php">
                        <img style={{ "objectPosition": "100% 100%" }} src="img/runrunball/homepage.jpg" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">Game Developer</strong><br />
                        Mobile game | Unity & C# | 2020<br />
                        <br />
                        Run Run Ball
                    </p>

                    <ul>
                        <li>Hypercasual game design</li>
                        <li>Developping the game</li>
                    </ul>

                    <a className="button" href="runrunball.php">
                        SEE MORE
                    </a>
                </div>
            </section>

            <hr />

            <h1>SCHOOL PROJECTS</h1>

            <section className="project-overview">
                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="tartaros.php">
                        <img src="img/tartaros/homepage.jpg" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">Lead Technical Game Designer</strong><br />
                        RTS | Unity & C# | 2021<br />
                        <br />
                        Tartaros<br />
                    </p>

                    <ul>
                        <li><b>Programming</b>: building, units, fog of war</li>
                        <li>Creating a RTS <b>map editor</b> for LDs</li>
                        <li><b>Polishing</b> the game</li>
                    </ul>

                    <a className="button" href="tartaros.php">
                        SEE MORE
                    </a>
                </div>
            </section>

            <section className="project-overview">
                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="candyhunt.php">
                        <img src="img/candyhunt/homepage.jpg" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">Technical Game Designer</strong><br />
                        Platformer | Unity & C# | 2020<br />
                        <br />
                        Candy Hunt<br />
                    </p>

                    <ul>
                        <li>Programming enemies' <strong>IA</strong></li>
                        <li><strong>Unity Editor</strong>: improving level designer's workflow</li>
                    </ul>

                    <a className="button" href="candyhunt.php">
                        SEE MORE
                    </a>
                </div>
            </section>

            <hr />

            <h1>SOME ARTICLES I WROTE</h1>

            <section className="project-overview">
                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="https://www.linkedin.com/pulse/how-make-gesture-recognition-virtual-reality-th%C3%A9o-farnole-/" target="_blank" rel="noreferrer">
                        <img src="img/homepage-thumbnails/gesture_recognition.jpg" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">How to make gesture recognition in virtual reality?</strong><br />
                    </p>

                    <ul>
                        <li>Resolving user's micro handshakes</li>
                    </ul>

                    <a className="button" href="https://www.linkedin.com/pulse/how-make-gesture-recognition-virtual-reality-th%C3%A9o-farnole-/" target="_blank" rel="noreferrer">
                        READ
                    </a>
                </div>
            </section>

            <section className="project-overview">
                <div className="project-overview-content">
                    <a className="project-overview-thumbnail" href="https://www.linkedin.com/pulse/how-speed-up-development-your-games-th%25C3%25A9o-farnole-/" target="_blank" rel="noreferrer" >
                        <img src="img/homepage-thumbnails/tight_coupling.jpg" alt="" />
                    </a>

                    <p>
                        <strong className="job-title">How to speed up development of your games?</strong><br />
                    </p>

                    <ul>
                        <li>Loose vs Tight coupling notions</li>
                        <li>Observer design pattern</li>
                    </ul>


                    <a className="button" href="https://www.linkedin.com/pulse/how-speed-up-development-your-games-th%25C3%25A9o-farnole-/" target="_blank" rel="noreferrer">
                        READ
                    </a>
                </div>
            </section>
        </div>
    </>;
}

export default Home;

