const Scholarships = () => {
  return (
    <section className="bg-[color:var(--color-neutral)] px-6 py-14">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <div className="h-3 bg-[color:var(--color-softOrange)] w-36 mb-2" />
          <h2 className="font-cubano text-3xl text-[color:var(--color-orange)]">Scholarships</h2>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-[color:var(--color-blue)]/10 p-6 space-y-4">
          <p className="font-puffin text-[color:var(--color-black)] leading-7">
            <strong>Every child deserves to read, regardless of their financial situation.</strong> Once approved, we provide scholarships for{" "}
            <strong>Orton-Gillingham tutoring</strong>—a gold-standard, multisensory approach for students with dyslexia. Because specialized
            instruction is often expensive and hard to find, our program bridges the gap by offering scholarships to work with:
          </p>
          <ul className="list-disc list-inside space-y-2 font-puffin text-[color:var(--color-black)] leading-7">
            <li>
              <strong>Expert Instruction:</strong> Work with highly trained, specialized tutors.
            </li>
            <li>
              <strong>Proven Results:</strong> Use research-backed, systematic reading methods.
            </li>
            <li>
              <strong>Tailored Support:</strong> Receive individualized lessons tailored to your child’s specific needs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
