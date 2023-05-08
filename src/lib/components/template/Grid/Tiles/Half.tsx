import React, { ReactNode, useEffect, useRef } from "react";
import OpenTile from "./OpenTile";
import { intersectionObserver } from "../../../../utils/viewport-util";

interface HalfProps {
    children?: ReactNode;
    className?: string;
    onOpen?: () => void;
}

const Half: React.FC<HalfProps> = ({ children, className, onOpen }) => {

    const tileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        tileRef.current && intersectionObserver(tileRef.current, () => {
            tileRef.current?.classList.add('appear', 'animation')
        })
    }, [])

    return (
        <div ref={tileRef} className={`tile half ${className ?? ''}`}>
            <div className="front-face">
                {children}
                <OpenTile onClick={onOpen} />
            </div>
        </div>
    )
}

export default Half;