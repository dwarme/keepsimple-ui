import React from "react";
import { LocalNavProps } from "../../../../types/localnav";
import Menu from "./Menu/Menu";
import Title from "./Title";

const LocalNav: React.FC<LocalNavProps> = ({title, menu}) => {
    return (
        <nav id="localnav" className="localnav css-sticky localnav-sticking localnav--solid" role="navigation">
            <div className="localnav-wrapper">
                <div className="localnav-background"></div>

                <div className="localnav-content">

                    <Title {...title} />
                    <Menu {...menu}/>

                </div>
            </div>
        </nav>
    )
}

export default React.memo(LocalNav);