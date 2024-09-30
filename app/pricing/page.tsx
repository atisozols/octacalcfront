"use client";
import PricingTable from "@/components/PricingTable";
import Reminder from "@/components/Reminder";
import { useRouter, useSearchParams } from "next/navigation";

const Pricing = () => {
  const searchParams = useSearchParams();
  const reg = searchParams?.get("reg") || "";
  const vin = searchParams?.get("vin") || "";

  return (
    <main className="flex flex-col gap-8 p-10">
      <Reminder />
      <PricingTable data={{ reg, vin }} />
    </main>
  );
};

export default Pricing;
