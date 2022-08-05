import React from "react";
import Center from "../components/center";
import MediaGrid from "../components/media-grid";

const Tartaros = () => {
    return <div id="content">
        <section className="project-nav-buttons">
            <a className="button" href="runrunball.php">
                &#60; Run Run Ball
            </a>

            <a className="button" href="candyhunt.php">
                Candy Hunt &#62;
            </a>
        </section>

        <hr />

        <h2 id="game-title">TARTAROS</h2>

        <img className="project-details-cover" src="img/tartaros/page_cover.jpg" alt="" />

        <section>
            <p>
                <i>This is the final project of my third year of studies</i>
            </p>
        </section>

        <hr />

        <section>
            <h3>▶️ FACTSHEET</h3>
            <ul>
                <li><strong>Genre:</strong> RTS</li>
                <li><strong>Engine:</strong> Unity</li>
                <li><strong>Development duration:</strong> 3 months</li>
                <li><strong>Team:</strong> 7 game artists, 4 game designers</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ MY ROLE: LEAD TECHNICAL GAME DESIGN</h3>
            <ul>
                <li>UML conception</li>
                <li>Guarantee the smooth running of the technical part</li>
                <li><b>Programming systems</b> & <b>Polishing</b></li>
                <li>Developping tools</li>
                <li>Optimization to handle hundreds of units (eg. multithreading, GPU animations baking) </li>
                <li>Code reviews of <a href="https://dimitryjulliard.wixsite.com/portfolio" target="_blank" rel="noreferrer">Dimitry</a>'s work (the other programmer)</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ WHAT I LEARNED / IMPROVED</h3>
            <ul>
                <li>Create <strong>maintainable</strong> and <strong>expandable</strong> code with <strong>SOLID principles</strong></li>
                <li><b>Teleworking</b> project</li>
                <li>Improving AI State Machine understanding</li>
                <li>Test Driven Development on some systems</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ SCENES BROWSER</h3>
            Opening a scene in Unity is tedious: it easily takes 5/10 seconds to find the scene we want to open. So, <b>the scenes browser let's focus developers on their tasks</b>, not on finding their scenes.

            <ul>
                <li>
                    Possibility to mark scenes as favorite (for the persistence I used EditorPrefs)
                </li>

                <li>
                    Open or select scenes directly from the scene browser
                </li>

                <br />
                <img style={{ "maxHeight": "400px" }} src="img/tartaros/scenes_browser.gif" />
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ UML</h3>

            <i>Because UML is very wide, I choose to not include in the page. <a href="img/tartaros/uml.jpg" target="_blank">Click here to open it.</a></i>

            <ul>
                <li>
                    <b>Faster to iterate</b> on paper than on already produced code
                </li>

                <li>
                    Act as a guideline to teammates
                </li>

                <li>
                    Attribute works to teammates easier
                </li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ CHEATS SYSTEM</h3>

            <ul>
                <li><b>Easy to use:</b> Add attribute [CheatMethod] a method, to add it in the cheat menu.
                    <br />

                    <img style={{ "maxHeight": "200px" }} src="img/tartaros/cheats_menu_snippet.png" />
                </li>

                <li>
                    Support infinite parameters.<br />
                    <br />
                    <img style={{ "maxHeight": "200px" }} src="img/tartaros/cheats_menu_exemple.png" alt="" />
                </li>

                <li>
                    No dependency. It doesn't need a prefab. UI is generated with the legacy GUI.
                </li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ SOME SCREENSHOTS & VIDEOS</h3>


            <MediaGrid media={[
                {
                    type: "image",
                    title: "Map Editor: create sectors",
                    src: "img/tartaros/sectors_editor.gif",
                },
                {
                    type: "image",
                    title: "Create and edit buildings and units in a single window.",
                    src: "img/tartaros/entity_data_inspector.jpg"
                },
                {
                    type: "video",
                    title: "Walls' aspect change in the function of their neighbors",
                    src: "video/tartaros/building-walls.mp4"
                }
            ]} />
        </section>

        <hr />

        <section id="game-see-more">
            <Center>
                <a className="button bigger-text" target="_blank" href="https://github.com/Theo-Farnole/Tartaros_v2" rel="noreferrer">
                    <img className="button-left-icon" src="img/icons/settings.png" alt="" />
                    SEE CODE
                </a>
            </Center>
        </section>

    </div>;
};

export default Tartaros;