import React from 'react'

function FAQs() {

    return (
        <div id='faq-block' className='mt-5 d-flex text-center justify-content-center'>
            <div className='d-flex flex-column align-items-center m-3'>
                <i style={{ scale: "1.2" }} className="mt-3 fa-solid fa-wand-magic-sparkles"></i>
                <p className='mt-2 text-white'>News & Updates</p>
                <div id='news-updates-div' style={{display: "flex"}}>
                    <div className='d-flex flex-column align-items-center'>
                        <p className='faq-content'>Now you'll hear tone while texting.</p>
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