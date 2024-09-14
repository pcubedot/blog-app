import React, {useState} from 'react'

const Login = ({ sendDataToParent }) => {
     
  const [email, setemail] = useState('Enter Your Email');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
        
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted');
    console.log('Name:', password);
    console.log('Email:', email);    
    
    const formData = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.user);
        sendDataToParent(data.user.name);
        console.log("Login successful!");
      } else {
        console.error("login failed.", response);
      }
    } catch (error) {
      console.log(error);
    }  

  };
  return (
    <div>
      <form style={{ margin: "140px" }} onSubmit={handleSubmit}>
       
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
          Sign in
        </button> 
        <a className="p-4" href='signup'>Don't have a account Sign UP</a>
        
      </form>
    
    </div>
  )
}

export default Login
