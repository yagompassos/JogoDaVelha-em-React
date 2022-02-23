import { useState } from "react";

const Quadrado = (props) => {
    return(
        <button
            className="quadrado"
            onClick={props.onClickEvent}
        >
        {props.value}   
        </button>
    )
}

export default Quadrado;