import React, { useState } from 'react'
import { insertThis  } from '../service/apiRest';


/**
 * Esta funcion devuelve un input:
 * @param {string} tipo
 * @param {string} estado
 * @param {React.Dispatch<React.SetStateAction´<string} actualizador
 * @returns
 */
const setInput = (tipo="text", texto="Titulo", estado, actualizador) => {
    return (
        <div>
            <label>{texto}: </label>
            <input type={tipo} value={estado} onChange={actualizador} />
        </div>
    )
}

/**
 * @param {function} añadirItem 
 * @returns 
 */
const Formulario = ({añadirItem}) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState(0);

    const manejarTitulo = (event) => {
        setTitulo(event.target.value);
    }

    const manejarDescripcion = (event) => {
        setDescripcion(event.target.value);
    }

    const manejarPrioridad = (event) => {
        setPrioridad(parseInt(event.target.value));
    }

    const vaciarEstados = () => {
        setTitulo("");
        setDescripcion("");
        setPrioridad(0);
    }

    const manejarFormulario = (event) => {
        event.preventDefault();

        let data = {title: titulo, description: descripcion, priority: prioridad};
        
        insertThis(data);
        añadirItem(data);

        vaciarEstados();
    }

    return(
        <form onSubmit={manejarFormulario}>
            <div className="formulario-task-tital">
                <div className="entrada">
                    {setInput("text", "Titulo", titulo, manejarTitulo)}
                    {setInput("text", "Descripcion", descripcion, manejarDescripcion)}
                    {setInput("number", "Prioridad", prioridad, manejarPrioridad)}

                    <button className="boton-añadir" disabled={titulo && descripcion && parseInt(prioridad) > 0 ? "" : "disabled"}>Añadir</button>
                </div>
            </div>

        </form>
    )
}

export default Formulario;
