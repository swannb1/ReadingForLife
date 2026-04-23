const resourceCards = [
  {
    title: "Resources in Southern Utah",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    description: "We offer a directory of Southern Utah resources, including diagnostic screeners, advocacy support, psychologists, and tutors.",
  },
];

const sideResources = [
  {
    title: "Screenings",
    image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Psychologists",
    image: "https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Advocacy",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80",
  },
];

const ResourcesSection = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-2">
          <div className="h-3 bg-[color:var(--color-softOrange)] w-40" />
          <h2 className="font-cubano text-3xl text-[color:var(--color-blue)]">Resources</h2>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 mt-10">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src={resourceCards[0].image} alt={resourceCards[0].title} className="w-full h-64 object-cover" />
            </div>
            <h3 className="font-cubano text-xl text-[color:var(--color-blue)]">{resourceCards[0].title}</h3>
            <p className="font-puffin text-[color:var(--color-black)] opacity-80 leading-7">{resourceCards[0].description}</p>
          </div>

          <div className="space-y-6">
            {sideResources.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="w-28 h-24 rounded-lg overflow-hidden shadow-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-cubano text-lg text-[color:var(--color-blue)]">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
