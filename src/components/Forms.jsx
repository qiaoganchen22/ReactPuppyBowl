import React from "react";
import { useState } from "react";
import { useNewPlayerMutation } from "../api/puppyBowlApi";
import { useNavigate } from "react-router-dom";

export default function Forms() {
  const navigate = useNavigate(); 
  const [data] = useNewPlayerMutation(); //using slice to update data in state
  const [form, setForm] = useState({
    name: "", 
    breed: "",
    imageUrl: "",
    teamId: "",
  });

  const formChange = (e) => { //updates the form whenever something new is added
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { //calls when form is submitted
    e.preventDefault();
    let info = await data(form);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            onChange={formChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="imageUrl"
            placeholder="image"
            onChange={formChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="teamId"
            placeholder="TeamId"
            onChange={formChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
