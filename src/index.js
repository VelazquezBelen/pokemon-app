import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { PokemonApp } from './PokemonApp';
import { Provider } from 'react-redux'
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PokemonApp />
      </BrowserRouter>
    </Provider>        
  </React.StrictMode>
);
