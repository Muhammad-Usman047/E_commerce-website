import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signed up successfully!");
  };

  return (
    <div className='createAccount'>
      <form onSubmit={handleSubmit}>
        <div className='signupform'>
          <div className='name'>
            <label className='labels' htmlFor='name'>Name</label>
            <input 
              type="text" 
              id='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='labels' htmlFor='email'>Enter Email</label>
            <input 
              type="email" 
              id='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='labels' htmlFor='password'>Password</label>
            <input 
              type="password" 
              id='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='labels' htmlFor='confirmPassword'>Confirm Password</label>
            <input 
              type="password" 
              id='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className='btn' type='submit'>Sign up</button>
          </div>
          <div>
            <p>If you are already login click <Link to='/Signin' >Sign-in</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;