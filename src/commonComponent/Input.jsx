import React from 'react';

function Input(props) {
  const { label, placeholder, width } = props;
  const inputStyle = {
    width: width ? `${width}px` : '270px',
  };

  return (
    <div>
      <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">
        {label}
      </label>
      <input
        className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        style={inputStyle}
        id="grid-first-name"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
