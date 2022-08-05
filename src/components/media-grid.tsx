import React from "react";
import "./media-grid.css";

type Media = {
    type: "image" | "video";
    title: string;
    src: string;
    alt?: string;
}

type Props = {
    media: Media[];
}


// source: https://webdesign.tutsplus.com/fr/tutorials/create-a-css-grid-image-gallery-with-blur-effect-and-interaction-media-queries--cms-32287
const MediaGrid = ({
    media
}: Props) => {

    return <div className="grid-container">

        {media.map((media) => {

            return <article className="location-listing">


                <div className="location-image">
                    {getContent(media)}
                </div>


                <div className="location-title">
                    {media.title}
                </div>
            </article>

        })}

    </div>

    function getContent({ type, src, alt, title }: Media) {
        switch (type) {
            case "image":
                return <div>
                    <img src={src} alt={alt ?? ""} />
                </div>

            case "video":
                return <div className="ratio_16_9">
                    <video controls width="250" muted>
                        <source src={src} type="video/mp4" />

                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>;
        }
    }
};

export default MediaGrid;