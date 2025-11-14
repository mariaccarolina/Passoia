// hooks são funçoes especiais do react;
//useState controla os estados de algo na interface
import { useState } from "react";

//IMPORT DAS IMAGENS:
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";

function Lancamentos(){
//estado inicial
    //cor a variavel inicial, setCor a função atualizadora
    const [cor, setCor] = useState(vermelho);

    return (
      <section>
        <h2>APROVEITE OS LANÇAMENTOS</h2>
        <img src={cor} alt="Modelo usando o batom" />

        <button onClick={()=>setCor(azul)}>Azul</button>
        <button onClick={()=> setCor(marrom)}>Marron</button>
      </section>
    );
}

export default Lancamentos;