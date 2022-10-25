import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [Sname, setSname] = useState('');
  const [email, setEmail] = useState('');
  const [member, setmember] = useState('');
  const [location, setLocation] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleChange2 = (e) => {
    setEmail(e.target.value);
  }
  const handleChange1 = (e) => {
    setSname(e.target.value);
  }
  const handleChange3 = (e) => {
    setmember(e.target.value);
  }
  const handleChange4 = (e) => {
    setLocation(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // console.log(name,Sname,email,member,location);
    const data = {
      name,
      Sname,
      email,
      member,
      location
    }
    // console.log(data);
    fetch("http://localhost:3008/api", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log(result);
      console.log("usedata", data);
    })
    alert("form submmited");

  }
  return (
    <div className="container">
      <h1>User Info</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" name='name' value={name} onChange={handleChange} placeholder="Enter Your name"></input><br />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Surname</label>
          <div class="col-sm-4">
            <input type="text" className="form-control" name="sname" value={Sname} onChange={handleChange1} placeholder="Enter Your surname"></input><br />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-4">
            <input type="email" className="form-control" name="email" value={email} onChange={handleChange2} placeholder="Enter Your emailiD"></input><br />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Member</label>
          <div class="col-sm-4">
            <input type="number" className="form-control" name="member" value={member} onChange={handleChange3} placeholder="Member"></input><br />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Location</label>
          <div class="col-sm-4">
            <input type="text" className="form-control" name="location" value={location} onChange={handleChange4} placeholder="Enter Your location"></input><br />
          </div>
        </div>
        <button type="submit" className='btn btn-success'> Submit</button>
      </form>
    </div>
  );
}

export default App;
