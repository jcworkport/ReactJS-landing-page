import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = ({ title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="panel">
      <div className="panel-heading" onClick={toggleOpen}>
        <p className='panel-title'>{title}</p>
        <div className='accordion-open-close'>{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </div>
      <div className={`panel-body ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;