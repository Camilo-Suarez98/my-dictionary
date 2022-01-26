import React from "react";

const Input = ({ search, setSearch, word }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="outline-none h-10 w-48 bg-sky-900 text-xl text-white p-4 mb-4 border-none rounded-full text-center opacity-80 placeholder:text-white"
      type="text"
      placeholder={word}
      onChange={handleChange}
      value={search}
    />
  );
}

export default Input
