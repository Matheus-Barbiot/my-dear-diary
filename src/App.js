import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contato';
import './App.css';


function App() {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contato",
                element: <Contato />,
            },
        ]
    )
    
    return (
        <>
        <RouterProvider router={router} />
        </>
    );
}

export default App;
