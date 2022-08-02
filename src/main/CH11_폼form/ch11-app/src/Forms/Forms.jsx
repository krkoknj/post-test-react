import React from 'react';
import FileInput from './FileInput';
import FruitSelect from './FruitSelect';
import NameForm from './NameForm';

function Forms(props) {
  return (
    <div>
      <NameForm />
      <FruitSelect />
      <FileInput />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0234853150064!2d127.0322463155518!3d37.507364235272036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab0cb%3A0x31793fc63e0cf9d3!2z67mE7Yq47Lqg7ZSE!5e0!3m2!1sko!2skr!4v1659418934657!5m2!1sko!2skr"
        width="600"
        height="450"
        style={{ border: 0 }} // 중괄호 변경
        allowFullScreen="" // 카멜케이스
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // 카멜케이스
      ></iframe>
    </div>
  );
}

export default Forms;
