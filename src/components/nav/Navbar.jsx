import React from "react";

function Navbar(props) {
    console.log(props.data);
    const menuItems = props.data;
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="blogs">
              {menuItems.home}
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
                  {menuItems.about}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="test">
                  {menuItems.trending}
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav pt-4 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active p-0" aria-current="page" href="login">
                  Login/Sign Up
                  </a>
                </li>
                
              </ul>
              {menuItems.loggedInUser !== 'User' && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle p-0 px-2"
                    href="text"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color: '#f1f3f5'}}
                  >
                    {menuItems.loggedInUser}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="createblog">
                        Create Blog
                      </a>
                    </li>
                    
                  </ul>
                </li>
              
              )}
              
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