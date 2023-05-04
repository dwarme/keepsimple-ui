import React from "react";
import { ActionProps } from "../../../../../../types/localnav";

const Action: React.FC<ActionProps> = ({title, link, className}) => {
    return (
        <a
            className={`localnav-button button ${className ?? ''}`}
            style={{ display: 'none' }}
            href={link}
        >   
            {title}
            <span className="localnav-action-product">Jobs at Apple</span>
        </a>
    )
}

export default Action;