type MissionSectionProps = {
  text: string;
};

const MissionSection: React.FC<MissionSectionProps> = ({ text }) => {
  const blueLayers = [
    { height: 60, opacity: 0.45 },
    { height: 100, opacity: 0.45 },
    { height: 140, opacity: 0.45 },
  ]; // back to front, matching orange sizing

  return (
    <section className="relative z-10 bg-[color:var(--color-blue)] text-white pt-16 pb-10 px-6 overflow-visible">
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20">
        {blueLayers.map((layer, index) => (
          <div
            key={`mission-blue-${index}`}
            className="absolute left-0 right-0"
            style={{
              height: `${layer.height}px`,
              top: `${-layer.height + 1}px`,
              clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
              backgroundColor: `rgba(64, 95, 122, ${layer.opacity})`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center font-puffin text-lg md:text-2xl leading-8 md:leading-9 relative">
        <div>{text}</div>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:contact@rflutah.org"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-cubano text-sm tracking-wide uppercase text-[color:var(--color-blue)] shadow-sm ring-1 ring-white/30 transition-colors duration-200 hover:bg-[color:var(--color-softBlue)] hover:text-white md:text-base"
          >
            Contact us at contact@rflutah.org
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
