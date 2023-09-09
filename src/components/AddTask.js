import * as React from 'react';
import {Link} from "react-router-dom";
import './style.css';

export default function AddTask() {
  return (
    <>
      <div className="style.form-popup" id="myForm">
        <form action="/addtask" className="style.form-container">
          <h2 style={{ textAlign: 'center' }}>Add Task</h2>
          <label forHtml="title">
            <b>Title</b>
          </label>
          <input type="text" placeholder="Enter Title" name="title" required />
          <label forHtml="Description">
            <b>Description</b>
          </label>
          <input
            type="password"
            placeholder="Enter Description"
            name="detail"
            required
          />
          <label forHtml="Validity">
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
    </>
  );
}
