import Image from "next/image";
import Link from "next/link";

type PartnerProps = {
  href: string;
  src: string;
  alt: string;
};

const Partner = (props: PartnerProps) => {
  return (
    <div className="flex-1 min-w-[80px] max-w-[20%]">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <Image
          src={props.src}
          alt={props.alt}
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </a>
    </div>
  );
};

export default Partner;
