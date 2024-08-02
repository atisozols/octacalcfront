import Partner from "./Partner";

const Partners = () => {
  return (
    <div className="p-4 px-8 bg-gradient-to-b from-slate-600 to-slate-400">
      <div className="flex justify-between items-center w-full max-w-4xl gap-5 max-w-screen mx-auto flex-wrap">
        <Partner href="https://ergo.lv" src="/ergo.png" alt="Ergo" />
        <Partner
          href="https://gjensidige.lv"
          src="/gjensidige.png"
          alt="Gjensidige"
        />
        <Partner href="https://balcia.lv" src="/balcia.png" alt="Balcia" />
        <Partner href="https://bta.lv" src="/bta.png" alt="BTA" />
        <Partner href="https://balta.lv" src="/balta.png" alt="Balta" />
      </div>
    </div>
  );
};

export default Partners;
