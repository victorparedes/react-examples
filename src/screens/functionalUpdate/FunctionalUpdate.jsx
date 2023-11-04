
import IncorrectUseOfFunctionalUpdate from "./components/IncorrectUseOfFunctionalUpdate"
import CorrectUseOfFunctionalUpdate from "./components/CorrectUseOfFunctionalUpdate"

const FunctionalUpdate = ()=>{
    return(
        <div style={{ padding: '100px' }}>
            <h1>Functional Update</h1>
            <h2>Haz click repetidas veces en cada boton y ve lo que sucede</h2>
            <IncorrectUseOfFunctionalUpdate />
            <CorrectUseOfFunctionalUpdate />
        </div>
    )
}

export default FunctionalUpdate;

