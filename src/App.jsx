import React, { useState } from 'react';
import './App.css';


function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Phone no.</label>
            <input type="number" placeholder="Enter your Phone Number" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <a href="/dashboard">
            <button className="auth-btn" type="button">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </a>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;