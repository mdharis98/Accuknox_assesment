import React from 'react';
import Widget from './Widget';

const Category = ({ category, addWidget, removeWidget }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widgets">
        {category.widgets.map((widget, index) => (
          <Widget key={index} widget={widget} removeWidget={removeWidget} category={category.name} />
        ))}
      </div>
      <button onClick={() => addWidget(category.name)}>+ Add Widget</button>
    </div>
  );
};

export default Category;
