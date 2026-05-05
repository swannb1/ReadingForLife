import BeadsImage from "../../assets/Images/Beads.svg";

const WhatIsDyslexia = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-[color:var(--color-softBlue)] translate-x-[-16px] translate-y-[16px] rounded-xl" aria-hidden />
          <div className="relative overflow-hidden shadow-md rounded-xl">
            <img src={BeadsImage} alt="Letter beads spelling words" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-cubano text-4xl text-[color:var(--color-blue)]">WHAT IS DYSLEXIA?</h2>
          <p className="font-puffin text-[color:var(--color-black)] leading-7">
            Dyslexia is a language-based learning difference that affects how the brain processes written and spoken language. It is not related to
            intelligence. Children with dyslexia are often bright, creative, and strong thinkers. Dyslexia primarily affects reading, spelling, and
            writing by making it harder to map letters to sounds and blend sounds into words. With the right Instruction, children with dyslexia can
            become confident, capable readers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDyslexia;
