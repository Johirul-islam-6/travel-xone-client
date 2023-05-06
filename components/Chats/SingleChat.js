import React from 'react';

function SingleChat() {
    return (
        <div className="flex gap-4 bg-blue-50 rounded-2xl my-2 px-2 py-2 cursor-pointer">
            <div className="">
                <img className="w-14 h-14 rounded-2xl" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg" alt="" />
            </div>
            <dir className="flex-grow flex flex-col justify-between">
                <h3 className="font-semibold text-xl">David</h3>
                <p className="">Price ? . 3h</p>
            </dir>
        </div>
    );
}

export default SingleChat;