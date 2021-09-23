import React, {useState,useEffect} from "react";


export const State = () => {
    //инициализация useState
    // const [state, setState] = useState( () => {
    //     //more logic
    //     return 0
    // } )

    const [state, setState] = useState({
        count: 0,
        isCounting: false
    })


    useEffect(()=> {
        console.log(state);
    }, [state]);


    const handleButton = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }
    const handleCounting = () => {
        setState({
            ...state,
            isCounting: !state.isCounting
        })
    }

    return(
        <div>
            <button onClick={handleButton}>click</button>
            <button onClick={handleCounting}>isCounting</button>
        </div>
    )
}