import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderIntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderIntireTree(store.getState());
store.subscriber(rerenderIntireTree);