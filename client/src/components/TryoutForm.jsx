import { useState } from "react";
import axios from "axios";

const TryoutForm = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [year, setYear] = useState("Freshman");

  const [height, setHeight] = useState("");

  const [position, setPosition] = useState("Setter");

  const [skill, setSkill] = useState("A");

  function handleSubmit(event){
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/forms", {
        name,
        email,
        year,
        height,
        position,
        skill,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
   
  return (
    <>
      <div className="create max-w-96 m-auto text-center">
        <h2 className="text-xl mb-7">Tryout Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <label className="text-left block">Name</label>
          <input
            type="text"
            required
            className="w-full p-2 m-2 outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-left block">Email</label>
          <input
            type="text"
            required
            className="w-full p-2 m-2 outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-left block">Year</label>
          <select
            className="w-full p-2 m-2 outline"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Grad">Grad</option>
          </select>

          <label className="text-left block">Height</label>
          <input
            type="text"
            required
            className="w-full p-2 m-2 outline"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label className="text-left block">Position</label>
          <select
            className="w-full p-2 m-2 outline"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="Setter">Setter</option>
            <option value="Outside">Outside</option>
            <option value="Middle">Middle</option>
            <option value="Libero">Libero</option>
            <option value="Opposite">Opposite</option>
          </select>

          <label className="text-left block">Skill Level</label>
          <select
            className="w-full p-2 m-2 outline"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          >
            <option value="A">A</option>
            <option value="BB">BB</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

          <button
            type="submit"
            className="bg-secondary text-md rounded-2xl text-white mt-8 p-2 ml-4"
          >
            Submit Form
          </button>
          <p>{name}</p>
          <p>{email}</p>
          <p>{year}</p>
          <p>{height}</p>
          <p>{position}</p>
          <p>{skill}</p>
        </form>
      </div>
    </>
  );
};

export default TryoutForm;
