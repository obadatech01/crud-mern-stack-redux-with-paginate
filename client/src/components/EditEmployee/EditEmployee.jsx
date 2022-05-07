import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateEmployee } from '../../actions/employeeAction';

const EditEmployee = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employees = useSelector((state) => id ? state.filter(employee => employee._id === id) : null);
  const [employeeData, setEmployeeData] = useState({ name: '', email: '', address: '', phone: '' });

  useEffect(() => {
    if (employees[0]) setEmployeeData(employees[0]);
  }, [employees[0]])

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmploy = employeeData.name && employeeData.email && employeeData.address && employeeData.phone ? true : false;

    if (validEmploy) {
      dispatch(updateEmployee(id, employeeData));
      navigate('/');
    }
  }
  
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Edit <b>{employeeData.name}</b></h2>
                </div>
                <div className="col-sm-6">
                  <Link to='/' className="btn btn-info" data-toggle="modal"><i className="material-icons">&#xe5c4;</i> <span>Back</span></Link>
                </div>
              </div>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName" onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" value={employeeData.name} onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={employeeData.email} onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" name="address" value={employeeData.address} onChange={(e) => setEmployeeData({ ...employeeData, address: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone" name="phone" value={employeeData.phone} onChange={(e) => setEmployeeData({ ...employeeData, phone: e.target.value })} />
              </Form.Group>

              <Button variant="success" type="submit">
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditEmployee;