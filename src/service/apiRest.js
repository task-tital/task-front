const URL_PUT_DELETE = "http://localhost:3000/tasks/delete";
const URL_POST_INSERT = "http://localhost:3000/tasks/insert";
const URL_GET_SELECT_ALL = "http://localhost:3000/tasks/selectAll";


/**
 * Elimina el elemento de la bbdd que se indique en el id.
 * @param {string} id 
 */
async function deleteThis(id) {
    const data = {id: id};

    return await fetch(URL_PUT_DELETE, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Error al hacer DELETE');
        }

        return response.json();
    })
    .catch((error) => console.error("Delete-Error: ", error))
    .then((response) => console.log("Delete-Exito: ", response));
}

/**
 * Inserta el elemento que se pase como argumento a la bbdd.
 * @param {string} titulo
 * @param {string} descripcion
 * @param {number} prioridad 
 * @returns 
 */
async function insertThis(titulo, descripcion, prioridad) {
    const data = {title: titulo, description: descripcion, priority: prioridad};

    return await fetch(URL_POST_INSERT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Error al hacer INSERT');
        }

        return response.json();
    })
    .catch((error) => console.error("Insert-Error: ", error))
    .then((response) => console.log("Insert-Exito: ", response));
}

/**
 * 
 * @returns JSON[]
 */
async function selectAll() {
    return await fetch(URL_GET_SELECT_ALL)
    .then((response) => {
        if(!response.ok) {
            throw new Error('Error al hacer SELECT ALL');
        }

        return response.json();
    })
    .catch((error) => console.error("Select-Error: ", error))
    .then((response) => console.log("Select-Exito: ", response));
}

module.exports = { deleteThis, insertThis, selectAll  };