
import { rentalReducer, selectRentalReducer } from './rental-reducer'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth-reducer';


export const init = () => {
  const reducer = combineReducers({
  	rentals: rentalReducer,
  	rental:  selectRentalReducer,
  	form: formReducer,
  	auth: authReducer
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 // holds the whole state tree of Application
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store; 
}