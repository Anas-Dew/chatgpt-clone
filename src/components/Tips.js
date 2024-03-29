import React from 'react'

function FAQs(props) {

    return (
        <div id='faq-block' className='mt-5 d-flex text-center justify-content-center'>
            <div className='d-flex flex-column align-items-center m-3'>
                <i style={{ scale: "1.2" }} className="mt-3 fa-solid fa-wand-magic-sparkles"></i>
                <p className={`mt-2 text-${props.text_theme}`}>News & Updates</p>
                <div id='news-updates-div' style={{display: "flex"}}>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='faq-content'>Use <kbd>/clear</kbd> command to clear chat.</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='faq-content'>Use <kbd>/light</kbd> and <kbd>/dark</kbd> to switch themes.</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='faq-content'>Use <kbd>CTRL + ENTER</kbd> to send chat instantly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs