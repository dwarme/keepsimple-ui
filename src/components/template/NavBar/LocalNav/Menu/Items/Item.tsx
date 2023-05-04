import React from "react";
import { ItemProps } from "../../../../../../types/localnav";

const Item: React.FC<ItemProps> = ({title, link, className})=>{
    return (
        <li className="localnav-menu-item">
            <a 
                href={link}
                className={`localnav-menu-link ${className ?? ''}`}
            >
                {title}
            </a>
        </li>
    )
}

export default React.memo(Item);