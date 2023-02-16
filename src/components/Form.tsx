import React from "react";

interface IForm {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ handleSubmit }: IForm) => {
  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="max-h-full">
        <input
          type="text"
          placeholder="Enter search term here"
          name="form"
          className="bg-slate-300 p-2 m-2 rounded-md"
        />
        <button className="bg-slate-400 p-2 rounded-md drop-shadow-md">
          Search
        </button>
      </form>
    </div>
  );
};
