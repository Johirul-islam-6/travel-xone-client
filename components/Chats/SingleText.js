import React from 'react';

function SingleText() {

    const randomNumber = Math.round(Math.random());
    console.log(randomNumber);

    return (
        randomNumber === 0 ?
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img className="" src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"} />
                    </div>
                </div>
                <div className="chat-bubble bg-blue-100 text-black">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            :
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img className="" src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"} />
                    </div>
                </div>
                <div className="chat-bubble bg-blue-200 text-black">It was said that you would, destroy the Sith, not join them.</div>
            </div>
    );
}

export default SingleText;