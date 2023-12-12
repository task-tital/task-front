import React, { useState } from 'react'
import { insertThis  } from '../service/apiRest';

/**
 * @param {string} titulo 
 * @param {string} descripcion 
 * @param {string} prioridad 
 * @returns {boolean} True or False
 */
function esTareaValida(titulo, descripcion, prioridad) {
    if(titulo !== undefined && titulo !== null && titulo !== "") {
        if(descripcion !== undefined && descripcion !== null && descripcion !== "") {
            if(prioridad !== undefined && prioridad !== null && prioridad >= 0) {
                return "";
            }
        }

        return "disabled";
    }
}

/**
 * Esta funcion devuelve un input:
 * @param {string} tipo
 * @param {string} estado
 * @param {React.Dispatch<React.SetStateAction´<string} actualizador
 * @returns
 */
const setInput = (tipo="text", estado, actualizador) => {
    return (
        <div>
            <label>Titulo: </label>
            <input type={tipo} value={estado} onChange={actualizador} />
            <br />
        </div>
    )
}

const Formulario = (manejarAñadirItem) => {
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
        console.log(data);
        
        insertThis(data);
        manejarAñadirItem(data);

        vaciarEstados();
    }

    return(
        <form onSubmit={manejarFormulario}>
            <div className="formulario-task-tital">
                <div className="entrada">
                    <label>Titulo: </label>
                    <input type="text" value={titulo} onChange={manejarTitulo} />
                    <br />

                    <label>Descripcion: </label>
                    <input type="text" value={descripcion} onChange={manejarDescripcion} />
                    <br />

                    {setInput("number", prioridad, manejarPrioridad)}

                    <button className="boton-añadir" disabled={esTareaValida(titulo, descripcion, parseInt(prioridad))}>Añadir</button>
                    
                </div>
            </div>

        </form>
    )
}

export default Formulario;
