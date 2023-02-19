import React from 'react'
const Chat = () => {
    var chatBox = document.getElementById('chat-box');
    const AddToChat = () =>{
        var chatBox = document.getElementById('chat-box');
        let currentText = document.getElementById('chat-input').value
        if (currentText.length <= 0) {
            chatBox.innerHTML = chatBox.innerHTML + "<div style='width:50%' class='p-2 m-4 bg-primary text-white rounded'>You input is empty. Feel free to ask me anything.</div>"
        } else {
            chatBox.innerHTML =  chatBox.innerHTML + `<div style="width:50%" class='align-self-end text-end p-2 m-1 bg-success text-white rounded'>${currentText}</div>`
            console.log('worked')
        }
    }
    const ClearChat = () => {
        chatBox.innerHTML = "<div style='width:50%' class='p-2 m-4 bg-primary text-white rounded'>Hi, I am Neural Mind AI. You can ask me anything.</div>"
    }
    // addToChat();
    return (
        <>
        <div id='chat-box' className='mt-5 p-3 d-flex flex-column'>
            <div className='p-2 m-4 bg-primary text-white rounded'>Hi, I am Neural Mind AI. You can ask me anything.</div>
        </div>
        <div>
            <div className="d-flex p-3 fixed-bottom bg-white">
                <button onClick={ClearChat} type="submit" className="rounded-pill btn btn-primary">Clear</button>
                <input  type="text" className="rounded-pill form-control" placeholder='Ask me anything' id="chat-input"/>
                <button onClick={AddToChat} id='send' type="submit" className="rounded-pill btn btn-primary">Send</button>
            </div>
        </div>
        </>
    )
}

export default Chat