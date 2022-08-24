import React from "react";
import "./Form.css";
export default function Form(props) {
  return (
    <div className="Form">
      <form action="" className="mt-3 mb-3" id="forminput">
        <div className="row">
          <div className="col-7 input-line">
            <input
              id="search"
              className="search"
              type="search"
              placeholder="Search"
            />
          </div>
          <div className="col-5 input-line">
            <input type="submit" className="submit" value="   " />
            <input type="" className="submit" id="current" value="Current" />
          </div>
        </div>
      </form>
    </div>
  );
}
