import React from "react";
import { routeNames } from "../const";

const orders: ProjectID[] = [
    "tartaros",
    "gameleon-xp",
    "stickwars",
    "runrunball",
    "candyhunt"
];

const data = {
    "tartaros": {
        title: "Tartaros",
        link: routeNames.tartaros
    },
    "gameleon-xp": {
        title: "Gameleon Studio",
        link: routeNames.gameleonExperience
    },
    "stickwars": {
        title: "StickWars",
        link: routeNames.stickWars
    },
    "runrunball": {
        title: "Run Run Ball",
        link: routeNames.runRunBall
    },
    "candyhunt": {
        title: "Candy Hunt",
        link: routeNames.candyHunt
    }
}

type ProjectID = "gameleon-xp" | "tartaros" | "candyhunt" | "runrunball" | "stickwars";

type Props = {
    projectId: ProjectID;
};

const ProjectNavigator = ({ projectId }: Props) => {

    const previous = getPrevious();
    const next = getNext();

    return <section className="project-nav-buttons" style={getStyle()}>
        {previous &&
            <a className="button" href={previous.link}>
                &#60; {previous.title}
            </a>
        }

        {next &&
            <a className="button" href={next.link}>
                {next.title} &#62;
            </a>
        }
    </section>;

    function getPrevious() {
        const index = orders.indexOf(projectId);

        if (index > 0) {
            return data[orders[index - 1]];
        }
    }

    function getNext() {
        const index = orders.indexOf(projectId);

        if (index < orders.length - 1) {
            return data[orders[index + 1]];
        }
    }

    function getStyle() {
        if (!previous && next) {
            // We force the button to be on the right
            return { "justifyContent": "flex-end" };
        }
    }
};

export default ProjectNavigator;