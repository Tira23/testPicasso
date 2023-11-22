import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App";
import {store} from "./store";
import {Provider} from "react-redux";
import Post from "./components/Post/Post";
import Paper from "./components/Paper/Paper";
import {Container} from "@mui/material";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/posts/:id",
        element: <Post/>,
    },
]);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Container maxWidth="lg">
                <Paper>
                    <RouterProvider router={router}/>
                </Paper>
            </Container>
        </Provider>
    </React.StrictMode>
);
