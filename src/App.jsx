import React, {useState} from "react";
import {Clicker} from './Clicker'
import {Clock} from './Clock'

const App = () => {

    const [toggled, setToggled] = useState(false)

    const handler = () => {
        setToggled(!toggled)
    }

    return (
        <>

            <Clicker/>
            {/*<button onClick={handler}>Toggle</button>*/}
            {/*{*/}
            {/*    toggled  ? <Clock/>: <h1>Нет ничего</h1>*/}
            {/*}*/}

        </>
    );


}



export default App;