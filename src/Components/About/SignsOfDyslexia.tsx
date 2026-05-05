import SignsImage from "../../assets/Images/Signs.svg";

const SignsOfDyslexia = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-cubano text-4xl text-[color:var(--color-blue)]">WHAT ARE SIGNS OF DYSLEXIA?</h2>
          <p className="font-puffin text-[color:var(--color-black)] leading-7">
            Signs of dyslexia can include difficulty learning letter sounds, difficulty blending sounds to read words, slow or inaccurate reading,
            frequent spelling errors, and avoidance of reading and writing tasks. Children may guess at words, struggle to remember sight words, or
            have strong oral langauage but weak reading skills. Dyslexia looks different in every child, but early identification and structured,
            explicit instruction can make a powerful difference.
          </p>
        </div>

        <div className="relative w-full max-w-md justify-self-end">
          <div className="absolute inset-0 bg-[color:var(--color-orange)] translate-x-[14px] translate-y-[14px] rounded-xl" aria-hidden />
          <div className="relative overflow-hidden shadow-md rounded-xl">
            <img src={SignsImage} alt="Child sitting by bookshelf" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignsOfDyslexia;
