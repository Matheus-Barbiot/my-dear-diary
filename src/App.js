import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Diary from './pages/diary';
import './App.css';


function App() {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/diary",
                element: <Diary />,
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
