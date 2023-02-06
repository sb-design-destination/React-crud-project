import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/mainrouter';
import 'mdb-ui-kit/css/mdb.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BrowserRouter><MainRouter/></BrowserRouter>);