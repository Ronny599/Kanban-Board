import * as React from 'react';
import {Link} from "react-router-dom";
import './style.css';

export default function AddTask() {
  return (
    <>
    <h6 style={{ padding: '5px' }}>kumarronit599@gmail.com</h6>
    <div className="text-bg-light p-3">
      <div className="style.form-popup" id="myForm">
        <form action="/addtask" className="form-container">
          <h2 style={{ textAlign: 'center' }}>Add Task</h2>
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input type="text" placeholder="Enter Title" name="title" required />
          <label htmlFor="Description">
            <b>Description</b>
          </label>
          <input
            type="password"
            placeholder="Enter Description"
            name="detail"
            required
          />
          <label htmlFor="Validity">
            <b>Valid Till</b>
          </label>
          &nbsp;&nbsp;
          <input type="date" name="validity" required />
          <Link type="submit" className="btn" to="/">
            Add
          </Link>
          <Link type="button" className="btn cancel" to="/">
            Back
          </Link>
        </form>
      </div>
      </div>
    </>
  );
}
