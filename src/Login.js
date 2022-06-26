import { useState } from "react";

export default function Login(props) {
  const [name, setName] = useState("");
  onchange = (e) => {
    setName(e.target.value);
  };
  const [errors, setErrors] = useState({
    name: false,
    pass: false
  });
  var login = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      setErrors({
        ...errors,
        name: true
      });
    } else {
      setErrors({
        name: false,
        pass: false
      });
      window.location.replace("/");
    }
  };
  return (
    <>
      <div
        style={{
          width: "40vw",
          position: "absolute",
          left: "30%",
          top: "20%"
        }}
      >
        <h1>Login</h1>
        <form>
          <div className="formGroup">
            <label>Username:</label>
            <input
              type="text"
              value={name}
              onChange={onchange}
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">Please enter a name</span>
            )}
          </div>
          <div className="formGroup">
            <label>Password:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="formGroup">
            <div className="row">
              <div className="col">
                <button className="btn btn-success" onClick={login}>
                  Login
                </button>
              </div>
              <div className="col">
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
