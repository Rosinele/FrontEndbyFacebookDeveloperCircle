import React from 'react'; 
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)

const elementoComJSX = (
    <div className="platzi" autoCorrect>
        <h1> Olá, estamos utilizando o JSX agora!</h1>
    </div>
);

ReactDOM.render(
    elementoComJSX, 
    document.getElementById('root')
);

