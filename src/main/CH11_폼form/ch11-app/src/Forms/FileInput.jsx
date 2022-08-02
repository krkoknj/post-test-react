import React from 'react';
import { useState } from 'react';

function FileInput(props) {
  const [imgSrc, setImgSrc] = useState('');

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    console.log(imgSrc);
  };

  return (
    <>
      <div className="input-group mb-3"></div>
      <input
        type="file"
        accept="image/*"
        className="form-control"
        id="inputFile"
        onChange={handleImageUpload}
      />
      <label className="input-group-text">Upload</label>
      <div className="preview">
        {imgSrc && <img className="w-50" src={imgSrc} alt="" />}
      </div>
    </>
  );
}

export default FileInput;
