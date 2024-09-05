import React from "react";

function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="test">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="textnavbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="text">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="test">
                    Link
                  </a>
                </li>
                
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="text"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
          
              <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="text"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color: '#f1f3f5'}}
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="text">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="text">
                        Log out
                      </a>
                    </li>
                  </ul>
                </li>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
  

export default Navbar;

//class => className
//# => test
// < > => < />