import React from 'react';
import ReactDOM from 'react-dom/client';
import Contenedor from '../components/Container';

const App = () => {
    console.log("manuela");
    return (
        <div className="task-tital: Lista de tareas">
            <h1 className="parrafo titulo basico">
                Lista de tareas 
            </h1>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
// export default App;