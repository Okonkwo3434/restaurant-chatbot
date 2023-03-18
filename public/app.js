import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import SetAvatar from "./pages/SetAvatar";

export function app() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path = "/signup" element = {<signup/>} />
            <Route path = "/login" element = {<login/>} />
            <Route path = "/setAvatar" element = {<SetAvatar/>} />
            <Route path = "/chat" element = {<chat/>} />
        </Routes>
    </BrowserRouter>

);
}

const express = require("express");
const app = exxpress();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Setup of Error Handling Proccess
const errorHandlers = require(".handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);
if (process.env.ENV=== "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}


module.exports = app;