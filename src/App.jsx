import React, {useState} from "react";
import {Clicker} from './Clicker'

const App = () => {

    const [isClicker, setClicker] = useState(true);




    return (
        <>

            <button onClick={()=> setClicker(!isClicker)}>Toggle</button>
            {isClicker && <Clicker/>}

        </>
    );


}



export default App;