import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-center sm:justify-start p-10">
      <Image
        className=""
        src="/octaauto_crop.png"
        alt="Octaauto Logo"
        width={400}
        height={104}
        priority
      />
    </header>
  );
};

export default Header;
