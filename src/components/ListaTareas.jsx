import React from 'react'
import Checkbox from './checkbox';


function obtenerDataFromItem(item) {
    return {id: item['id'], title: item['title'], description: item['description'], priority: item['priority']};
}

/**
 * 
 * @param {JSON} listado 
 * @returns 
 */
const ListaTareas = (listado, eliminarItem) => {
    if(listado && listado.length > 0) {
        return (
            <div className='lista-tareas'>
                {listado.map(item => (
                    <Checkbox data={obtenerDataFromItem(item)} eliminarItem={eliminarItem} />
                ))}
            </div>
        );
    } else {
        return "Sin tareas";
    }
}

export default ListaTareas;