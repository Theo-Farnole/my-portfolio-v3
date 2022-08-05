import React from "react";

type Props = {
    children?: React.ReactNode;
}

const Center = ({ children }: Props) => {

    return <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        {children}
    </div>;
};

export default Center;