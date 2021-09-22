import React, {useState, useEffect} from "react";


export const Clicker = () => {

    const [count, setCount] = useState(0)

    const handlerIncrement = () => {
        setCount(count + 1)
    }

    const handlerDicrement = () => {
        setCount(count - 1)
    }

    //только при монтировании
    // useEffect(()=> {
    //     console.log('hello from clicker' )
    // }, [])


    //при изменени count и монтировании
    // useEffect(()=> {
    //     console.log('hello from clicker' ,count)
    // }, [count])

    //При монтировании и размонтировании
    useEffect(()=> {
        console.log('hello from clicker' ,count)
        return () => console.log('goodbye')
    }, [count])


    return (
        <div style={{margin: 'auto', width: '300px'}} className="App">
            <button onClick={handlerDicrement}>Минус</button>
            <b style={countStyle}>{count}</b>
            <button onClick={handlerIncrement}>Плюс</button>
        </div>
    )

}

const countStyle = {margin: '0 2rem'}