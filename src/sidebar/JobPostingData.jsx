import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({handleChange}) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const SevenDayesAgoDate = SevenDaysAgo.toISOString().slice(0, 10);
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Data e postimit</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="test" onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="24 oret e fundit"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value={SevenDayesAgoDate}
          title="7 ditet e fundit"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value={ThirtyDaysAgoDate}
          title="Muaj i fundit"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
