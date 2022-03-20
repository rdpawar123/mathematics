import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function System() {
  const handleSubmit = (event) => {
    let repo = document.getElementById("fname").value;
    console.log(repo);
    localStorage.setItem(repo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label> Enter Text :</label>
        <input
          type="text"
          placeholder="enter text here"
          id="fname"
          // onChange={(e) => setName(e.target.value)}
        />

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Fresher
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Experienced
          </label>
        </div>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label class="mr-sm-2" for="inlineFormCustomSelect">
              Preference
            </label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              onChange={handleSubmit}
            >
              <option selected>Choose...</option>
              <option value="1">Java</option>
              <option value="2">Python</option>
              <option value="3">Php</option>
            </select>
          </div>
          <div className="">
            <input type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default System;
