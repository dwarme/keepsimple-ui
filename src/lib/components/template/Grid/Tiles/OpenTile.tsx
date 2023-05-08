import React from "react";

interface OpenTileProps{
    onClick?: ()=>void
}

const OpenTile: React.FC<OpenTileProps> = ({onClick})=>{
    return (
        <button onClick={onClick} className="icon-wrapper flip-tile-button open-tile">
            <i className="icon icon-plussolid" tabIndex={0}></i>
            <span className="visuallyhidden">Open to read more</span>
        </button>
    )
}

export default OpenTile;