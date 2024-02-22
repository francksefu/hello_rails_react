// Entry point for the build script in your package.json


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import  { store } from './redux/store.js'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './redux/user/userSlice.js';
import Great from './components/great.js';


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);
  return (<Great/>);
}

ReactDOM.render(
 <Provider store={store}> <App/> </Provider>,
  document.getElementById('root'),
);