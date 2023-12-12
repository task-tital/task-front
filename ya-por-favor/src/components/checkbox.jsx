// import React, { useState } from 'react'
// import { deleteThis } from '../service/apiRest';
import React from 'react'

const Checkbox = ({data, eliminarItem}) => {
    const nombreLabel = 'item-' + data.id;
    const nombreBoton = 'boton-eliminar-' + data.id;
    
    return(
        <div>
            <label className={nombreLabel}>
                <label>Titulo: {data.title}</label>
                <label>Descripcion: {data.description}</label>
                <label>Prioridad: {data.priority}</label>
                
                <button className={nombreBoton} onClick={() => eliminarItem(data.id)}>
                    Eliminar
                </button>
            </label>
        </div>
    )
};

export default Checkbox;
