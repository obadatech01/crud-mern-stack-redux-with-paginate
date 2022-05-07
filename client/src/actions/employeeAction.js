import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

import * as api from '../api/indexApi.js';

// Get Employees
export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.getEmployees();
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(error.message); 
  }
}

// Create Employees
export const createEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.createEmployee(employee);
    dispatch({type: CREATE, payload: data});
  } catch (error) {
    console.log(error.message); 
  }
}

// Update Employees
export const updateEmployee = (id, employee) => async (dispatch) => {
  try {
    const { data } = await api.updateEmployee(id, employee);
    dispatch({type: UPDATE, payload: data});
  } catch (error) {
    console.log(error.message); 
  }
}

// Delete Employees
export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.deleteEmployee(id);

    dispatch({type: DELETE, payload: id});
  } catch (error) {
    console.log(error.message); 
  }
}