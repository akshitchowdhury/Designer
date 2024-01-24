import React, { useState } from 'react';

const CheckboxGroup = () => {
  // Initialize an array of checkbox states, initially all set to false
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  // Function to handle individual checkbox toggle
  const handleCheckboxChange = (index) => {
    // Create a new array with the updated state for the clicked checkbox
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    
    // Update the state with the new array
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <div>
      {/* Map through the array of checkbox states and render a checkbox for each */}
      {checkboxStates.map((isChecked, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(index)}
          />
          Checkbox {index + 1}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
