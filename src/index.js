import React from 'react';
import ProviderContext from "./components/ProviderContext";

import { BrowserRouter } from 'react-router-dom';
import  ReactDOM  from 'react-dom/client';



// componentes

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
        <ProviderContext>
                <App />
        </ProviderContext>
</BrowserRouter>
);