import { useState } from "react";

type Advice = {
  id: number;
  advice: string;
};

function App() {
  const [advice, setAdvice] = useState<Advice>({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setAdvice(data.slip);
    } catch (error) {
      console.log("Failed to get advice");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1f2632] px-4">
      <div className="relative w-full max-w-[540px] rounded-xl bg-[#323a49] px-6 pb-16 pt-10 text-center shadow-lg sm:px-12">
        <p className="mb-5 text-xs font-extrabold uppercase tracking-[4px] text-[#52ffa8]">
          Advice #{advice.id}
        </p>

        <h1 className="text-[24px] font-extrabold leading-relaxed text-[#cee3e9] sm:text-[28px]">
          “{advice.advice}”
        </h1>

        <div className="my-7">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="/images/pattern-divider-mobile.svg"
            />

            <img
              src="/images/pattern-divider-desktop.svg"
              alt=""
              className="mx-auto w-full"
            />
          </picture>
        </div>

        <button
          onClick={getAdvice}
          className="absolute bottom-[-32px] left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-[#52ffa8] transition duration-300 hover:shadow-[0_0_30px_#52ffa8]"
          aria-label="Get new advice"
        >
          <img src="/images/icon-dice.svg" alt="" className="h-6 w-6" />
        </button>
      </div>
    </main>
  );
}

export default App;
