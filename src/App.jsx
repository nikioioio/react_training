import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "TEST_INCREMENT_RED":
            return {
                ...state,
                r: state.r + 50
            };
        case "TEST_INCREMENT_BLUE":
            return {
                ...state,
                b: state.b + 50
            }
        default:
            return state;

    }

}


const App = () => {

    const [{r, g, b},dispatch] = useReducer(reducer, {r: 0, g: 50, b: 50})

    return (
        <>
            <h1>Фраза меняющая цвет</h1>
            <button onClick={() => dispatch({type: 'TEST_INCREMENT_RED'})}>testRedIncrement</button>
            <button onClick={() => dispatch({type: 'TEST_INCREMENT_BLUE'})}>testBlueIncrement</button>

        </>
    );


}


export default App;