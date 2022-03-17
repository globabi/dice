import React from 'react';

const test = () => {
  alert("Roll the dice");
}

const Roll = () => (
  <button onClick={test}>
    Roll
  </button>
);

export default Roll