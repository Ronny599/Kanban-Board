import * as React from 'react';

export default function Content() {
  const openForm = () => {
    // document.getElementById('myForm').style.display='block';
  };
  const closeForm = () => {
    // document.getElementById('myForm').style.display='none';
  };
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Details
                  </a>
                  <a href="#" className="card-link">
                    Edit
                  </a>
                  <a href="#" className="card-link">
                    Delete
                  </a>
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Details
                  </a>
                  <a href="#" className="card-link">
                    Edit
                  </a>
                  <a href="#" className="card-link">
                    Delete
                  </a>
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Details
                  </a>
                  <a href="#" className="card-link">
                    Edit
                  </a>
                  <a href="#" className="card-link">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
