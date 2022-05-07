import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, getEmployees } from '../../actions/employeeAction';

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({ name: '', email: '', address: '', phone: '' });
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const dispatchEmp = useDispatch();
  const employees = useSelector((state) => state)
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();    
    const form = e.currentTarget;
    if (form.checkValidity() === false || Object.keys(formErrors).length > 0) {
      setFormErrors(validate(employeeData));      
      console.log(formErrors);  
      e.stopPropagation();
    } else {
      dispatch(createEmployee(employeeData));
      navigate('/');
    }
    setIsSubmit(true);
  }

  const validate = (values) => {
    // const pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const existEmail = employees.filter(employee => employee.email === values.email);
    const errors = {};

    if(!values.name)
      errors.name = "Your name is required!";

    if(!values.email) {
      errors.email = "Your email is required!";
    } 
    
    if(values.email && existEmail.length === 1) {
      errors.email = "Your email is already exist!"; 
    } 
    
    if(values.email && !(values.email.match(pattern))) {
      errors.email = "Your email is not match!";
    }

    if(!values.address)
      errors.address = "Your address is required!";
    
    if(!values.phone)
      errors.phone = "Your phone is required!";

    return errors;
  }

  useEffect(() => {
   dispatchEmp(getEmployees())
  }, [formErrors])

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Add <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <Link to='/' className="btn btn-info" data-toggle="modal"><i className="material-icons">&#xe5c4;</i> <span>Back</span></Link>
                </div>
              </div>
            </div>
            <Form onSubmit={handleSubmit} noValidate validated={isSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName" onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required placeholder="Enter name" name="name" value={employeeData.name} onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })} />
                <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>{!!formErrors.email ? 'true' : 'false'}
                <Form.Control type="email" required placeholder="Enter email" name="email" value={employeeData.email} onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })} isInvalid={formErrors.email} />
                <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" required placeholder="Enter address" name="address" value={employeeData.address} onChange={(e) => setEmployeeData({ ...employeeData, address: e.target.value })} />
                <Form.Control.Feedback type="invalid">{formErrors.address}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" required placeholder="Enter phone" name="phone" value={employeeData.phone} onChange={(e) => setEmployeeData({ ...employeeData, phone: e.target.value })} />
                <Form.Control.Feedback type="invalid">{formErrors.phone}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="success" type="submit">
                Add
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEmployee;