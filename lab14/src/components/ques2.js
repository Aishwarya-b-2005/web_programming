function Form() {
    return (
      <form>
        <h1>Novell Service Login</h1>
  
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" name="name" required /><br /><br />
  
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /><br /><br />
  
        <label htmlFor="city">City of employment:</label>
        <input type="text" id="city" name="city" required /><br /><br />
  
        <label>Web server:</label>
        <select>
          <option>Apache</option>
          <option>Nginx</option>
          <option>Lighttpd</option>
        </select>
        <br /><br />
        <label>Please specify your role:</label>
        <br />
          <input type="radio" id="admin" name="role" value="admin" />
          <label htmlFor="admin">Admin</label><br />
  
          <input type="radio" id="engineer" name="role" value="user" />
          <label htmlFor="engineer">Engineer</label><br />
  
          <input type="radio" id="manager" name="role" value="user" />
          <label htmlFor="manager">Manager</label><br />
  
          <input type="radio" id="guest" name="role" value="user" />
          <label htmlFor="guest">Guest</label>
        <br /><br />
        <label>Single-sign onto the following:</label>
        <div>
          <input type="checkbox" id="mail" name="mail" value="mail" />
          <label htmlFor="mail">Mail</label><br />
  
          <input type="checkbox" id="pay" name="pay" value="pay" />
          <label htmlFor="pay">Payroll</label><br />
  
          <input type="checkbox" id="ss" name="ss" value="ss" />
          <label htmlFor="ss">Self-service</label><br />
        </div>
        <br /><br />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
  
  export default Form;
  