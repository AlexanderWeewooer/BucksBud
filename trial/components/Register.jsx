export default function Register(){
    return(
    <div className="mycard">
        <form>
          <h2 className="formTitle">Register</h2>
          <table>
            <tbody>
              <tr>
                <th><label>Username:</label></th><td><input className="form-input" type='text' name="username"></input></td>
              </tr>
              <tr>
                <th><label>Email:</label></th><td><input className="form-input" type='text' name="email"></input></td>
              </tr>
              <tr>
                <th><label>Password:</label></th><td><input className="form-input" type='text' name="password"></input></td>
              </tr>
              <tr>
                <th></th><td><input className="button" type='submit' name="submit" value="Submit"></input></td>
              </tr>
            </tbody>
          </table>
        </form>
    </div>);
}