import * as React from 'react';
import {Link} from "react-router-dom";

export default function Content() {
  
  return (
    <>
      <h6 style={{ padding: '5px' }}>kumarronit599@gmail.com</h6>
      <div className="text-bg-light p-3">
        <div className="container" style={{ backgroundColor: '#F76C6C' }}>
          <div className="row">
            <div className="col" style={{ border: '3px solid #f1f1f1' }}>
              <h3 style={{ textAlign: 'center' }}>To Do</h3>
              <div
                className="card"
                style={{
                  width: '18rem',
                  backgroundColor: '#24305E',
                  color: 'white',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                  </p>
                  <Link to="/" className="card-link">
                    Details
                  </Link>
                  <Link to="/" className="card-link">
                    Edit
                  </Link>
                  <Link to="/" className="card-link">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <div className="col" style={{ border: '3px solid #f1f1f1' }}>
              <h3 style={{ textAlign: 'center' }}>Doing</h3>
              <div
                className="card"
                style={{
                  width: '18rem',
                  backgroundColor: '#24305E',
                  color: 'white',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                  </p>
                  <Link to="/" className="card-link">
                    Details
                  </Link>
                  <Link to="/" className="card-link">
                    Edit
                  </Link>
                  <Link to="/" className="card-link">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <div className="col" style={{ border: '3px solid #f1f1f1' }}>
              <h3 style={{ textAlign: 'center' }}>Done</h3>
              <div
                className="card"
                style={{
                  width: '18rem',
                  backgroundColor: '#24305E',
                  color: 'white',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">
                  </p>
                  <Link to="/" className="card-link">
                    Details
                  </Link>
                  <Link to="/" className="card-link">
                    Edit
                  </Link>
                  <Link to="/" className="card-link">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
