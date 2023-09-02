import * as React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body">
        <div className="container-fluid justify-content-center">
          <span
            className="navbar-brand mb-0 h1"
            style={{ fontSize: '30px', color: 'white' }}
          >
            Kanban Board
          </span>
        </div>
        <form className="container-fluid justify-content-start">
          {/* <button class="btn btn-outline-success me-2" type="button">Main button</button> */}
          <button
            className="btn btn-outline-success"
            type="button"
            onclick="openForm()"
          >
            Add Task
          </button>
        </form>
      </nav>
      <div className="form-popup" id="myForm">
        <form action="AddTask." className="form-container">
          <h2 style="text-align: center;">Add Task</h2>
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
          <label forName="Validity">
            <b>Valid Till</b>
          </label>
          &nbsp;&nbsp;
          <input
            type="date"
            placeholder="Enter Date"
            name="validity"
            required
          />
          <button type="submit" className="btn">
            Add
          </button>
          <button type="button" className="btn cancel" onclick="closeForm()">
            Close
          </button>
        </form>
      </div>
    </>
  );
}
