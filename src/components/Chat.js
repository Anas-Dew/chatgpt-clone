import React, { useRef } from 'react'
/* eslint-disable */
const Chat = () => {
    const audioSendRef = useRef(null);
    const audioGotRef = useRef(null);
    const AddToChat = () => {
        let chatBox = document.getElementById('chat-box');
        let currentText = document.getElementById('chat-input').value
        if (currentText.length <= 0) {
            audioGotRef.current.play()
            chatBox.innerHTML = chatBox.innerHTML + "<div id='chat-pop' class='p-2 m-4 bg-primary text-white rounded'>You input is empty. Feel free to ask me anything.</div>"
        } else {
            audioSendRef.current.play()
            chatBox.innerHTML = chatBox.innerHTML + `<div id='chat-pop' style='background-color:#217b82 !important' class='slide-top align-self-end text-end p-2 m-1 text-white rounded'></div>`
            chatBox.lastChild.textContent = currentText
            document.getElementById('chat-input').value = ""
            chatBox.scrollTop = chatBox.scrollHeight;
            getChat("https://api.openai.com/v1/completions", currentText)
        }
    }
    const ClearChat = () => {
        let chatBox = document.getElementById('chat-box');
        document.getElementById('chat-input').value = ""
        chatBox.innerHTML = "<div id='chat-pop' style='background-color:#29599f !important' class='p-2 m-4 text-white rounded'>Hi I am CloneGPT. I'm coded by Anas Dew in 4 hours and 18 minutes. He can also help you build AI web apps if you want.</div>"

    }

    const SendChat = (text) => {
        let chatBox = document.getElementById('chat-box');
        audioGotRef.current.play()
        chatBox.innerHTML += `<div id='chat-pop' style='background-color:#29599f !important' class='slide-top p-2 m-4 text-white rounded'></div>`
        chatBox.lastChild.textContent = text
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
                "prompt": `DO IT NOW:${question}`,
                "temperature": 0.7,
                "max_tokens": 256,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        }).then(response => response.json()).then(
            data => {
                let response = data['choices'][0]['text'];
                console.log(response);
                SendChat(response)
            }
        )
    }

    return (
        <div>
            <div id='chat-box' style={{ marginBottom: "5rem" }} className=' p-3 d-flex flex-column'>
                <div id='chat-pop' style={{ backgroundColor: "#29599f" }} className='p-2 m-4 text-white rounded'>Hi I am CloneGPT. I'm coded by Anas Dew in 4 hours and 18 minutes. He can also help you build AI web apps if you want. Here's his contact : <a href='http://anasdew.tech/'>Anas Dew</a></div>
            </div>
            {/* THESE ARE CHAT BUTTONS */}
            <div>
                <audio ref={audioSendRef}>
                    <source src="../text-sent.wav" type="audio/wav" />
                </audio>
                <audio ref={audioGotRef}>
                    <source src="../text-got.wav" type="audio/wav" />
                </audio>
                <div id='chat-plate' className="d-flex p-3 fixed-bottom bg-white">
                    <textarea style={{ height: "1rem" }} onKeyDown={e => {
                        if (e.keyCode === 13 && e.ctrlKey) {
                            AddToChat();
                        } else if (e.keyCode === 13) {
                        }
                    }}
                        type="text" className="m-1 rounded form-control" placeholder='Ask me anything' id="chat-input" />
                    <button onClick={ClearChat} type="submit" className="m-1 rounded btn btn-primary">C</button>
                    <button onClick={AddToChat} id='send' type="submit" className="m-1 rounded btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat