import React, { useState } from 'react'


const CorrectUseOfFunctionalUpdate = ()=> {
    const [count, setCount] = useState(0)
  
    const incrementCount = () => {
    // Simular un retraso en la actualización del estado
    // Aqui es donde corregimos el error aplicando el uso correcto de la actualizacion "setCount(previusValue => previusValue + 1)"
      setTimeout(() => {
        setCount(previusValue => previusValue + 1)
      }, 1000)
    };
  
    return (
        <div style={{ border: '1px solid green', borderRadius: '5px', margin: '5px', padding: '5px' }}>
            <p>Si haces clic rápidamente en el botón varias veces, esta vez el contador se incrementa de forma correcta.</p>
            <p>Incrementa el contador de acuerdo a la cantidad de click que hayas hecho</p>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Incrementar</button>
      </div>
    )
}

  export default CorrectUseOfFunctionalUpdate