import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setEnterpriseId } from "../redux/enterpriseSlice.ts";

import "./Home.css";

const Home: React.FC = () => {
  const [enterpriseId, setId] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Save in Redux
    dispatch(setEnterpriseId(enterpriseId));

    // Redirect
    navigate("/download");
  };

  return (
    <div className="home-container">
      <div className="login-card">
        <h1>Mumbai Carnival 2026</h1>

        <p>Please enter your Enterprise ID to continue.</p>

        <form onSubmit={handleSubmit}>
          {/* <label>Enterprise ID</label> */}

          <input
            type="text"
            value={enterpriseId}
            onChange={handleChange}
            placeholder="id@accenture.com"
            autoCapitalize="none"
            required
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
