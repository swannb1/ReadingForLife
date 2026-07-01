import React, { useState } from "react";

type Tutor = {
  name: string;
  city?: string;
  certification: string;
  phone: string;
  email?: string;
  summer: string;
  schoolYear: string;
  location: string;
  availability: string;
};

const tutorList: Tutor[] = [
  {
    name: "Melanie Palmer",
    certification: "Wilson Level 1",
    phone: "435-359-3012",
    summer: "Yes",
    schoolYear: "Yes",
    location: "Majestic Fields Area",
    availability: "After",
  },
  {
    name: "Mackenzie Gillespie",
    certification: "Wilson Level 1",
    phone: "435-215-8661",
    summer: "Yes",
    schoolYear: "Yes",
    location: "Ivins Area",
    availability: "Before / After",
  },
  {
    name: "Michelle Sharp",
    certification: "Wilson Level 1",
    phone: "435-414-5635",
    summer: "June / July",
    schoolYear: "No",
    location: "Horizon Area",
    availability: "TBD",
  },
  {
    name: "Laura Joyce",
    certification: "Wilson Level 1",
    phone: "435-632-5482",
    summer: "Yes",
    schoolYear: "Yes",
    location: "Bloomington Area",
    availability: "Before / After",
  },
  {
    name: "Deanna Iverson",
    certification: "Wilson Level 1",
    phone: "435-656-3735",
    summer: "Yes",
    schoolYear: "Yes",
    location: "Bloomington Area",
    availability: "After",
  },
  {
    name: "Lorey Beard",
    certification: "Wilson Level 1",
    phone: "435-680-4187",
    summer: "Yes",
    schoolYear: "Yes",
    location: "Panorama Area",
    availability: "Before / After",
  },
  {
    name: "Rachelle Christian",
    certification: "Wilson Level 1",
    phone: "435-668-7184",
    summer: "No",
    schoolYear: "Yes",
    location: "Hurricane Area",
    availability: "After",
  },
  {
    name: "Ruth Alvarez",
    certification: "Wilson Level 1",
    phone: "435-830-5639",
    summer: "Yes",
    schoolYear: "No",
    location: "Cedar City Area",
    availability: "TBD",
  },
  {
    name: "Meagan Newby",
    certification: "Wilson Level 1",
    phone: "435-512-8137",
    summer: "Yes",
    schoolYear: "Yes",
    location: "Online Only",
    availability: "TBD",
  },
  {
    name: "Sara Patchett",
    city: "St. George",
    certification: "Orton Gillingham Certified Tutor",
    phone: "(702)541-2861",
    email: "saralpatch@gmail.com",
    summer: "TBD",
    schoolYear: "TBD",
    location: "St. George, UT",
    availability: "TBD",
  },
  {
    name: "Janice Chandler",
    city: "Santa Clara",
    certification: "Orton Gillingham Tutor, BS, MS",
    phone: "(435)817-6734",
    email: "Janchan16@gmail.com",
    summer: "TBD",
    schoolYear: "TBD",
    location: "Santa Clara, UT",
    availability: "TBD",
  },
  {
    name: "Liz Garcia",
    city: "Washington",
    certification: "Orton Gillingham Certified Tutor",
    phone: "(801)857-1900",
    email: "decodingreading@gmail.com",
    summer: "TBD",
    schoolYear: "TBD",
    location: "Washington, UT",
    availability: "TBD",
  },
  {
    name: "Allyson Gardner",
    city: "Santa Clara",
    certification: "Orton Gillingham Tutor, BS, MS",
    phone: "(435)313-6934",
    email: "allyson@kidsnbooks.com",
    summer: "TBD",
    schoolYear: "TBD",
    location: "Santa Clara, UT",
    availability: "TBD",
  },
];

const TutorCardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTutor = tutorList[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? tutorList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === tutorList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Tutor Directory</h2>
        </div>

        <div className="relative px-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Tutor</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{currentTutor.name}</h3>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <span className="font-semibold">Certification:</span> {currentTutor.certification}
              </div>
              <div>
                <span className="font-semibold">Phone:</span> {currentTutor.phone}
              </div>
              <div>
                <span className="font-semibold">Summer:</span> {currentTutor.summer}
              </div>
              <div>
                <span className="font-semibold">School year:</span> {currentTutor.schoolYear}
              </div>
              <div>
                <span className="font-semibold">Location:</span> {currentTutor.location}
              </div>
              <div>
                <span className="font-semibold">Before/After school:</span> {currentTutor.availability}
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {tutorList.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to card ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-slate-500 ${
                    index === currentIndex ? "bg-slate-900" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </article>

          <button
            type="button"
            onClick={handlePrevious}
            className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 p-4 text-white shadow-lg transition hover:bg-slate-900"
            aria-label="Previous tutor"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 p-4 text-white shadow-lg transition hover:bg-slate-900"
            aria-label="Next tutor"
          >
            <span className="text-2xl leading-none">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorCardList;
