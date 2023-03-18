import React, { useState} from "react";
import styled from "styled-component";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io"
import { BsemojiSmileFill } from "react -icons/bs";
export default function chatIput() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("")};

    const HandleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);

    };

    const handleEmojiClick = (event, emoji) => {
        let message = msg;
        message += emoji.emoji;
        setMsg(message);

    };

    return (
        <container>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>}
                </div>
            </div>
            <form className="input-container">
                <input
                type="text"
                placeholder="type your message here"
                value={msg} onChange = {(e) => setMsg(e.target.value)}
                >
                button className="submit"
                
                </input>

            </form>

        </container>
    );

// Setup styled-component react css framework embeded in code to easy css implementation. 

const Container = styled. className=div`

display:grid;
grid-template-columns: 5% 95%;
align-items: center;
background-color: #080420;
padding: 0 2rem;
padding-bottom: 0.3rem
.button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
        position:relative;
        svg {
            font-size: 1.5rem;
            color: #ffff00c8;
        }
        .emoji-picker-react {
            position:absolute;
            top:-350px;
            background-color: #080420;
            box-shadow: 0 5px 10px #9a86f3;
            border-color: #9186f3;
            .emoji-scroll-wrapper::-webkit-scrollbar {
                background-color: #080420;
                width: 5px;
                &-thumb {
                    background-color: #9186f3;
                }
            }}

        .emoji-categories {
            button {
                filtere: contrast(0);
                }
            }
        
    .emoji-search {
        background-color: transparent;
        boarder-color: #9186f3;
    }
    .emoji-group:before {
        background-color: #084020;
    }
    }   

.input-container {
    width: 100%;
    boarder-radius: 2rem;
    display: flex;
    align-content: center;
    gap 2rem;
    background-color: #ffffff34;
    input {
        border: nodemon;
        padding-left: 1rem;
        font-size: 1 rem;
        &:: selection {
            background-color: #9186f3;
        }  
        &: focus {
            outline: nodemon;
        }        
    }
}

button {
    padding: 0.3rem 2 rem;
    border-radius: 2 rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9a86f3;
    border: nodemon;
@media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0.3rem;
}
    svg {
        font-size: 2rem;
        color: White
    }
}

`  
