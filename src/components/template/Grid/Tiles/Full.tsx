import React, { ReactNode, useEffect, useRef } from "react";
import OpenTile from "./OpenTile";
import { intersectionObserver } from "../../../../utils/viewport-util";

interface FullProps{
    children?: ReactNode;
    className?: string;
    onOpen?: ()=>void
}

const Full: React.FC<FullProps> = ({children, className, onOpen})=>{
    const refEl = useRef<HTMLDivElement>(null);

    /*useEffect(() => {
        const maxScrollValue = 60;
            const handler = function () {

                let scrollValue = window.scrollY / 10; // divide by a number to control the speed of the animation
                scrollValue = Math.min(scrollValue, maxScrollValue); // limit the scroll value to the maximum value

                // interpolate the scroll value between 0 and maxScrollValue to a value between 0 and 1
                const interpolationValue = scrollValue / maxScrollValue;

                // calculate the new transform value based on the interpolation value
                const transformValue = `matrix(1, 0, 0, 1, 0, ${-scrollValue})`;

                // apply the new transform value to the element's style
                refEl.current!.style.transform = transformValue;
                refEl.current!.style.willChange = 'opacity, transform';

                // request the next animation frame
                window.requestAnimationFrame(() => { });

                window.addEventListener('scroll', handler);
            }

            window.addEventListener('scroll', handler)
        

        return () => window.removeEventListener('scroll', handler);

    }, [])*/

    useEffect(()=>{
        refEl.current && intersectionObserver(refEl.current, ()=>{
            refEl.current?.classList.add('appear', 'animation')
        })
    }, [])
    
    return (
        <div ref={refEl} className={`tile full ${className}`}>
            <div className="front-face">
                {children}
                <OpenTile onClick={onOpen}/>
            </div>
        </div>
    )
}

export default Full;