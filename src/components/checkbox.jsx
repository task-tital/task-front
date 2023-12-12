// import React, { useState } from 'react'
// import { deleteThis } from '../service/apiRest';
import React from 'react'

/**
 * Esta funcion realiza la eliminacion de la bbdd y renderiza el elemento como nulo.
 * @param {string} id 
 * @param {function} setElemento
 * 
 * <button className={nombreBoton} onClick={manejarOnClick(elemento['id'], setElemento)}>
 *
function manejarOnClick(id, setElemento) {
    deleteThis(id);
    setElemento(null);
}
*/

const Checkbox = ({id, title, description, priority}, eliminarItem) => {
 /*
    const [elemento, setElemento] = useState({
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        prioridad: prioridad
    });
*/
    const nombreLabel = 'item-' + id;
    const nombreBoton = 'boton-eliminar-' + id;
    
//    if(elemento) {
        return(
            <div>
                <label className={nombreLabel}>
                    <label>Titulo: {title}</label>
                    <label>Descripcion: {description}</label>
                    <label>Prioridad: {priority}</label>

                    <button className={nombreBoton} onClick={eliminarItem(id)}>
                        Eliminar
                    </button>
                </label>
            </div>
        )
//    } else {
//        return null;
//    }
    
};

export default Checkbox;
