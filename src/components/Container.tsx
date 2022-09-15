import React from "react";

interface Props {
    children: React.ReactNode;
    className: string;
}

export default ({children, className}: Props) => (
    <div className={`p-14 pt-8 pb-0 ${className}`}>
        {children}
    </div>
);