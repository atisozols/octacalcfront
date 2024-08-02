import { BsExclamationLg } from "react-icons/bs";

type Props = {};

const WarningMessage = (props: Props) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center">
      <p className="font-bold text-center">
        Transportlīdzekļa pārreģistrācijas gadījumā reģistrācijas
        <br /> apliecības numura vietā norādiet īpašuma tiesību apliecības
        <br />
        numuru (ACxxxxxx, Axxxxxx)
      </p>
      <BsExclamationLg className="text-red-500 w-24 h-24" />
    </div>
  );
};

export default WarningMessage;
