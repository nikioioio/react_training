export const reducer  = (state, action) => {
    switch (action.type){
        case 'DID_AMOUNT_COMPONENT':
            return{
                count: parseInt(localStorage.getItem('count')),
                isPause: localStorage.getItem('isPause'),
                nameButtonStart: localStorage.getItem('nameButtonStart')
            };

        case 'SET_COUNT_ONLY':
            return {
                ...state,
                count: state.count + 1,
            };

        case 'IS_PAUSE':
            return {
                ...state,
                isPause: false,
                nameButtonStart: 'Stop',
            };
        case 'NOT_IS_PAUSE':
            return {
                ...state,
                isPause: true,
                nameButtonStart: 'Start',
            };
        case 'CLEAR':
            return {
                count: 0,
                isPause: true,
                nameButtonStart: 'Start',
            };

        default:
            return state;
    }
}