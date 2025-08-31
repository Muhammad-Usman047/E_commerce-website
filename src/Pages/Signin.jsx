import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if ( !email || !password ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Passwords is not valid.");
      return;
    }

    alert("Signed ip successfully!");
  };

  return (
    <div className="spage">

      <div className="auth-main">
        <h2>Member Login</h2>
        <section className="auth-form">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='sbtn'>
              <button type="submit" className="btn" onClick={(handleSubmit)}>Sign In</button>
            </div>
            <div>
              <p className='lastp'>If no account, Click to <Link to='/CreateAccount'>Signup</Link></p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signin;