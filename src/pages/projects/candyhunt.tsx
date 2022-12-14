import React from "react";
import Center from "../../components/center";
import MediaGrid from "../../components/media-grid";
import ProjectNavigator from "../../components/project-navigator";

const CandyHunt = () => {
    return <div id="content">

        <ProjectNavigator projectId="candyhunt" />

        <hr />

        <h2 id="game-title">CANDY HUNT</h2>

        <img className="project-details-cover" src="img/project-header-thumbnails/candyhunt_cover.jpg" alt="" />

        <section>
            <p>
                You are the <strong>candy king</strong>!<br />
                Pastries have stolen your people's treasures.<br />
                You must get it back!<br />
                <br />
                <strong>Discover</strong> the lands of wasted cakes or the cloudly candy floss city...<br />
                While exploring, find <strong>abilities</strong> that will help you find the stolen treasures.<br />
            </p>
        </section>

        <hr />

        <section>
            <h3>▶️ FACTSHEET</h3>
            <ul>
                <li><strong>Genre:</strong> Metroid Vania 2D</li>
                <li><strong>Engine:</strong> Unity</li>
                <li><strong>Development duration:</strong> 13 days <i>(4 to 21 February 2020)</i></li>
                <li><strong>Team:</strong> 4 game artists & 4 game designers</li>
                <li><strong>Special thanks:</strong> to <strong>Flavien Caston</strong> & <strong>Robin Blanc</strong>. They gave us the original prototype containing character controller.</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ MY TASKS</h3>
            <ul>
                <li><strong>Produce tools</strong> to <strong>improve productivity</strong>.</li>
                <li>Special care to <strong>user experience (UX)</strong></li>
                <li>Programming ennemies' <strong>State Driven AI</strong></li>
                <li>Polishing the game</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ WHAT I LEARNED / IMPROVED</h3>
            <ul>
                <li>Working with <strong>another programmer</strong></li>
                <li><strong>Tools</strong> ReorderableLists & Handles</li>
                <li>Reducing <strong>build size</strong>: from 1GB to 80MB</li>
                <li>Reduce <strong>compile</strong> time and thus, saving time: <a href="http://www.screaminggoose.com/blog/2019/2/4/how-i-cut-unity-compile-times-by-75">How I Cut Unity Compile Times by 75%</a></li>
                <li>Usage of <strong>partial classes</strong> in C#</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ IMPROVING LEVEL DESIGNER WORKFLOW</h3>


            <div className="ratio_16_9">
                <video controls width="250">


                    <source src="video/candyhunt_patrol.mp4" type="video/mp4" />

                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
            <p className="legende">
                Editing enemies path: visual and maintainable
            </p>

            <MediaGrid media={[
                {
                    type: "image",
                    src: "img/candyhunt_events.jpg",
                    title: "Add UnityEvent to avoid level designers from programming.",
                },
                {
                    type: "image",
                    src: "img/candyhunt_load.jpg",
                    title: <>
                        We developed this project with multi-scene logic : each layers contains some info (code, arts, etc..).<br />
                        When a level is opened in Editor, automatically load others scenes associated to the one opened.<br />
                    </>
                }
            ]} />
        </section>

        <hr />

        <section id="game-see-more">
            <Center>
                <a className="button bigger-text" target="_blank" href="https://lortedo.itch.io/candy-hunt" rel="noreferrer">
                    <img className="button-left-icon" src="img/icons/game-controller.png" alt="game controller icon" />
                    PLAY
                </a>
            </Center>
        </section>

        <hr />
        <ProjectNavigator projectId="candyhunt" />

    </div>;
};

export default CandyHunt;