import React from 'react'
/* eslint-disable */ 
const Chat = () => {
    const AddToChat = () => {
        let chatBox = document.getElementById('chat-box');
        let currentText = document.getElementById('chat-input').value
        if (currentText.length <= 0) {
            chatBox.innerHTML = chatBox.innerHTML + "<div style='width:70%' class='p-2 m-4 bg-primary text-white rounded'>You input is empty. Feel free to ask me anything.</div>"
        } else {
            chatBox.innerHTML = chatBox.innerHTML + `<div style="width:70%" class='align-self-end text-end p-2 m-1 bg-success text-white rounded'></div>`
            chatBox.lastChild.textContent = currentText
            document.getElementById('chat-input').value = ""
            chatBox.scrollTop = chatBox.scrollHeight;
            getChat("https://api.openai.com/v1/completions", currentText)
        }
    }
    const ClearChat = () => {
        let chatBox = document.getElementById('chat-box');
        document.getElementById('chat-input').value = ""
        chatBox.innerHTML = "<div style='width:70%' class='p-2 m-4 bg-primary text-white rounded'>Hi I am CloneGPT, made by Anas Dew in 4 hours and 18 minutes. You can ask me anything you want.</div>"

    }

    const SendChat = (text) => {
        let chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += `<div style='width:70%' class='p-2 m-4 bg-primary text-white rounded'></div>`
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
                <div style={{ width: "70%"}} className='p-2 m-4 bg-primary text-white rounded'>Hi I am CloneGPT, made by Anas Dew in 4 hours and 18 minutes. You can ask me anything you want.</div>
            </div>

            {/* THESE ARE CHAT BUTTONS */}
            <div>
                <div className="d-flex p-3 fixed-bottom bg-white">
                    <textarea style={{height: "1rem"}} onKeyDown={e => {
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