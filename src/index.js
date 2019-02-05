import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, reset} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('reset').addEventListener('click', () => {
    reset(0)
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
