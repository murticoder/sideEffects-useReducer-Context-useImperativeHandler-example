import React, { useState, useEffect, Fragment } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useContext } from 'react/cjs/react.development';
import AuthContext from './store/auth-context';


function App() {
  const context = useContext(AuthContext)


  return (
    <Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
