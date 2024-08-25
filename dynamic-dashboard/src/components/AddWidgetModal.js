import React, { useState } from 'react';

const AddWidgetModal = ({ category, addWidget, closeModal }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = () => {
    addWidget(category, { name: widgetName, text: widgetText });
    closeModal();
  };

  return (
    <div className="modal">
      <input value={widgetName} onChange={(e) => setWidgetName(e.target.value)} placeholder="Widget Name" />
      <input value={widgetText} onChange={(e) => setWidgetText(e.target.value)} placeholder="Widget Text" />
      <button onClick={handleSubmit}>Confirm</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default AddWidgetModal;
