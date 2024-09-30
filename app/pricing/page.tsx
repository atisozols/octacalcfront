"use client";
import PricingTable from "@/components/PricingTable";
import Reminder from "@/components/Reminder";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Pricing = () => {
  const searchParams = useSearchParams();
  const reg = searchParams?.get("reg") || "";
  const vin = searchParams?.get("vin") || "";

  return (
    <Suspense>
      <main className="flex flex-col gap-8 p-10">
        <Reminder />
        <PricingTable data={{ reg, vin }} />
      </main>
    </Suspense>
  );
};

export default Pricing;
