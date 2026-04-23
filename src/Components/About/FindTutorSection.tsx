const FindTutorSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative">
        <div className="absolute -left-5 -top-5 w-full h-full bg-[color:var(--color-softBlue)] rounded-xl" aria-hidden />
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
          alt="Tutor reading with a student"
          className="relative w-full aspect-[4/5] max-h-[360px] object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="h-3 bg-[color:var(--color-softOrange)] w-36 mb-2" />
          <h2 className="font-cubano text-3xl text-[color:var(--color-orange)]">About Us</h2>
        </div>
        <p className="text-[color:var(--color-black)] font-puffin leading-7 text-base">
          Reading For Life Southern Utah was established in ____. Our goal is to provide information about dyslexia and resources for children, youth,
          and adults seeking reading support in Southern Utah. We offer tutoring scholarships with instructors trained in Structured Literacy and
          Orton-Gillingham methods.
        </p>
      </div>
    </section>
  );
};

export default FindTutorSection;
