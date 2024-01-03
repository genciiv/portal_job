import React from "react";
import InputField from "../components/InputField";

const Employment = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Lloji i punesimit</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="test" onChange={handleChange} />
          <span className="checkmark"></span>Me Eksperience
        </label>

        <InputField
          handleChange={handleChange}
          value="temporary"
          title="Te perkohshem"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="test"
        />
      </div>
    </div>
  );
};

export default Employment;
