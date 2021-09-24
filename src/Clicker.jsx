import React, {useState, useEffect, useRef, useReducer} from "react";
import {reducer} from './reducer'

export const Clicker = () => {

    const initState = {
        count: 0,
        isPause: true,
        nameButtonStart: 'Start'
    }

    const [{count, isPause, nameButtonStart}, dispatch] = useReducer(reducer, initState)
    const timerId = useRef(null);

    const initInterval = () => {
        timerId.current = setInterval(() => {
            dispatch({type: 'SET_COUNT_ONLY'})
        }, 1000);
    }

    useEffect(() => {

        if (localStorage.getItem('count')) {
            dispatch({type: 'DID_AMOUNT_COMPONENT'})
        }

    }, [])

    useEffect(() => {
        !isPause ? initInterval() : clearInterval(timerId.current)
    }, [isPause])


    useEffect(() => {

        localStorage.setItem('count', count);
        localStorage.setItem('isPause', isPause);
        localStorage.setItem('nameButtonStart', nameButtonStart);

    },[count])


    const startInterval = () => {
        if (isPause) {
            dispatch({type: 'IS_PAUSE'})
        } else {
            dispatch({type: 'NOT_IS_PAUSE'})
        }
    }


    const resetInterval = () => {
        localStorage.clear();
        dispatch({type: 'CLEAR'})
    }

    return (
        <div style={{margin: 'auto', width: '500px'}} className="App">
            <h1>React Timer</h1>
            <span style={mainStyle}>{count}</span>
            <br/>
            <div style={mainStyle1}>
                <button onClick={startInterval}>{nameButtonStart}</button>
                <button onClick={resetInterval}>reset</button>
            </div>

        </div>
    );


}


const mainStyle = {position: 'absolute', left: '0', right: '0', margin: 'auto', width: '350px'}
const mainStyle1 = {position: 'absolute', left: '0', right: '0', margin: 'auto', width: '430px'}
// const countStyle = {position:'absolute'}