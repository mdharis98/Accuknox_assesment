// Action Types
export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

// Action Creators
export const addWidget = (category, widget) => ({
  type: ADD_WIDGET,
  payload: { category, widget }
});

export const removeWidget = (category, widgetName) => ({
  type: REMOVE_WIDGET,
  payload: { category, widgetName }
});
