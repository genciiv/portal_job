import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className="text-lg font-medium mb-2">Eksperience Pune</h4>

        <div>
          <label className="sidebar-label-container">
            <input type="radio" name="test" id="test" onChange={handleChange} />
            <span className="checkmark"></span>Me Eksperience
          </label>

          <InputField
            handleChange={handleChange}
            value="Internship"
            title="Internship"
            name="test"
          />

          <InputField
            handleChange={handleChange}
            value="work remotely"
            title="Pune remote"
            name="test"
          />

        </div>
      </div>
  )
}

export default WorkExperience
