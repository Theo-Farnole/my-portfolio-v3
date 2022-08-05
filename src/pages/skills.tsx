import React from "react";
import "./skills.css";

const Skills = () => {
    return <div id="content">

        <h1>MAIN SKILLS</h1>

        <ul className="skills_wrapper">
            <li className="skill">

                <img className="skill-icon" src="img/icons/unity.png" alt="" />

                <h2>UNITY</h2>

                <ul>
                    <li>Prototypage & Programming
                        <ul>
                            <li>Designer friendly interface</li>
                            <li>SOLID principles</li>
                            <li>Maintainable architecture</li>
                        </ul>
                    </li>

                    <li>Tools
                        <ul>
                            <li>EditorWindow</li>
                            <li>Property Drawer</li>
                            <li>Odin Inspector addon</li>
                        </ul>
                    </li>

                    <li>
                        Artists' content implementation
                    </li>
                </ul>
            </li>

            <li className="skill">
                <img className="skill-icon" src="img/icons/code.png" alt="" />

                <h2>PROGRAMMING</h2>

                <ul>
                    <li>Self documentating code</li>

                    <li>OOP: object-oriented programming</li>

                    <li>Flexible and maintainable architecture
                        <ul>
                            <li><b>UML diagram</b></li>
                            <li><b>SOLID principles</b></li>
                            <li>Avoid tight and temporal coupling</li>
                            <li>Demeter's Law</li>
                            <li>Interface</li>
                            <li>Command/Query separation</li>
                        </ul>
                    </li>

                    <li>Optimization</li>

                    <li>Design Patterns
                        <ul>
                            <li>
                                State Machine (mostly IA and UI)
                            </li>

                            <li>
                                Singleton (I'd like to avoid it)
                            </li>
                        </ul>
                    </li>

                    <li>Miscellaneous notions
                        <ul>
                            <li>Indexers</li>
                            <li>Collections: Array, Dictionary, Queue, Stack</li>
                            <li>Big O notation</li>
                        </ul>
                    </li>

                    <li>Units testing</li>
                </ul>
            </li>
        </ul>

        <hr />

        <h1>SECONDARY SKILLS</h1>

        <ul className="skills_wrapper">

            <li className="skill">
                <img className="skill-icon" src="img/icons/game-design.svg" alt="" />

                <h2>GAME DESIGN</h2>
                <ul>
                    <li>3C</li>
                    <li>Gameplay loops</li>
                    <li>Signs & Feedbacks</li>
                    <li>Free to play KPI</li>
                </ul>
            </li>

            <li className="skill">
                <img className="skill-icon" src="img/icons/unreal-engine-4.png" alt="" />

                <h2>UNREAL ENGINE 4</h2>

                <ul>
                    <li>Prototyping with blueprints</li>
                    <li>UI with widgets</li>
                </ul>
            </li>
        </ul>

        <hr />

        <h2>TERTIARY SKILLS</h2>

        <ul className="skills_wrapper">

            <li className="skill">
                <img className="skill-icon" src="img/icons/git.svg" alt="" />

                <h2>GIT</h2>

                <ul>
                    <li>Daily tasks: push, pull... and resolve merge conflicts 🙄</li>
                    <li>Command line</li>
                </ul>
            </li>

            <li className="skill">
                <img className="skill-icon" src="img/icons/jira.png" alt="" />

                <h2>JIRA</h2>
                <ul>
                    <li>Daily usages</li>
                </ul>
            </li>

            <li className="skill">
                <img className="skill-icon" src="img/icons/ux.svg" alt="" />

                <h2>UX</h2>
                <ul>
                    <li>Usability</li>
                    <li>Gestalt principles</li>
                    <li>Human's memory principles</li>
                    <li>Affordances & Signifiers</li>
                </ul>
            </li>
        </ul>
    </div>;
}

export default Skills;