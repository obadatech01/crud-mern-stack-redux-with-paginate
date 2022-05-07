import axios from 'axios';

const url = 'http://localhost:5000/employees';

export const getEmployees = () => axios.get(url);
export const createEmployee = (newEmployee) => axios.post(url, newEmployee);
export const updateEmployee = (id, updatedEmployee) => axios.patch(`${url}/${id}`, updatedEmployee);
export const deleteEmployee = (id) => axios.delete(`${url}/${id}`);