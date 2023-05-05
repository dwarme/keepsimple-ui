import React, { ReactNode, useEffect, useRef } from "react";
import OpenTile from "./OpenTile";
import { intersectionObserver } from "../../../../utils/viewport-util";

interface HalfProps {
    children?: ReactNode;
    className?: string;
    onOpen?: () => void;
}

const Half: React.FC<HalfProps> = ({ children, className, onOpen}) => {

    const refEl = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        refEl.current && intersectionObserver(refEl.current, ()=>{
            refEl.current?.classList.add('appear', 'animation')
        })
    }, [])

    return (
        <div ref={refEl} className={`tile half ${className ?? ''}`}>
            <div className="front-face">
                {children}
                <OpenTile onClick={onOpen} />
            </div>
        </div>
    )
}

export default Half;