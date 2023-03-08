import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [fname, setName] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/da").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {
      fname: fname,
      lname: lname,
      password: password
      
    }).then(() => {
      setUserList([
        ...userList,
        {
          fname: fname,
          lname: lname,
          password: password
        },
      ]);
    });
  };

  

 

  return (
    <div className="App container">
      <h1>Horizontal From</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(event) => {
                setLname(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age">password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
         
         
          <button onClick={addUser} class="btn btn-success">
            Sign in
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show 
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Username: {val.fname}</p>
                <p className="card-text">Email: {val.lname}</p>
                <p className="card-text">password: {val.password}</p>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;