import React, {useState} from 'react'

const SignUp = () => {
  const [name, setName] = useState('Enter Your Name');
  const [email, setemail] = useState('Enter Your Email');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
        
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted');
    console.log('Name:', password);
    console.log('Email:', email);    
      

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
    </div>
  )
}

export default SignUp;
