import { useState } from "react";
import Quadrado from "./Quadrado";

const Tabuleiro = () => {
    const quadradoInicial = Array(9).fill(null);
    const [quadrados, setQuadrados] = useState(quadradoInicial);
    const [xProximo, setXProximo] = useState(true);

    const handleClickEvent = (i) => {
        const novosQuadrados = [...quadrados];

        const vencedorDeclarado = Boolean(calculaVencedor(novosQuadrados));
        const quadradoPreenchido = Boolean(novosQuadrados[i]);

        if(vencedorDeclarado || quadradoPreenchido){
            return;
        }

        novosQuadrados[i] = xProximo ? "X" : "O";
        setQuadrados(novosQuadrados);
        setXProximo(!xProximo);
    }

    const renderQuadrado = (i) => {
        return <Quadrado
            value = {quadrados[i]}
            onClickEvent={() => handleClickEvent(i)}
        />
    }

    const vencedor = calculaVencedor(quadrados);
    const status = vencedor ?
        "Vencedor : " +(vencedor) :
        "Sua vez: "+(xProximo ? "X" : "O");

    return(
        <div >
            <div className="status">{status}</div>
            <div className="linhaQuadro">
            {renderQuadrado(0)}{renderQuadrado(1)}{renderQuadrado(2)}
            </div>
            <div className="linhaQuadro">
            {renderQuadrado(3)}{renderQuadrado(4)}{renderQuadrado(5)}
            </div>
            <div className="linhaQuadro">
            {renderQuadrado(6)}{renderQuadrado(7)}{renderQuadrado(8)}
            </div>
            
        </div>
    );
  };

function calculaVencedor(quadrados){
    const lines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6],
    ];
    
    for (let line of lines){
        const [a,b,c] = line;

        if (quadrados[a] && quadrados[a] == quadrados[b] && quadrados[a] == quadrados[c]){
            return quadrados[a]; 
        }
    }
    return null;
}

export default Tabuleiro;