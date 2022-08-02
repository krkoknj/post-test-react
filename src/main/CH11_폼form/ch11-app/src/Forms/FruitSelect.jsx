import React from 'react';
import { useState } from 'react';

function FruitSelect(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('선택한 음식:' + value);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <h5>음식을 선택하세요 :</h5>
          <select className="form-select" value={value} onChange={handleChange}>
            <option>Open this select menu</option>
            <option value="kiwi">🥝</option>
            <option value="watermelon">🍉</option>
            <option value="melon">🍈</option>
            <option value="orange">🍊</option>
            <option value="pineapple">🍍</option>
          </select>
        </label>
        <button className="btn btn-success ms-1" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default FruitSelect;
