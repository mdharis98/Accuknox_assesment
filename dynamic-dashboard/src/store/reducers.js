import { ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
  categories: [
    {
      name: 'CSPM Executive Dashboard',
      widgets: [
        { name: 'Cloud Accounts', text: 'Connected (2), Not Connected (2)' },
        { name: 'Cloud Account Risk Assessment', text: 'Failed (1689), Passed (7253)' }
      ]
    },
    {
      name: 'CWPP Dashboard',
      widgets: []
    },
    {
      name: 'Registry Scan',
      widgets: [
        { name: 'Image Risk Assessment', text: '1470 Total Vulnerabilities' }
      ]
    }
  ]
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === action.payload.category) {
            return {
              ...category,
              widgets: [...category.widgets, action.payload.widget]
            };
          }
          return category;
        })
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.name === action.payload.category) {
            return {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.name !== action.payload.widgetName
              )
            };
          }
          return category;
        })
      };
    default:
      return state;
  }
};

export default widgetReducer;
