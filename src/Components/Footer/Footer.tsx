const Footer = () => {
  return (
    <footer className="w-full bg-[color:var(--color-blue)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between gap-6">
        <div className="flex gap-4">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="w-14 h-14 rounded-2xl bg-[color:var(--color-softBlue)]"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
