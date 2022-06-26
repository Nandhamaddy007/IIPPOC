import "./styles.css";
import { students } from "./data";
import AddStudentsForm from "./AddStudentsForm";
import Navbar from "./Navbar";

export default function App() {
  var name = "Teacher";
  console.log("hello", students);
  return (
    <div>
      <Navbar />

      <div class="container">
        <div class="row">
          <div className="col-sm-6 pt-4">
            <h1
              className="animate animate__fadeInDown"
              style={{ textAlign: "left" }}
            >
              Hello {name} !
            </h1>
            <div className="form-group">
              <label for="updateDD">Please select a student to update:</label>

              <select
                id="updateDD"
                className="form-select"
                style={{ width: "50%" }}
              >
                <option disabled></option>
                {students.map((data, index) => {
                  return <option>{data.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div class="col-sm-6 pt-4 ">
            <AddStudentsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
