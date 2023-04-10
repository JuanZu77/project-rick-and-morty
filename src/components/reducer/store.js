import {createStore} from 'redux';
import reducer from './reducer'; 

/* Aqui creamos el store
const store = createStore (reducer)*/

/*Store para utilziar herramientas redux en el navegador*/
const store = createStore(
    reducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;