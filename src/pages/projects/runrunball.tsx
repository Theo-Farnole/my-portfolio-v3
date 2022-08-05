import React from "react";
import Center from "../../components/center";
import ProjectNavigator from "../../components/project-navigator";

const RunRunBall = () => {
    return <div id="content">

        <ProjectNavigator projectId="runrunball" />

        <hr />

        <h2 id="game-title">RUN RUN BALL</h2>

        {/* <!-- <img className="project-details-cover" src="img/project-header-thumbnails/stickwars_cover.jpg" alt="" /> --> */}

        <section>
            <h3>PROJECT OVERVIEW</h3>
            <div className="ratio_16_9">
                <video controls width="250">

                    <source src="video/runrunball_gp.mp4" type="video/mp4" />

                    Sorry, your browser doesn't support embedded videos.
                </video>

            </div>
        </section>
        <hr />

        <section>
            <h3>▶️ FACTSHEET</h3>
            <ul>
                <li><strong>Genre:</strong> Hypercasual mobile game</li>
                <li><strong>Engine:</strong> Unity</li>
                <li><strong>Development duration:</strong> 7 days</li>
                <li><strong>Team:</strong> Only me</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ MY TASKS</h3>
            <ul>
                <li><strong>Developing a mobile F2P game</strong>: special care to retention and acquisition. </li>
                <li>Developping a mainainable architecture to iterate easily</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ WHAT I LEARNED / IMPROVED</h3>
            <ul>
                <li>Fundamentals of <strong>hypercasual genre</strong>.
                    <ul>
                        <li>Snackability: game should not exceed 45 seconds and playing should not requires effort</li>
                        <li>Clear goals: understand goals, danger and scoring system by watching a video</li>
                        <li>Forgiving: an error should not end the game</li>
                        <li>Rewardful: usage of techniques like fever, zoning, wording</li>
                    </ul>
                </li>
            </ul>
        </section>

        <hr />

        <section id="game-see-more">
            <Center>
                <a className="button bigger-text" target="_blank" href="https://play.google.com/store/apps/details?id=com.theofarnole.runrunball" rel="noreferrer">
                    <img className="button-left-icon" src="img/icons/game-controller.png" alt="" />
                    PLAY
                </a>
            </Center>
        </section>

    </div>;
}

export default RunRunBall;