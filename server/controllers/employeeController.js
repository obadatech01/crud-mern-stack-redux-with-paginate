import express from 'express';
import mongoose from 'mongoose';
import EmployeeModel from '../models/employeeModel.js';

export const getAllEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.find();

    res.status(200).json(employee); 
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createEmployee = async (req, res) => {
  const { name, email, address, phone } = req.body;
  
  if(!name || !email || !address || !phone) res.status(406).json({ err: "Please! Check your fields." });

  const newEmployee = new EmployeeModel({ name, email, address, phone });
  
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateEmployee = async (req, res) => {
  const {id} = req.params;
  const { name, email, address, phone } = req.body; // avatar

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedEmployee = { name, email, address, phone, _id: id }; // avatar

  await EmployeeModel.findByIdAndUpdate(id, updatedEmployee, {new: true})

  res.json(updatedEmployee);
}

export const deleteEmployee = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await EmployeeModel.findByIdAndRemove(id);
  
  res.json({message: 'Employee deleted successfully'});
}
