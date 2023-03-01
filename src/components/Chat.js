import React, { useRef } from 'react'
/* eslint-disable */
import userChatTone from "../text-sent.wav"
import aiChatTone from "../text-got.wav"
const Chat = () => {
    const audioSendRef = useRef(null);
    const audioGotRef = useRef(null);
    const AddToChat = () => {
        let chatBox = document.getElementById('chat-box');
        let currentText = document.getElementById('chat-input').value
        if (currentText.length <= 0) {
            audioGotRef.current.play()
            chatBox.innerHTML = chatBox.innerHTML + "<div id='chat-pop' class='p-2 m-4 bg-primary text-white rounded-3'>You input is empty. Feel free to ask me anything.</div>"
        } else if (currentText == "/dark") {
            localStorage.setItem("theme", "dark")
            SendChat("I see where your thoughts are going 😁.")
            window.scrollTo(0,10000)
            setTimeout(()=> {window.location.reload()}, 3000)
        } else if (currentText == "/light") {
            localStorage.setItem("theme", "light")
            SendChat("K.")
            window.scrollTo(0,10000)
            setTimeout(()=> {window.location.reload()}, 3000)
        }
        else {
            audioSendRef.current.play()
            chatBox.innerHTML = chatBox.innerHTML + `<div id='chat-pop' style='background-color:#217b82 !important' class='slide-top align-self-end text-end p-2 m-1 text-white rounded-3'></div>`
            chatBox.lastChild.textContent = currentText
            window.scrollTo(0,10000)
            document.getElementById('chat-input').value = ""
            setTimeout(() => {
                SendChat('Dewbot is typing...')
                window.scrollTo(0,10000)
            }, 1000)
            // setAIChat('...')
            getChat("https://api.openai.com/v1/completions", currentText)
        }
    }
    const ClearChat = () => {
        let chatBox = document.getElementById('chat-box');
        document.getElementById('chat-input').value = ""
        chatBox.innerHTML = "<div id='chat-pop' style='background-color:#29599f !important' class='p-2 m-4 text-white rounded-3'>Hi I am CloneGPT. I'm coded by Anas Dew in 4 hours and 18 minutes. He can also help you build AI web apps if you want.</div>"

    }

    const SendChat = (custom_message) => {
        let chatBox = document.getElementById('chat-box');
        audioGotRef.current.play()
        chatBox.innerHTML += `<div id='chat-pop' style='background-color:#29599f !important' class='slide-top p-2 m-4 text-white rounded-3'>${custom_message}</div>`
        // chatBox.lastChild.textContent = text
    }

    const getChat = async (url = 'https://api.openai.com/v1/completions', question) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPEN_KEY}`
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": `Return response formatted as html content:${question}`,
                "temperature": 0.7,
                "max_tokens": 750,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        }).then(response => response.json()).then(
            data => {
                let response = data['choices'][0]['text'];
                console.log(response);
                document.getElementById('chat-box').lastChild.innerHTML = response
                window.scrollTo(0,10000)
            }
        )
    }

    return (
        <div>
            <div id='chat-box' style={{ marginBottom: "5rem" }} className=' p-3 d-flex flex-column'>
                <div id='chat-pop' style={{ backgroundColor: "#29599f" }} className='p-2 m-4 text-white rounded-3'>Hi I am CloneGPT. I'm coded by Anas Dew in 4 hours and 18 minutes. He can also help you build AI web apps if you want. Here's his contact : <a href='http://anasdew.tech/'>Anas Dew</a></div>
            </div>
            {/* THESE ARE CHAT BUTTONS */}
            <div>
                <audio ref={audioSendRef}>
                    <source src={userChatTone} type="audio/wav" />
                </audio>
                <audio ref={audioGotRef}>
                    <source src={aiChatTone} type="audio/wav" />
                </audio>
                <div id='chat-plate' className=" p-3 fixed-bottom bg-white">
                    <textarea style={{ height: "1rem" }} onKeyDown={e => {
                        if (e.keyCode === 13 && e.ctrlKey) {
                            AddToChat();
                        } else if (e.keyCode === 13) {
                        }
                    }}
                        type="text" className="m-1 rounded form-control" placeholder='Ask me anything' id="chat-input" />
                    {/* <button onClick={ClearChat} type="submit" className="m-1 rounded btn btn-primary">Clear</button> */}
                    <button onClick={AddToChat} id='send' type="submit" className="m-1 rounded btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat