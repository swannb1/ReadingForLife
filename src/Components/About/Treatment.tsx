import KidsImage from "../../assets/Images/Kids.svg";

const Treatment = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-[color:var(--color-softBlue)] translate-x-[-16px] translate-y-[16px] rounded-xl" aria-hidden />
          <div className="relative overflow-hidden shadow-md rounded-xl">
            <img src={KidsImage} alt="Children holding books" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-cubano text-4xl text-[color:var(--color-blue)]">RESEARCH-BASED READING SUPPORT</h2>
          <p className="font-puffin text-[color:var(--color-black)] leading-7">
            The most effective way to teach children with dyslexia is through structured, explicit, systematic phonics-based instruction, often called
            Structured Literacy or Orton-Gillingham-based teaching. This approach is grounded in decades of research and focuses on phonemic
            awareness, phonics, fluency, vocabulary, and comprehension. When instruction is direct, multisensory, and sequential, children with
            dyslexia can make meaningful, lasting progress in reading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
