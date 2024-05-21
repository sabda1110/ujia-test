import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redex/store.ts';
import NavbarContextProvider from './contex/NavbarContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavbarContextProvider>
        <App />
      </NavbarContextProvider>
    </Provider>
  </React.StrictMode>
);
