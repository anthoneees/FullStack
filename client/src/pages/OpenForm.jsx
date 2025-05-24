import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_URL = `${window.location.origin}/api`;

const OpenForm = () => {
  const [fname, setFName] = useState("");

  const [lname, setLName] = useState("");

  const [email, setEmail] = useState("");

  const [year, setYear] = useState("-");

  const [height, setHeight] = useState("5ft 9in");

  const [position, setPosition] = useState("-");

  const [skill, setSkill] = useState("-");

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    year: "",
    height: "",
    position: "",
    skill: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const validateName = (name) => /^[A-Za-z]+$/.test(name);
  const validateEmail = (email) => email.endsWith("@gmu.edu");
  const validateSelection = (value, options) =>
    options.includes(value) && value !== "-";

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {
      fname: "",
      lname: "",
      email: "",
      year: "",
      height: "",
      position: "",
      skill: "",
    };

    if (!validateName(fname)) {
      newErrors.fname = "First name must contain only letters.";
      valid = false;
    }
    if (!validateName(lname)) {
      newErrors.lname = "Last name must contain only letters.";
      valid = false;
    }
    if (!validateEmail(email)) {
      newErrors.email = "Email must end with @gmu.edu.";
      valid = false;
    }
    const yearOptions = [
      "-",
      "Freshman",
      "Sophomore",
      "Junior",
      "Senior",
      "Grad",
    ];
    if (!validateSelection(year, yearOptions)) {
      newErrors.year = "Please select a valid year.";
      valid = false;
    }
    const heightOptions = [
      "4ft 7in",
      "4ft 8in",
      "4ft 9in",
      "4ft 10in",
      "4ft 11in",
      "5ft 0in",
      "5ft 1in",
      "5ft 2in",
      "5ft 3in",
      "5ft 4in",
      "5ft 5in",
      "5ft 6in",
      "5ft 7in",
      "5ft 8in",
      "5ft 9in",
      "5ft 10in",
      "5ft 11in",
      "6ft 0in",
      "6ft 1in",
      "6ft 2in",
      "6ft 3in",
      "6ft 4in",
      "6ft 5in",
      "6ft 6in",
      "6ft 7in",
      "6ft 8in",
      "6ft 9in",
      "6ft 10in",
      "6ft 11in",
      "7ft 0in",
    ];
    if (!validateSelection(height, heightOptions)) {
      newErrors.height = "Please select a valid height.";
      valid = false;
    }
    const positionOptions = [
      "-",
      "Setter",
      "Outside",
      "Middle",
      "Libero",
      "Opposite",
    ];
    if (!validateSelection(position, positionOptions)) {
      newErrors.position = "Please select a valid position.";
      valid = false;
    }
    const skillOptions = ["-", "A", "BB", "B", "C"];
    if (!validateSelection(skill, skillOptions)) {
      newErrors.skill = "Please select a valid skill level.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      try {
        axios.post(`${BASE_URL}/google/sheets`, {
          fname,
          lname,
          email,
          year,
          height,
          position,
          skill,
        });
        console.log("First API call successful");
        axios.post(`${BASE_URL}/mongo/tryout`, {
          fname,
          lname,
          email,
          year,
          height,
          position,
          skill,
        });
        console.log("Second API call successful");

        setFName("");
        setLName("");
        setEmail("");
        setYear("-");
        setHeight("5ft 9in");
        setPosition("-");
        setSkill("-");

        setSuccessMessage("Form submitted successfully!");
      } catch (error) {
        console.error("There was an error submitting the form", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-20"></div>
      <div className="create max-w-96 m-auto text-center">
        <h2 className="text-xl mb-7">Open Gym Registration Form</h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label className="text-left block">First Name</label>
          <input
            type="text"
            required
            className="w-full p-2 m-2 outline"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
          {errors.fname && <p className="text-red-500">{errors.fname}</p>}

          <label className="text-left block">Last Name</label>
          <input
            type="text"
            required
            className="w-full p-2 m-2 outline"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
          {errors.lname && <p className="text-red-500">{errors.lname}</p>}

          <label className="text-left block">Email</label>
          <input
            type="text"
            required
            className="w-full p-2 m-2 outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label className="text-left block">Year</label>
          <select
            className="w-full p-2 m-2 outline"
            value={year}
            required
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="-">-</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Grad">Grad</option>
          </select>
          {errors.year && <p className="text-red-500">{errors.year}</p>}

          <label className="text-left block">Height</label>
          <select
            required
            className="w-full p-2 m-2 outline"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          >
            <option value="4ft 7in">4ft 7in</option>
            <option value="4ft 8in">4ft 8in</option>
            <option value="4ft 9in">4ft 9in</option>
            <option value="4ft 10in">4ft 10in</option>
            <option value="4ft 11in">4ft 11in</option>
            <option value="5ft 0in">5ft 0in</option>
            <option value="5ft 1in">5ft 1in</option>
            <option value="5ft 2in">5ft 2in</option>
            <option value="5ft 3in">5ft 3in</option>
            <option value="5ft 4in">5ft 4in</option>
            <option value="5ft 5in">5ft 5in</option>
            <option value="5ft 6in">5ft 6in</option>
            <option value="5ft 7in">5ft 7in</option>
            <option value="5ft 8in">5ft 8in</option>
            <option value="5ft 9in">5ft 9in</option>
            <option value="5ft 10in">5ft 10in</option>
            <option value="5ft 11in">5ft 11in</option>
            <option value="6ft 0in">6ft 0in</option>
            <option value="6ft 1in">6ft 1in</option>
            <option value="6ft 2in">6ft 2in</option>
            <option value="6ft 3in">6ft 3in</option>
            <option value="6ft 4in">6ft 4in</option>
            <option value="6ft 5in">6ft 5in</option>
            <option value="6ft 6in">6ft 6in</option>
            <option value="6ft 7in">6ft 7in</option>
            <option value="6ft 8in">6ft 8in</option>
            <option value="6ft 9in">6ft 9in</option>
            <option value="6ft 10in">6ft 10in</option>
            <option value="6ft 11in">6ft 11in</option>
            <option value="7ft 0in">7ft 0in</option>
          </select>
          {errors.height && <p className="text-red-500">{errors.height}</p>}

          <label className="text-left block">Position</label>
          <select
            required
            className="w-full p-2 m-2 outline"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="-">-</option>
            <option value="Setter">Setter</option>
            <option value="Outside">Outside</option>
            <option value="Middle">Middle</option>
            <option value="Libero">Libero</option>
            <option value="Opposite">Opposite</option>
          </select>
          {errors.position && <p className="text-red-500">{errors.position}</p>}

          <label className="text-left block">Skill Level</label>
          <select
            required
            className="w-full p-2 m-2 outline"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          >
            <option value="-">-</option>
            <option value="A">A</option>
            <option value="BB">BB</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          {errors.skill && <p className="text-red-500">{errors.skill}</p>}

          <button className="bg-secondary text-md rounded-2xl text-white mt-8 p-2 ml-4">
            Submit Form
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default OpenForm;
