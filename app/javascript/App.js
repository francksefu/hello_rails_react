import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './redux/user/userSlice.js';
import Great from './components/great.js';

 const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);
  return (<Great/>);
}

export default App;