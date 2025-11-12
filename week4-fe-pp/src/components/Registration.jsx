const Registration = () => {
  return (
    <form className="registration-form">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone-number">Phone Number:</label>
        <input type="tel" id="phone-number" name="phone-number" />
      </div>
      <button type="submit" className="btn submit-button">Register</button>
    </form>
  );
};

export default Registration;