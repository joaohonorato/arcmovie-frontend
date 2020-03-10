import React, { useState } from "react";
import { searchMovie } from "../../store/actions/movieAction";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [form, setForm] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setForm(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    dispatch(searchMovie(form));
  }

  return (
    <div className="filter section container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Upcoming movies</h5>
        <div className="input-field">
          <label htmlFor="query">Find your movie by name</label>
          <input type="text" id="query" name="query" onChange={handleChange} value={form} />
        </div>
        <div className="input-field">
          <button className="btn grey darken-2 z-depth-0">Search</button>
        </div>
      </form>
    </div>
  );
}
