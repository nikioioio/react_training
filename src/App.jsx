import React, {useState} from "react";


const App = () => {

    const [count,  setCount] = useState(0)

    const handlerIncrement = () => {
        setCount(count+1)
    }

    const handlerDicrement = () => {
        setCount(count-1)
    }


        return (
            <div style={{margin: 'auto',width: '300px'}} className="App"
            >
                <button onClick={handlerDicrement}>Минус</button>
                <b style={countStyle}>{count}</b>
                <button onClick={handlerIncrement}>Плюс</button>
            </div>
        );


}

const countStyle = {margin: '0 2rem'}

export default App;