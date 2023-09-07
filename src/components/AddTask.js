import * as React from 'react';
import "./style.css";

export default function AddTask() {

  const openForm= ()=>{
    // document.getElementById('myForm').form-popup.style.display='block';
  }
  const closeForm= ()=>{
    // document.getElementById('myForm').style.display='none';
  }
  return (
    <>
      <div className="style.form-popup" id="myForm">
        <form action="AddTask.js" className="form-container">
          <h2 style={{ textAlign: 'center'}}>Add Task</h2>
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
          <input
            type="date"
            name="validity"
            required
          />
          <button type="submit" className="btn">
            Add
          </button>
          <button type="button" className="btn cancel" onclick={closeForm()}>
            Close
          </button>
        </form>
      </div>
    </>
  );
}
