import React from "react";
import Center from "../../components/center";

const Error404 = () => {
    return <div>
        <Center>
            <div>
                <h2>Error 404</h2>
                <p>This link is broken.</p>

                <a className="button" href="/">
                    return home
                </a>
            </div>
        </Center>
    </div>
}

export default Error404;