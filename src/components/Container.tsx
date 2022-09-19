import React from "react";

interface Props {
    children: React.ReactNode;
    className: string;
}

export default ({children, className}: Props) => (
    <div className={`${className}`}>
        {children}
    </div>
);