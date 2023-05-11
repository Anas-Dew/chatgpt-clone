import React, { useRef, useState } from 'react'
/* eslint-disable */
import userChatTone from "../text-sent.wav"
import aiChatTone from "../text-got.wav"
import sendChatIcon from "../send-chat.png"
const Chat = () => {
    const [LIMIT_CROSSED, setLIMIT_CROSSED] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         SendChat("You've got 10 free credits. Enjoy.")
    //     }, 1000)
    // }, []);
    // const limit_update = () => {
    //     let curr_limit = window.localStorage.getItem('limit')
    //     if (curr_limit) {
    //         if (!localStorage.getItem('API_KEY')) {
    //             if (parseInt(localStorage.getItem('limit')) >= 10) {
    //                 alert("You've reached the limit. Please input your API key to use futher.")
    //                 setLIMIT_CROSSED(true)
    //                 let api = prompt('Enter your OpenAI API key below.')
    //                 localStorage.setItem('API_KEY', api)
    //             }
    //             localStorage.setItem('limit', parseInt(localStorage.getItem('limit')) + 1)
    //         }
    //     } else {
    //         localStorage.setItem('limit', 0)
    //     }
    // }


    var chatHistory = `The following is a conversation with an AI. The assistant is helpful, creative, clever, and very friendly. And he talks in the genz style.`
    const audioSendRef = useRef(null);
    const audioGotRef = useRef(null);
    const ClearChat = () => {
        let chatBox = document.getElementById('chat-box');
        document.getElementById('chat-input').value = ""
        chatBox.innerHTML = "<div id='chat-pop' style='background-color:#29599f !important' class='p-2 m-4 text-white rounded-3'>Hi I am DewChat. I'm coded by Anas Dew in 4 hours and 18 minutes. He can also help you build AI web apps or any other customized solution if you want.</div>"

    }
    const AddToChat = () => {
        // limit_update()
        // if (LIMIT_CROSSED === true) {
        //     let api = prompt('Enter your OpenAI API key below.')
        //     localStorage.setItem('API_KEY', api)
        // } else {

            let chatBox = document.getElementById('chat-box');
            let currentText = document.getElementById('chat-input').value
            if (currentText.length <= 0) {
                audioGotRef.current.play()
                chatBox.innerHTML = chatBox.innerHTML + "<div id='chat-pop' class='p-2 m-4 bg-primary text-white rounded-3'>You input is empty. Feel free to ask me anything.</div>"
            } else if (currentText == "/dark") {
                localStorage.setItem("theme", "dark")
                SendChat("I see where your thoughts are going 😁.")
                window.scrollTo(0, 10000)
                setTimeout(() => { window.location.reload() }, 3000)
            } else if (currentText == "/light") {
                localStorage.setItem("theme", "light")
                SendChat("K.")
                window.scrollTo(0, 10000)
                setTimeout(() => { window.location.reload() }, 3000)
            } else if (currentText == "/clear") {
                SendChat("Woosh!")
                window.scrollTo(0, 10000)
                setTimeout(() => { ClearChat() }, 1000)
            }
            else {
                audioSendRef.current.play()
                chatBox.innerHTML = chatBox.innerHTML + `<div id='chat-pop' style='background-color:#217b82 !important' class='slide-top align-self-end text-end p-2 m-1 text-white rounded-3'></div>`
                chatBox.lastChild.textContent = currentText
                window.scrollTo(0, 10000)
                document.getElementById('chat-input').value = ""
                setTimeout(() => {
                    SendChat('Dewbot is expired but you can still use it by using your own api...')
                    window.scrollTo(0, 10000)
                }, 500)

                if (!localStorage.getItem('open_api_token')) {
                    let key = prompt("Enter your open ai token below (it is safe and saved in your browser.)")
                    if(key){
                        localStorage.setItem('open_api_token', key)
                        getChat("https://api.openai.com/v1/completions", currentText)
                    } else {
                        setTimeout(() => {
                            document.getElementById('chat-box').lastChild.innerHTML = `<video style="width: 70vh;
                            border-radius: 9px;" src="https://dews-files.s3.us-east-005.backblazeb2.com/dewchat.mp4" controls controlsList="nodownload"></video>`
                            
                        }, 3000);
                    }
                } else {
                    getChat("https://api.openai.com/v1/completions", currentText)
                }

                // setAIChat('...')
            }
        // }
    }

    const SendChat = (custom_message) => {
        let chatBox = document.getElementById('chat-box');
        audioGotRef.current.play()
        chatBox.innerHTML += `<div id='chat-pop' style='background-color:#29599f !important' class='slide-top p-2 m-4 text-white rounded-3'>${custom_message}</div>`
        // chatBox.lastChild.textContent = text
    }

    const getChat = async (url = 'https://api.openai.com/v1/completions', question) => {
        chatHistory += chatHistory + question
        // var key = ''
        // if (localStorage.getItem('API_KEY')) {
        //     key = localStorage.getItem('API_KEY')
        // } else {
        //     key = process.env.REACT_APP_OPEN_KEY
        // }
        // console.log("CHAT HISTORY : " + chatHistory);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("open_api_token")}`
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": `Return response formatted as html content:${question}`,
                "temperature": 0.8,
                "max_tokens": 750,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })

        }).then(response => response.json()).then(
            data => {
                let response = data['choices'][0]['text'];
                // console.log(response);
                document.getElementById('chat-box').lastChild.innerHTML = response
                chatHistory = chatHistory + response
                // console.log("CHAT HISTORY : " + chatHistory);
                window.scrollTo(0, 10000)
            }
        )
    }

    const [Rows, setRows] = useState(1)
    return (
        <div>
            <div id='chat-box' style={{ marginBottom: "5rem" }} className='p-3 d-flex flex-column'>
                <div id='chat-pop' style={{ backgroundColor: "#29599f" }} className='p-2 m-4 text-white rounded-3'>Hi I am DewChat. I'm coded by Anas Dew in 4 hours and 18 minutes. He can also help you build AI web apps or any other customized solution if you want. Here's his contact : <a href='http://anasdew.tech/'>Anas Dew</a></div>
            </div>
            <div>
                <audio ref={audioSendRef}>
                    <source src={userChatTone} type="audio/wav" />
                </audio>
                <audio ref={audioGotRef}>
                    <source src={aiChatTone} type="audio/wav" />
                </audio>
                {/* THESE ARE CHAT BUTTONS */}
                <div id='chat-plate' className=" p-3 fixed-bottom bg-white align-items-end">
                    <textarea rows={Rows} onKeyDown={e => {
                        if (e.keyCode === 13 && e.ctrlKey) {
                            AddToChat();
                        } else if (e.keyCode === 13) {
                            setRows(Rows + 1)
                        }
                    }}
                        type="text" className="m-1 rounded form-control" placeholder='Ask me anything' id="chat-input" />
                    <button onClick={AddToChat} style={{ height: "2.5rem", width: "0px" }} id='send' type="submit" className="m-1 rounded btn btn-primary"><img src={sendChatIcon} /></button>
                    {/* <button onClick={ClearChat} type="submit" className="m-1 rounded btn btn-primary">Clear</button> */}
                </div>
            </div>
        </div>
    )
}

export default Chat