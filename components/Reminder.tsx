import React from "react";
import ReminderText from "./ReminderText";
import ReminderForm from "./ReminderForm";

type Props = {};

const Reminder = (props: Props) => {
  const date = "01.01.2000";

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-start">
      <ReminderText date={date} />
      <ReminderForm date={date} />
    </div>
  );
};

export default Reminder;
