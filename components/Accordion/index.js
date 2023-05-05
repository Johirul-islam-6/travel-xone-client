import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className="accordion-item">
      <div className="accordion-title transition-transform" onClick={() => setIsActive(!isActive)}>
      <div className="flex justify-between bg-slate-200 text-blue-700 text-xl px-5 py-2">
        <h5 >{title}</h5>
        <div className="">{isActive ? '-' : '+'}</div>
        </div>
      </div>
      {isActive && <h1 className="accordion-content px-5 py-5 text-md text-slate-500 shadow-xl">{content}</h1>}
    </div>
    </>
  );
};

export default Accordion;