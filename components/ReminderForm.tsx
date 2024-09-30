import React, { useState } from "react";

type ReminderFormProps = {
  date: string;
};

const ReminderForm = ({ date }: ReminderFormProps) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Date:", date);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-1/2">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
          <label htmlFor="phone" className="pl-2">
            Telefons
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="p-2 bg-slate-300 row-start-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="email" className="pl-2">
            E-pasts
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 bg-slate-300 row-start-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 w-4/5 rounded-md bg-slate-500 text-white"
        >
          Vēlos saņemt atgādinājumu!
        </button>
      </div>
    </form>
  );
};

export default ReminderForm;
