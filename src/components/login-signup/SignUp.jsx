import React, {useState} from 'react'

const SignUp = () => {
  const [name, setName] = useState('Enter Your Name');
  const [email, setemail] = useState('Enter Your Email');
  const [password, setPassword] = useState('');

  let [showToast, setShowToast] = useState(false);
  let [AlertMsg, setAlertMsg] = useState('');

  const handleSubmit = async (event) => {
        
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted');
    console.log('Name:', password);
    console.log('Email:', email);    
    
    const formData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.savedUser);
        setShowToast(true);
        setAlertMsg ('Thank You For Sign Up');
        console.log("Registration successful!");
      } else {
        console.error("Registration failed.", response);
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div>
      <form style={{ margin: "140px" }} onSubmit={handleSubmit}>
      <div className="row mb-3">
          <label for="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            className="form-control" 
            id="inputName3" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" 
            value={email}
            onChange={(e) => setemail(e.target.value)} 
            className="form-control" 
            id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3"  className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button> 
        
        
      </form>

    {showToast && (
      <div
          className="toast align-items-center text-white bg-primary border-0 show" // Added "show" to ensure visibility
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ position: 'fixed', top: '80px', right: '0px', zIndex: 1 }}
        >
          <div className="d-flex">
            <div className="toast-body">
            {AlertMsg}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              aria-label="Close"
              // Attach the handleClose event to the button
            ></button>
          </div>
        </div>
        )}
    </div>
  )
}

export default SignUp;
