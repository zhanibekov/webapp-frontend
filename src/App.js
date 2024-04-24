import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom'
import React from "react";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from "./redux/slices/Auth";


function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth);
    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, [dispatch]);
    return ( <
        >
        <
        Header / >
        <
        Container maxWidth = "lg" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/posts/:id"
        element = { < FullPost / > }
        /> <
        Route path = "/add-post"
        element = { < AddPost / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Registration / > }
        /> < /
        Routes > <
        /Container> < / >
    );
}

export default App;