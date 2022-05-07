import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default (employees = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...employees, action.payload];

    case UPDATE:
      return employees.map((employee) => (employee._id === action.payload._id ? action.payload : employee));

    case DELETE:
      return employees.filter((employee) => (employee._id !== action.payload));
    
    default:
      return employees;
  }
}