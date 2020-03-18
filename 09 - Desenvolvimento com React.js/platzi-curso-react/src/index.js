import React from 'react'; 
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)
import './index.css'

const Contador = () => {
    const [valor, setValor] = React.useState(0);
    React.useEffect(() =>{
        const timerID = setInterval(() => {
            setValor(v => v + 1);
        }, 800);
        return () => {
            clearInterval(timerID);
        }
    });
    return(
        <div>
            <h1>{valor}</h1>
        </div>
    );
};

const App = () =>{
    const [
        mostrarContador,
        setMostrarContador
    ] = React.useState(true);
    const toggleMostrador = () => {
        setMostrarContador(ant => !ant);
    };
    if(!mostrarContador){
        return(
            <div>
                <input
                    type="checkbox" 
                    checked={mostrarContador} 
                    onChange={toggleMostrador}
                />
            </div>
        );
    }
    return (
    <div>
        <input 
            type="checkbox" 
            checked={mostrarContador} 
            onChange={toggleMostrador}
        />
        <Contador/>
    </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);