import * as React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

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
          <Link
            className="btn btn-outline-success"
            type="button"
            To="/AddTask"
          >
            Add Task
          </Link>
        </form>
      </nav>
    </>
  );
}
