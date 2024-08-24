import React, { useState } from 'react';
import '../styles/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState('');

  const manejarCambio = elemento => {
    console.log('Manjeando el cambio ');
    setInput(elemento.target.value);
    console.log(elemento.target.value)
  }

  const manejarEnvio = elemento => {
    elemento.preventDefault();
    const TareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    console.log(TareaNueva);
    props.onSubmit(TareaNueva);
  }
  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange = {manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;