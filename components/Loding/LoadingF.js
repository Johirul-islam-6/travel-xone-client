import React from 'react';

const LoadingF = () => {
    return (
        <>
            <span class=" flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                <div className="btn flex justify-center"></div>
            </span>
        </>
    );
};

export default LoadingF;