import React from "react";
import DownloadResumeButton from "../components/download-resume-button";
import ProjectOverview from "../components/project-overview";

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


                <DownloadResumeButton />

            </div>

            <hr />

            <h1>📌 PINNED PROJECT </h1>

            <ProjectOverview
                link="tartaros"
                imgPath="img/tartaros/homepage.jpg"
                jobTitle="Lead Game Developer"
                subtitle1="RTS | Unity & C# | 2021"
                bulletsPoints={[
                    <>Designing entire <b>code architecture</b></>,
                    <><b>Programming</b>: building, units, fog of war</>,
                    <>Creation of <b>tools</b> (eg. map editor)</>,
                    <>Polishing the game</>,
                ]}
            />

            <hr />

            <h1 id="professional-xp">PROFESSIONAL EXPERIENCE</h1>

            <ProjectOverview
                link="/gameleon-experience"
                imgPath="/img/gameleon-experience/page_cover.webp"
                jobTitle="Game Developer Internship"
                subtitle1="Mobile Game | Unity & C#"
                bulletsPoints={[
                    <><b>Tools</b> creation</>,
                    <>Improving programming knowledge</>,
                    <><b>UI</b>: wireframing, programming, implementation</>,
                ]}
            />


            <hr />

            <h1>PERSONAL PUBLISHED PROJECT 🥳</h1>

            <ProjectOverview
                link="/stickwars"
                imgPath="/img/stickwars/homepage.jpg"
                jobTitle="Game Developer"
                subtitle1="Platformer | Unity & C#"
                bulletsPoints={[
                    "Developing the game",
                    "Publishing the game"
                ]}
            />

            <ProjectOverview
                link="runrunrunball"
                imgPath="img/runrunball/homepage.jpg"
                jobTitle="Game Developer"
                subtitle1="Mobile game | Unity & C#"
                bulletsPoints={[
                    "Hypercasual game design",
                    "Developing the game",
                ]}
            />

            <hr />

            <h1>SCHOOL PROJECTS</h1>



            <ProjectOverview
                link="candyhunt"
                imgPath="img/candyhunt/homepage.jpg"
                jobTitle="Game Developer"
                subtitle1="Platformer | Unity & C#"
                bulletsPoints={[
                    <>Programming enemies' <strong>IA</strong></>,
                    <><strong>Unity Editor</strong>: improving level designer's workflow</>
                ]}

            />

            <hr />

            <h1>SOME ARTICLES I WROTE</h1>

            <ProjectOverview
                link="https://www.linkedin.com/pulse/how-make-gesture-recognition-virtual-reality-th%C3%A9o-farnole-/"
                imgPath="img/homepage-thumbnails/gesture_recognition.jpg"
                jobTitle="How to make gesture recognition in virtual reality?"
                bulletsPoints={[
                    <>Resolving user's micro handshakes</>
                ]}
                openInNewPage={true}
                buttonLabel="READ"
            />
        </div>
    </>;
}

export default Home;

