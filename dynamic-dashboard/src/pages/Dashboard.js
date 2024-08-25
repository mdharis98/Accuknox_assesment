import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from '../components/Category';
import { addWidget, removeWidget } from '../store/actions';

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleAddWidget = (category, widget) => {
    dispatch(addWidget(category, widget));
  };

  const handleRemoveWidget = (category, widgetName) => {
    dispatch(removeWidget(category, widgetName));
  };

  return (
    <div className="dashboard">
      {categories.map((category, index) => (
        <Category
          key={index}
          category={category}
          addWidget={handleAddWidget}
          removeWidget={handleRemoveWidget}
        />
      ))}
    </div>
  );
};

export default Dashboard;
