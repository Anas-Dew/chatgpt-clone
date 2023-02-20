import React from 'react'
import Sidebar from './Sidebar'
const Chat = () => {
    const AddToChat = () => {
        let chatBox = document.getElementById('chat-box');
        let currentText = document.getElementById('chat-input').value
        if (currentText.length <= 0) {
            chatBox.innerHTML = chatBox.innerHTML + "<div style='width:50%' class='p-2 m-4 bg-primary text-white rounded'>You input is empty. Feel free to ask me anything.</div>"
        } else {
            chatBox.innerHTML = chatBox.innerHTML + `<div style="width:50%" class='align-self-end text-end p-2 m-1 bg-success text-white rounded'></div>`
            chatBox.lastChild.textContent = currentText
            document.getElementById('chat-input').value = ""
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
    const ClearChat = () => {
        let chatBox = document.getElementById('chat-box');
        document.getElementById('chat-input').value = ""
        chatBox.innerHTML = "<div style='width:50%' class='p-2 m-4 bg-primary text-white rounded'>Hi, I am Neural Mind AI. You can ask me anything.</div>"

    }
    return (
        <div>
            <Sidebar/>
            <div id='chat-box' style={{ marginBottom: "5rem" }} className='mt-5 p-3 d-flex flex-column'>
                <div style={{ width: "50%" }} className='p-2 m-4 bg-primary text-white rounded'>Hi, I am Neural Mind AI. You can ask me anything.</div>
            </div>



            {/* THESE ARE CHAT BUTTONS */}
            <div>
                <div className="d-flex p-3 fixed-bottom bg-white">
                    <button onClick={ClearChat} type="submit" className="m-1 rounded-pill btn btn-primary"><i class="fa-solid fa-broom-wide"></i></button>
                    <input onKeyDown={e => {
                        if (e.keyCode === 13 && e.ctrlKey) {

                        } else if (e.keyCode === 13) {
                            AddToChat();
                        }
                    }}
                        type="text" className="m-1 rounded-pill form-control" placeholder='Ask me anything' id="chat-input" />
                    <button onClick={AddToChat} id='send' type="submit" className="m-1 rounded-pill btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat