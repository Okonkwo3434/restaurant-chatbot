import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {getAllMessagesRoute, sendMessageRoute} from "../utils/apiRoutes";
import styled from "styled-components";
import chatInput from  "./chatInput";
import logout from "./logout";
import {v4 as uuidv4} from "uuid";

export default function chatContainer({ currentChat, currentUser, socket}) {
    const [messages, setMessages] = useState([]);
    const [ arrivalMessage, setArrivalMessage] = useState(null)
    const scrolRef = useRef();

    useEffect(async () => {
        const response = await axios.post(getAllMessagesRoute, {
            from: currentUser._id,
            to: currentChat._id,
        });
        setMessages(response.data);
    }, [currentChat]);
    
    const handleSendMsg = async (msg) => {
        await axios.post(sendMessageRoute, {
            from: currentUser._id,
            to: currentChat.id,
            message: msg,
        });
        socket.current.emit("send-msg", {
            to: currentChat._id,
            from: currentUser.id,
            message: msg,
        });
        const msgs = [...messages];
        msgs.push({ fromSelf: true, message: msg});
        setMessage(msgs);
    };

    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-receive", (msg) => {
                setArrivalMessage({ fromSelf: false, message: msg});
            });
        }
    }, []);

    useEffect(() => {
        arrivalMessage && setMessage((prev) =>[...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behaviour: "smooth"});
    })

    return (
        <>
        {currentChat && (
            <Container>
                <div className="chat-header">
                    <div className="user-details">
                        <div className="avatar">
                            <img>
                            src={'data:image/svg+xml;base64,${currentChat.avatarImagee}'} alt="avatar"
                            </img>

                        </div>
                        <div className="username">
                            <h3>{currentChat.username}</h3>
                        </div>

                    </div>
                    <Logout/>

                </div>
                <div className="chat-message"></div>
                <chatInput handleSendMsg={handleSendMsg} />
            </Container>
        )}
        </>
    );
}

// Setup styled-component react css framework embeded in code to easy css implementation. 

const container = styled.className=div`
padding-top: 1rem;
.chat-header {
    dispaly: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
        display: flex;
        align-items: center;
        gap: 1rem;
        avatar {
            img {
                height: 3rem;
            }
        }
        .username {
            h3 {
                color: white;
            }
        }
    }
}    
exports default ChatContainer

`
