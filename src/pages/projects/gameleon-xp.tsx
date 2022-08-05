import React from "react";
import ProjectNavigator from "../../components/project-navigator";

const GameleonXp = () => {
    return <div id="content">

        <ProjectNavigator projectId="gameleon-xp" />

        <hr />

        <h2 id="game-title">COSMOFART @ GAMELEON STUDIO</h2>

        <img className="project-details-cover" src="img/gameleon-experience/page_cover.webp" alt="" />

        <hr />

        <section>
            <h3>▶️ MY TASKS</h3>
            <ul>
                <li>Designing of a mobile game <b>interface</b>.</li>
                <li>Programming of the <b>localization</b> system</li>
                <li><b>Tools</b> programming</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ WHAT I LEARNED / IMPROVED</h3>
            <ul>
                <li>Use <b>interfaces</b> while designing the architecture to respect the <b>ISP SOLID</b> principle.</li>
                <li><b>Understand</b> the main programmer's <b>needs</b> to provide tools.</li>
                <li>Special care to performance: the lighter the application is, the more we can have users 👍</li>
                <li>Development of <b>units tests</b>.</li>
            </ul>
        </section>

        <hr />

        <section>
            <h3>▶️ INTERFACE DEVELOPMENT</h3>
            <ol>
                <li><strong>Learning about UX:</strong>
                    <ul>
                        <li>Usability</li>
                        <li>Ergonomy</li>
                        <li>Gestalt principles</li>
                        <li>Mobile heatmap</li>
                    </ul>
                </li>
                <li><strong>Gathering several references of mobile games UI</strong></li>
                <li><strong>Wireframing in draw.io software</strong>
                    <ul>
                        <li>
                            post mortem: I should have used a more appropriate tool like Figma or Adobe XD
                        </li>
                        <li>I reused the UI from Clash Royale for two reasons:
                            <ul>
                                <li>Gamers are familiar with Clash Royale's UI: We don't have to teach them our UI </li>
                                <li>Supercell is a studio with a lot of budgets: they must have tester several versions of their UI, and keep the best.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>UI programming in Unity</strong>
                    <ul>
                        <li>Focus on readability, maintainability, and performance</li>
                        <li>Making of a UML</li>
                    </ul>
                </li>
            </ol>
        </section>

        <hr />

        <section>
            <h3>▶️ TOOLS I HAVE CREATED OR IMPROVED</h3>

            <ul style={{ "listStyleType": "none" }}>
                <li>
                    <h4>👀 The Watch Window</h4>


                    <ul className="tool-details">

                        <li><strong>Objective</strong>: Make easier the game configuration<br /></li>
                        <br />
                        <li><strong>The tool</strong>: Gather every setting in the game on only one window.<br />

                            <ul>
                                <li>Read all ScriptableObjects in the game and list them in the window</li>
                                <li>Creation of filters</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>🎨 JSON Prettifier</h4>

                    <ul className="tool-details">
                        <li>
                            <strong>Problem</strong>: To verify if the save system was working well, the main programmer had to time-consuming steps.
                        </li>
                        <br />
                        <li>
                            <strong> Objective</strong>: Eliminate those painful steps to save the main programmer's time
                        </li>
                        <br />
                        <li>
                            <strong>The tool</strong>: Create a JSON prettifier into windows

                            <ul>
                                <li>Find a JSON prettifier algorithm on StackOverflow to save me time</li>
                                <li>Make an EditorWindow with a read-only text area with the JSON file prettified</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>❌ Errors detectors</h4>

                    <ul className="tool-details">

                        <li>
                            <strong>Problem</strong> It is easy to introduce bugs while configuring the ScriptableObjects.
                        </li>
                        <br />
                        <li>
                            <strong>Objective</strong>: Detect errors in one click
                        </li>
                        <br />
                        <li>
                            <strong>The tool:</strong> A window with a custom framework C# tests

                            <ul>
                                <li>Creating a framework to test the ScriptableObjects.</li>
                                <li> To create a new test, we just had to inherit a certain class and implement the test() method.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            {/* <Center>
                <img style="max-width: 600px;width:100%" src="img/gameleon-experience/gameleon-validator-scheme.jpg" className="legende_img" alt="" />
            </Center> */}
        </section>

        <hr />

        <section>
            <h3>▶️ LOCALIZATION SYSTEM</h3>

            We made our own localization system to modify it easier.<br />

            <ul>
                <li>Read a csv file, and store them in a dictionary.</li>
                <li> To translate a text, we either add a component to a text component or by calling a method</li>
                <li>Unit tests writing</li>
            </ul>
        </section>

    </div>;
};

export default GameleonXp;