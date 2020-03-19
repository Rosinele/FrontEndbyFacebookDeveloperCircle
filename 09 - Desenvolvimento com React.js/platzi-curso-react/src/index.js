import React from 'react';
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)

const App = () => {
    const [contador, setContador] = React.useState(
        0
    );

    const altereContador = operacao =>
        setContador(c => operacao(c));

    return (
        <div>
            <button
                onClick={() => altereContador(c => c + 1)}
            >
                adiciona
            </button>
            <div
                onMouseEnter={() =>
                    setContador(c => c - 1)
                }
                style={{
                    backgroundColor: 'pink',
                    width: 50,
                    height: 50,
                    marginTop: 10
                }}
            >
                <div>subtrai</div>
                <h1>{contador}</h1>
            </div >
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);