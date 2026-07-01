const ResourceSLPInfo = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Speech Language Pathologists</h2>

        <div className="mt-6 space-y-8 text-sm text-slate-700">
          <div>
            <p className="text-xl font-semibold text-slate-900">Red Rock Pediatric Therapies</p>
            <div className="mt-2 pl-4 space-y-2">
              <a
                href="https://www.redrockpediatrictherapies.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                www.redrockpediatrictherapies.com
              </a>
              <p>Call or text (435)-200-4968</p>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900">Prickly Pear Pediatric Therapy</p>
            <div className="mt-2 pl-4 space-y-2">
              <a href="https://pricklypearkids.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">
                https://pricklypearkids.com/
              </a>
              <p className="text-slate-700">Phone: (435) 200-4844</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSLPInfo;
