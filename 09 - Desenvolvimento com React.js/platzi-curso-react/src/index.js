import React from 'react'; 
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)
import './index.css'

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

class Platzi extends React.Component{
    state = {
        texto: "Hi, "
    }
    handleButtonClick = () => {
        this.setState(previousState => {
            return{
                texto: 
                    previousState.texto === "Hi, "
                    ? 'Tchau, '
                    : "Hi, "
            };
        }) //setState mescla com o state definido anteriormente, adicionando ou substituindo propriedades, conforme nome que for definido para a propriedade
    }
    render(){
        return (
            <div>
                <h3 className="platzi">
                    {this.state.texto} {this.props.nome}
                </h3>
                <button onClick={this.handleButtonClick}>Sair</button>

            </div>
        );      
    }
}

ReactDOM.render(
    <div>
        <Platzi nome="João"/>
        <hr/>
        <Platzi nome="Rose"/>
    </div>,
    document.getElementById('root')
);

