import React from 'react';
import ReactDOM from 'react-dom'; //Renderizar os componentes no DOM (Existem também o react nativa, react-canvas)
import PropTypes from 'prop-types';

const Usuario = props => {

    return (
        <div>
            {props.id} - {props.nome} - {props.tipo}
        </div>
    );
};

Usuario.propTypes = {
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(['admin', 'normal']).isRequired
};

Usuario.defaultProps = {
    tipo: 'admin'
};

ReactDOM.render(
    <Usuario id={1} nome="Rose"/>,
    document.getElementById('root')
);