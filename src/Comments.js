import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Comments() {
  const [comment, setcomment] = useState("");
  const dispatch = useDispatch();
  const post = useSelector((state) => state.changepost);
  const handleSubmit = (event) => {
    // alert(`the enterd value:${comment}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="">
          <input
            type="text"
            value={comment} className="border border "
            onChange={(e) => setcomment(e.target.value)}
          />
        </div>
        <div className="">
          <input type="submit" />
        </div>
        <h1>{post}</h1>
        <button onClick={() => dispatch({ type: "edit" })}>Edit</button>
        <button onClick={() => dispatch({ type: "delete" })}>Delete</button>
      </div>
    </form>
  );
}

export default Comments;
