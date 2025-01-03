import InputForm from "@/components/InputForm";
import WarningMessage from "@/components/WarningMessage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 p-10">
      <InputForm />
      <WarningMessage />
    </main>
  );
}
