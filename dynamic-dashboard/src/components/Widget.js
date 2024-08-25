import React from 'react';

const Widget = ({ widget, category, removeWidget }) => {
  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={() => removeWidget(category, widget.name)}>X</button>
    </div>
  );
};

export default Widget;
