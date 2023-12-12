import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';
import { selectAll } from './service/apiRest';

function App() {
  const [listado, setListado] = useState([]);

  useEffect(() => {
    selectAll()
      .then((respuesta) => {
        setListado(respuesta);
      })
      .catch((error) => {
        console.error(error);
        setListado([]);
      });
  }, []); 

  // const [listado, setListado] = useState([{id: "1", title: 'andalucia', description: "comunidad autonoma", priority: 12}, {id: '13', title: 'montaraz'}]);

  function añadirItem (item) {
    setListado([...listado, item]);
  }

  function eliminarItem(id) {
    const nuevoListado = listado.filter(item => item.id !== id);
    setListado(nuevoListado);
  }

  return(
      <div>
          <Formulario añadirItem={añadirItem} />

          <ListaTareas listado={listado} eliminarItem={eliminarItem}/>

          <button className='boton-recargar-tareas'>
              Recargar tareas
          </button>
      </div>
  )
}

export default App;
