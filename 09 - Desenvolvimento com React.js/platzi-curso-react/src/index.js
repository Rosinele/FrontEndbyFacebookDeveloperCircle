import React from 'react'; 
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)

/*const ElementoComJSX = (props) => (
    <div className="platzi" autoCorrect>
        <h1>{props.texto}</h1>
    </div>
);

ReactDOM.render(
    <div>
        <ElementoComJSX texto="Olá, Rose! Fizemos um Componente agora"/>
    <ElementoComJSX texto="Olha só, estou reutilizando um componente"/> 
    </div>,
    document.getElementById('root')
);*/

//Componente funcional
const Oi = (props) => (
    <h1>Olá, {props.nome}</h1>
);

//componente de classe (Todo componente de classe tem que ter a função render() para devolver alguma coisa)
class Tchau extends React.Component{
    render(){
    return <h3>Tchau {this.props.nome}</h3>
    }
}

const nome = "Rose";
const nome2 = "Maria";
const nome3 = "Victor";

ReactDOM.render(
    <div>
        <Oi nome={nome}/>
        <Tchau nome={nome}/>
        <Oi nome={nome2}/>
        <Tchau nome={nome2}/>
        <Oi nome={nome3}/>
        <Tchau nome={nome3}/>
    </div>,
    document.getElementById('root')
);

