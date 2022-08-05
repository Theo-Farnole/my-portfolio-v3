import React from "react";
import Center from "../../components/center";
import ProjectNavigator from "../../components/project-navigator";

const StickWars = () => {
    return <div id="content">

        <ProjectNavigator projectId="stickwars" />

        <hr />

        <h2 id="game-title">STICK WARS</h2>

        <img className="project-details-cover" src="img/project-header-thumbnails/stickwars_cover.jpg" alt="" />

        <section>
            <p>
                StickWars is a <strong>2D multiplayer</strong> versus game using <a href="https://www.airconsole.com/info">AirConsole</a> technology.<br />
                <br />
                Embody a stick figure and fight to prove that you are the best. <br />
                <strong>Use the environment</strong> to triumph over others stick figures. <strong>Team up</strong> with your opponents or betray them.<br />
            </p>
        </section>

        <hr />

        <section>
            <h3>▶️ FACTSHEET</h3>
            <ul>
                <li><strong>Genre:</strong> 2D Multiplayer versus</li>
                <li><strong>Engine:</strong> Unity</li>
                <li><strong>Development duration:</strong> 2 month on my spare time</li>
                <li><strong>Team:</strong> Only me</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ MY TASKS</h3>
            <ul>
                <li><strong>Developing the game</strong>: game design, programming, etc... </li>
                <li><strong>Publishing the game</strong>: respect the <strong>guidelines</strong>, communicate with the publishing team, etc...</li>
                <li><strong>F2P Game Design</strong>: The longer the player session, the better the developers are paid from AirConsole.</li>
                <li><strong>Post Launch</strong>: Analytics & A/B test</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ WHAT I LEARNED / IMPROVED</h3>
            <ul>
                <li>Fundamentals of <strong>brawler game designing</strong>.</li>
                <li>Increasing players' session.</li>
                <li>A <strong>more maintainable</strong> way to make character controller. (StateMachine pattern)</li>
                <li>Multiplayer game development</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ TRAILER</h3>
            <div className="ratio_16_9">
                <video controls width="250">

                    <source src="video/stickwars_gp.mp4" type="video/mp4" />

                    Sorry, your browser doesn't support embedded videos.
                </video>

            </div>
        </section>

        <hr />

        <section>
            <h3>▶️ MULTIPLAYER - AIRCONSOLE</h3>

            <p className="margin">
                I used <a href="https://www.airconsole.com/info"><strong>AirConsole</strong></a> to make StickWars multiplayer in an <strong>original and accessible</strong> way.<br /><br />
                AirConsole's description: <br /> <i>Users play together in the browser on one shared screen and use their smartphones as gamepads. </i>
            </p>
        </section>

        <hr />

        <section>
            <h3>▶️ SOME INSIGHTS</h3>

            <Center>
                <img src="img/stickwars/insights.png" className="legende_img" alt="Analytics of the game: 9874 unique players, 109th game of AirConsole, average 5.8 minutes played per session" />
                <p className="legende">
                    <br />Average 90 players per day 😁😁
                    <br />However, I am working on sessions' duration
                </p>
            </Center>
        </section>

        <hr />

        <section id="game-see-more">
            <Center>
                <a className="button bigger-text" target="_blank" href="https://www.airconsole.com/play/stickwars" rel="noreferrer">
                    <img className="button-left-icon" src="img/icons/game-controller.png" alt="" />
                    PLAY
                </a>
            </Center>
        </section>

        <hr />
        <ProjectNavigator projectId="stickwars" />

    </div>
};

export default StickWars;