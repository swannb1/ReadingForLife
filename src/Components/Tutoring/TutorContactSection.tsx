type Tutor = {
  name: string;
  city: string;
  certification: string;
  phone: string;
  email: string;
};

const tutors: Tutor[] = [
  {
    name: "Sara Patchett",
    city: "St. George",
    certification: "Orton Gillingham Certified Tutor",
    phone: "(702)541-2861",
    email: "saralpatch@gmail.com",
  },
  {
    name: "Janice Chandler",
    city: "Santa Clara",
    certification: "Orton Gillingham Tutor, BS, MS",
    phone: "(435)817-6734",
    email: "Janchan16@gmail.com",
  },
  {
    name: "Liz Garcia",
    city: "Washington",
    certification: "Orton Gillingham Certified Tutor",
    phone: "(801)857-1900",
    email: "decodingreading@gmail.com",
  },
  {
    name: "Allyson Gardner",
    city: "Santa Clara",
    certification: "Orton Gillingham Tutor, BS, MS",
    phone: "(435)313-6934",
    email: "allyson@kidsnbooks.com",
  },
];

const TutorContactSection = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-center">
          <div className="px-6 py-3 bg-[color:var(--color-softBlue)] text-white font-cubano text-2xl rounded-full shadow">CONTACT</div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[color:var(--color-blue)]/15 shadow-sm overflow-x-auto">
          <table className="min-w-[720px] w-full text-left">
            <thead className="bg-[color:var(--color-neutral)] text-[color:var(--color-blue)] font-cubano text-sm uppercase tracking-wide">
              <tr>
                {["Name", "City", "Certification", "Phone", "Email"].map((header) => (
                  <th key={header} className="px-4 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-puffin text-[color:var(--color-blue)] text-sm">
              {tutors.map((tutor, idx) => (
                <tr key={tutor.email} className={idx % 2 === 0 ? "bg-white" : "bg-[color:var(--color-neutral)]/60"}>
                  <td className="px-4 py-3">{tutor.name}</td>
                  <td className="px-4 py-3">{tutor.city}</td>
                  <td className="px-4 py-3">{tutor.certification}</td>
                  <td className="px-4 py-3">{tutor.phone}</td>
                  <td className="px-4 py-3">{tutor.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TutorContactSection;
