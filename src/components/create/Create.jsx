import axios from "axios";
import React, { useEffect, useState } from "react";
import { postEmpData } from "../ApiCall/ApiServices";
const Create = (props) => {
  const { empData, baseURL } = props;
  const [form, setForm] = useState({
    EmpCode: "",
    FirstName: "",
    LastName: "",
    Email: "",
    ManagerCode: "",
    Timestamp: new Date(),
    IsManager: false,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form, "form");
    // axios
    //   .post(baseURL + "api/Employee/Add", form)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    postEmpData(form)
    setForm({EmpCode:'',FirstName:'',LastName:'', Email:'',ManagerCode:'',IsManager:false})
  };
  return (
    <div>
        <h1 className='text-align-center'>Emp Creation page</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="empcode">EmpCode</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Empcode"
            onChange={(e) => setForm({ ...form, EmpCode: e.target.value })}
            value={form.EmpCode}
          />
        </div>
        <div className="form-group">
          <label htmlFor="empcode">FirstName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your FirstName"
            onChange={(e) => setForm({ ...form, FirstName: e.target.value })}
            value={form.FirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">LastName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your LastName"
            onChange={(e) => setForm({ ...form, LastName: e.target.value })}
            value={form.LastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            onChange={(e) => setForm({ ...form, Email: e.target.value })}
            value={form.Email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select ManagerCode</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => setForm({ ...form, ManagerCode: e.target.value })}
            value={form.ManagerCode}
          >
            {empData?.map((ele, index) => (
              <option key={index} value={ele.EmpCode}>{ele.FirstName+' '+ele.LastName}</option>
            ))}
          </select>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => setForm({ ...form, IsManager: e.target.value })}
            value={form.IsManager}
          />
          <label className="form-check-label" htmlFor="isManager">
            IsManager
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
