import React, { useEffect, useState } from "react";
import PricingTableRow from "./PricingTableRow";
import SortingIcon from "./SortingIcon";

type CompanyData = {
  logo: string;
  prices: number[];
};

type PricingTableProps = {
  data: {
    reg: string;
    vin: string;
  };
};

const PricingTable = ({ data }: PricingTableProps) => {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState<{
    key: number;
    direction: "asc" | "desc";
  }>({
    key: 0,
    direction: "asc",
  });

  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const response = await fetch("/api/pricing/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reg: data.reg,
            vin: data.vin,
          }),
        });
        const result = await response.json();

        const sortedCompanies = result.sort(
          (a: CompanyData, b: CompanyData) => {
            if (a.prices[0] < b.prices[0]) return -1;
            if (a.prices[0] > b.prices[0]) return 1;
            return 0;
          }
        );

        setCompanies(sortedCompanies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    if (data.reg && data.vin) {
      fetchAllCompanies();
    } else {
      setLoading(false);
    }
  }, [data.reg, data.vin]);

  const sortCompanies = (key: number) => {
    let direction: "asc" | "desc" = "asc";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedCompanies = [...companies].sort((a, b) => {
      if (a.prices[key] < b.prices[key]) return direction === "asc" ? -1 : 1;
      if (a.prices[key] > b.prices[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setCompanies(sortedCompanies);
    setSortConfig({ key, direction });
  };

  const renderSkeleton = () => {
    const skeletonRows = Array.from({ length: 7 });
    return skeletonRows.map((_, index) => (
      <tr key={index} className="animate-pulse">
        <td className="p-4 w-36 bg-slate-600 h-8"></td>
        <td className="p-4 bg-slate-400 h-8"></td>
        <td className="p-4 bg-slate-400 h-8"></td>
        <td className="p-4 bg-slate-400 h-8"></td>
        <td className="p-4 bg-slate-400 h-8"></td>
        <td className="p-4 bg-slate-400 h-8"></td>
      </tr>
    ));
  };

  if (loading) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-slate-700 h-16">
            <tr>
              <th className="p-4 w-48 sticky left-0 bg-slate-700 z-10"></th>
              <th className="p-4"></th>
              <th className="p-4"></th>
              <th className="p-4"></th>
              <th className="p-4"></th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>{renderSkeleton()}</tbody>
        </table>
      </div>
    );
  }

  if (companies.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-slate-700">
          <tr>
            <th className="p-4 min-w-36 sticky left-0 bg-slate-700 z-10"></th>
            <th
              className="p-4 relative cursor-pointer"
              onClick={() => sortCompanies(0)}
            >
              1 mēnesis
              {sortConfig?.key === 0 ? (
                <SortingIcon direction={sortConfig.direction} />
              ) : (
                ""
              )}
            </th>
            <th
              className="p-4 relative cursor-pointer"
              onClick={() => sortCompanies(1)}
            >
              3 mēneši
              {sortConfig?.key === 1 ? (
                <SortingIcon direction={sortConfig.direction} />
              ) : (
                ""
              )}
            </th>
            <th
              className="p-4 relative cursor-pointer"
              onClick={() => sortCompanies(2)}
            >
              6 mēneši
              {sortConfig?.key === 2 ? (
                <SortingIcon direction={sortConfig.direction} />
              ) : (
                ""
              )}
            </th>
            <th
              className="p-4 relative cursor-pointer"
              onClick={() => sortCompanies(3)}
            >
              9 mēneši
              {sortConfig?.key === 3 ? (
                <SortingIcon direction={sortConfig.direction} />
              ) : (
                ""
              )}
            </th>
            <th
              className="p-4 relative cursor-pointer"
              onClick={() => sortCompanies(4)}
            >
              12 mēneši
              {sortConfig?.key === 4 ? (
                <SortingIcon direction={sortConfig.direction} />
              ) : (
                ""
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <PricingTableRow
              key={index}
              logo={company.logo}
              prices={company.prices}
              isFirstRow={index === 0} // Pass isFirstRow prop for the first row
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
