import React from "react";

type Props = {
    link: string;
    imgPath: string;
    jobTitle: string;
    subtitle1?: string;
    subtitle2?: string;
    bulletsPoints: (JSX.Element | string)[],
    openInNewPage?: boolean
    buttonLabel?: string
}

const ProjectOverview = (props: Props) => {

    const linkProps = props.openInNewPage ? { target: "_blank", rel: "noreferrer" } : {};

    return <section className="project-overview">
        <div className="project-overview-content">
            <a className="project-overview-thumbnail" href={props.link} {...linkProps}>
                <img style={{ "objectPosition": "100% 100%" }} src={props.imgPath} alt="" />
            </a>

            <p>
                <strong className="job-title">{props.jobTitle}</strong><br />
                {props.subtitle1}<br />
                {props.subtitle2}
            </p>

            <ul>
                {props.bulletsPoints.map((bulletPoint) => {
                    return <li>{bulletPoint}</li>
                })}
            </ul>

            <a className="button" href={props.link} {...linkProps}>
                {props.buttonLabel ?? "SEE MORE"}
            </a>
        </div>
    </section>
};

export default ProjectOverview;