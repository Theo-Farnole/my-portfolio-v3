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
            height: '100vh',
        }}>
        {children}
    </div>;
};

export default Center;