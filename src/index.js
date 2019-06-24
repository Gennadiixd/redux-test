import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'REFRESH':
            return 0;
        default:
            return state;
    }
}

const store = createStore(reducer)

const incAC = () => {
    return {
        type: 'INC'
    }
}

const decAC = () => {
    return {
        type: 'DEC'
    }
}

const refreshAC = () => {
    return {
        type: 'REFRESH'
    }
}

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(incAC())
})

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(decAC())
})

document.getElementById('refresh').addEventListener('click', () => {
    store.dispatch(refreshAC())
})

const update = ()=>{
    document.getElementById('container').innerText = store.getState();
}

update()

store.subscribe(update)