"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const InputForm = (props: Props) => {
  const router = useRouter();
  const [regNr, setRegNr] = useState("");
  const [vinNr, setVinNr] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `/pricing?reg=${encodeURIComponent(regNr)}&vin=${encodeURIComponent(
        vinNr
      )}`
    );
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 w-full px-10 justify-center items-center">
        <div className="flex flex-col w-full sm:w-56 gap-4">
          <label htmlFor="regNr" className="text-center text-sm">
            Auto reģistrācijas numurs
          </label>
          <input
            type="text"
            name="regNr"
            id="regNr"
            className="p-3 bg-slate-500"
            value={regNr}
            onChange={(e) => setRegNr(e.target.value)} // Update state on change
          />
        </div>
        <div className="flex flex-col w-full sm:w-56 gap-4">
          <label htmlFor="vinNr" className="text-center text-sm">
            Reģistrācijas apliecības numurs
          </label>
          <input
            type="text"
            name="vinNr"
            id="vinNr"
            className="p-3 bg-slate-500"
            value={vinNr}
            onChange={(e) => setVinNr(e.target.value)} // Update state on change
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center my-8">
        <input
          type="submit"
          value="APRĒĶINĀT"
          className="font-bold text-2xl cursor-pointer p-4 px-10 bg-slate-700 rounded-md"
        />
      </div>
    </form>
  );
};

export default InputForm;
