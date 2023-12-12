import React, { useState } from 'react'
import Formulario from './Formulario';
import ListaTareas from './ListaTareas';
import { selectAll } from '../service/apiRest';


const Contenedor = () => {
    const [listado, setListado] = useState(selectAll());

    const añadirItem = (item) => {
        setListado([...listado, item]);
    }

    /**
     * Elimina el item del listado y reinicia este en la pagina.
     * @param {string} id 
     */
    const eliminarItem = (id) => {
        let nuevoListado = listado.filter(item => item['id'] != id);
        setListado(nuevoListado);
    }

    return(
        <div>
            <Formulario manejarAñadirItem={añadirItem} />
            <ListaTareas listado={listado} eliminarItem={eliminarItem}/>

            <button className='boton-recargar-tareas' onClick={setListado(selectAll())}>
                Recargar tareas
            </button>
        </div>
    )
}

export default Contenedor;
