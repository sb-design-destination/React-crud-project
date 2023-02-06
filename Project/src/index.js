import React from 'react';
import ReactDOM from 'react-dom/client';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter } from 'react-router-dom';
import Reactrouter from "./Reactrouter.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Reactrouter/>
 </BrowserRouter>
)

