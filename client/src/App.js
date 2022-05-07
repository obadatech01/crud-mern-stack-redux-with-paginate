import React from 'react';
import Footer from './components/Layouts/Footer.jsx';
import Employees from './components/Employee/Employees.jsx';
import AddEmployee from './components/AddEmployee/AddEmployee.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditEmployee from './components/EditEmployee/EditEmployee.jsx';

const App = () => {

  return (    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Employees />} />
        <Route exact path='/employee/add' element={<AddEmployee />} />
        <Route exact path='/employee/edit/:id' element={<EditEmployee />} />
        <Route path="*" element={<Employees />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;