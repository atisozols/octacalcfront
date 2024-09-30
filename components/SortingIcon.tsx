import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

type Props = {
  direction: "asc" | "desc";
};

const SortingIcon = (props: Props) => {
  return (
    <span className="text-slate-700 absolute inset-x-0 flex justify-center items-center -bottom-3">
      <BiSolidDownArrow />
    </span>
  );
};

export default SortingIcon;
