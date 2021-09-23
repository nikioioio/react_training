import React, {useState, useEffect, useRef} from "react";


export const Clicker = () => {

    const [count, setCount] = useState(0);
    const [isPause, setIsPause] = useState(true);
    const [nameButtonStart, setNameButtonStart] = useState('Start');
    const timerId = useRef(null);

    const initInterval = () => {
        timerId.current = setInterval(() => {
            setCount((prevValue) => prevValue + 1)
        }, 1000);
    }

    useEffect(() => {

        if (localStorage.getItem('count')) {
            setCount(parseInt(localStorage.getItem('count')));
            setIsPause(localStorage.getItem('isPause'));
            setNameButtonStart(localStorage.getItem('nameButtonStart'));
        }

    }, [])

    useEffect(() => {
        !isPause ? initInterval() : clearInterval(timerId.current)

        console.log('Тело isPause ', isPause)

        return () => {
            console.log( 'isPause ',isPause)
        }
    }, [isPause])


    useEffect(() => {

        localStorage.setItem('count', count);
        localStorage.setItem('isPause', isPause);
        localStorage.setItem('nameButtonStart', nameButtonStart);

    },[count])


    const startInterval = () => {
        if (isPause) {
            setIsPause(false);
            setNameButtonStart('Stop');
        } else {
            setIsPause(true);
            setNameButtonStart('Start');
        }
    }


    const resetInterval = () => {
        localStorage.clear();
        setCount(0);
        setIsPause(true);
        setNameButtonStart('Start');

    }


    const unmount = () => {
        setIsPause(null)
    }

    return (
        <div style={{margin: 'auto', width: '500px'}} className="App">
            <h1>React Timer</h1>
            <span style={mainStyle}>{count}</span>
            <br/>
            <div style={mainStyle1}>
                <button onClick={startInterval}>{nameButtonStart}</button>
                <button onClick={resetInterval}>reset</button>
                {/*<button onClick={unmount}>Umn</button>*/}
            </div>

        </div>
    );


}


const mainStyle = {position: 'absolute', left: '0', right: '0', margin: 'auto', width: '350px'}
const mainStyle1 = {position: 'absolute', left: '0', right: '0', margin: 'auto', width: '430px'}
// const countStyle = {position:'absolute'}