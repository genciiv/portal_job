import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Paga</h4>

      <div className="mb-4">
        <Button onClickHandler={handleClick} value="" title="Per ore" />
        <Button onClickHandler={handleClick} value="monthly" title="Mujore" />
        <Button onClickHandler={handleClick} value="Yearly" title="Vjetore" />
      </div>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="test" onChange={handleChange} />
          <span className="checkmark"></span>Te gjitha
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
