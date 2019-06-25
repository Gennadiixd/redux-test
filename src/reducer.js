const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            console.log(action.arg)
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'REFRESH':
            return 0;
        default:
            return state;
    }
}

export default reducer;