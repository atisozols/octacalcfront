import React from "react";

type ReminderTextProps = {
  date: string;
};

const ReminderText = ({ date }: ReminderTextProps) => {
  return (
    <p className="text-xl pt-3">
      OCTA polise nepieciešama no
      <br />
      <span className="text-red-700 font-bold underline">{date}</span>
    </p>
  );
};

export default ReminderText;
