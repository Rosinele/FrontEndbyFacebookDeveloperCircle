import React from 'react';
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)

const focaNoElemento = elementoHtml =>
    elementoHtml.focus();
const App = props => {
    const input1 = React.useRef(null);
    const input2 = React.useRef(null);
    React.useEffect(() =>{
        console.log(input1.current);
    })
    return (
        <div>
            <button
                onClick={() =>
                    focaNoElemento(input1.current)
                }
            > 
                Foco no 01
            </button>
            <button
                onClick={() =>
                    focaNoElemento(input2.current)
                }
            > 
                Foco no 02
            </button>
            <input type="text" ref={input1}/>
            <input type="text" ref={input2}/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);