import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';
import { selectAll, insertThis } from './service/apiRest';

function App() {
  const [listado, setListado] = useState(useState([{id: "1", title: 'andalucia', description: "comunidad autonoma", priority: 12}, {id: '13', title: 'montaraz'}]));

  const cargarListado = () => {
    selectAll()
      .then((respuesta) => {
        setListado(respuesta);
      })
      .catch((error) => {
        console.error(error);
        setListado([]);
      });
  };

  useEffect(() => {
    cargarListado();
  }, []);

  function añadirItem (item) {
    // insertThis(data);
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

          <button className='boton-recargar-tareas' onClick={() => cargarListado()}>
              Recargar tareas
          </button>
      </div>
  )
}

export default App;
