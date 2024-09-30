import Image from "next/image";
import React from "react";

type PricingTableRowProps = {
  logo: string;
  prices: number[];
  isFirstRow?: boolean;
};

const PricingTableRow = ({
  logo,
  prices,
  isFirstRow,
}: PricingTableRowProps) => {
  return (
    <tr
      className={
        isFirstRow ? "bg-gradient-to-b from-slate-600 to-slate-400" : ""
      }
    >
      <td className="p-4 max-w-32 sticky left-0 z-10 bg-slate-600">
        <Image
          height={300}
          width={300}
          src={logo}
          alt="Company Logo"
          className="h-auto w-auto"
        />
      </td>
      {prices.map((price, index) => (
        <td key={index} className="text-center p-4">
          {price.toFixed(2)}&euro;
        </td>
      ))}
    </tr>
  );
};

export default PricingTableRow;
