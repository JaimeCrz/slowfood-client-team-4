import React from "react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="login-form">
      <div className="ui one column centered grid">
        <div className="ui six column centered row">
          <div className="ui input"><input className="ui input" name="email" type="email" id="email" placeholder="type email here"></input></div>
          <div className="ui input"><input className="ui input" name="password" type="password" id="password" placeholder="type password here"></input></div>
        </div>
        <div className="ui six column centered row">
            <button className="ui primary button" id="submit">Submit</button>
        </div>
        
      </div>
    </form>
  );
};

export default LoginForm;