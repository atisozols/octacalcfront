import { MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <a href="tel:+37126478665" className="flex items-center gap-2">
            <MdPhone className="h-5 w-5" />
            <span>+371 26 478 665</span>
          </a>
          <a
            href="mailto:alpha@alphainsurance.lv"
            className="flex items-center gap-2"
          >
            <MdMail className="h-5 w-5" />
            <span>alpha@alphainsurance.lv</span>
          </a>
          <a
            href="https://alphainsurance.lv"
            className="flex items-center gap-2"
          >
            <MdLanguage className="h-5 w-5" />
            <span className="underline">alphainsurance.lv</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center">
            Veikt apmaksu par OCTA polisi var ar karti un internetbanku
          </p>
          <div className="grid grid-cols-3 justify-items-center items-center w-2/3 gap-2">
            <Image src="/visa.png" alt="Visa" height={100} width={100} />
            <Image
              src="/mastercard.png"
              alt="MasterCard"
              height={100}
              width={100}
            />
            <Image
              src="/swedbank.png"
              alt="Swedbank"
              height={100}
              width={100}
            />
            <Image src="/luminor.png" alt="Luminor" height={100} width={100} />
            <Image src="/seb.png" alt="SEB" height={100} width={100} />
            <Image
              src="/citadele.png"
              alt="Citadele"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="sm:text-right text-center">
          <span className="font-bold block">
            SIA &quot;Alpha Insurance&quot;
          </span>
          <span className="block">
            Rīga, Lāčplēša iela 37, LV-1011, Latvija
          </span>
          <a href="" className="block">
            Lietošanas noteikumi
          </a>
          <a href="" className="block">
            Privātuma politika
          </a>
          <a href="" className="block">
            Sūdzību izskatīšanas kārtība
          </a>
          <span className="block pt-2">
            Copyright &copy; 2024 All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
