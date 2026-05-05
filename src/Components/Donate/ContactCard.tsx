const ContactCard = () => {
  const contacts = [
    { label: "Email", value: "info@rflutah.org", icon: "@" },
    { label: "Phone", value: "(435)-429-0936", icon: "☎" },
  ];

  return (
    <section className="px-6 py-10 bg-white">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl shadow-md overflow-hidden bg-gradient-to-br from-[#1f9baf] via-[#1c90a1] to-[#177a8a] text-white">
          <div className="px-6 py-5 font-cubano text-lg">Contact Information</div>
          <div className="px-6 pb-6 space-y-4">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-cubano text-sm">{item.icon}</div>
                <div className="flex flex-col leading-5 font-puffin">
                  <span className="text-white/80 text-sm">{item.label}</span>
                  <span className="text-white text-base">{item.value}</span>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-white/20">
              <a
                href="https://account.venmo.com/u/ReadingForLifeSU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 underline font-puffin text-base transition-colors"
              >
                Donate via Venmo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
