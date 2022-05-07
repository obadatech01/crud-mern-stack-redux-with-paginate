import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  // avatar: String,
});

const EmployeeModel = mongoose.model('EmployeeModel', employeeSchema);

export default EmployeeModel;