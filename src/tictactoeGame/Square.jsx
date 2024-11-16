import React from "react";

import "../style.css";

const Square = (props) =>{


    return (
        
        <button className="square-box"
        onClick={props.onClick}
        >
            <h1>{props.value}</h1>
        </button>
    )
}

export default Square;