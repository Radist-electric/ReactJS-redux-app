export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const reset = () => {
    return {type: 'RESET', value: 0}};