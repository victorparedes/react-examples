import React, { useState } from 'react'

const IncorrectUseOfFunctionalUpdate = ()=> {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    // Simular un retraso en la actualización del estado
    // Aqui esta el error! el set count actualiza directamente el state "setCount(count + 1)"
    setTimeout(() => { setCount(count + 1) }, 1000)
  };

  return (
    <div style={{ border: '1px solid red', borderRadius: '5px', margin: '5px', padding: '5px' }}>
        <p>Si haces clic rápidamente en el botón varias veces, notarás que el contador no se incrementa correctamente.</p>
        <p>Incrementa de uno en uno sin importar cuantos click realizaste</p>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Incrementar</button>
    </div>
  )
}

export default IncorrectUseOfFunctionalUpdate