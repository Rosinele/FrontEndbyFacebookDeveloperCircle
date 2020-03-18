import React from 'react';
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)
import './index.css'

const pessoas = [{
    id: 1,
    nome: "Rose"
}, {
    id: 2,
    nome: "Fernanda"
}, {
    id: 3,
    nome: "Monica"
}, {
    id: 4,
    nome: "Yasmin"
}, {
    id: 5,
    nome: "Maria"
}];

const Pessoa = (p) => (
    <li>
        <strong>{p.id}</strong>- {p.nome}
    </li>
)

const App = () => (
    <ul>
        {pessoas.map(p => (
            <Pessoa
                key={p.id.toString()}
                id={p.id}
                nome={p.nome} />
        ))}
    </ul>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

