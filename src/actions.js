export const inc = (arg) => {    
    return {
        type: 'INC',
        arg,
    }
}

export const dec = () => {
    return {
        type: 'DEC'
    }
}

export const refresh = () => {
    return {
        type: 'REFRESH'
    }
}