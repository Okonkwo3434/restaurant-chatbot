import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { allUsersRoute, host} from "../utils/apiRoutes";
import contacts from "../components/contacts";
import welcome from "../components/welcome";
import chatContainer from "../components/chatContainer";
function chat() {
    const socket = useRef();
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(async () => {
        if (!localStorage.getItem("chat-app-user")) {
            navigate("/login");
        } else {
            setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
            setIsLoaded(true);
        }
    },[]);
    useEffect(()=> {
        if (currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser]);
    useEffect(async () => {
        if (currentUser) {

        }
    })

}
