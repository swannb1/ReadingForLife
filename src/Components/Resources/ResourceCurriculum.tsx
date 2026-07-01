const ResourceCurriculum = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Curriculum</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          <div className="pl-4">
            <a
              href="https://www.epslearning.com/products/spire-overview"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-slate-900 underline"
            >
              SPIRE
            </a>
          </div>

          <div className="pl-4">
            <a
              href="https://www.allaboutlearningpress.net/go.php?id=3048&url=9811"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-slate-900 underline"
            >
              All About Reading
            </a>
          </div>

          <div className="pl-4">
            <a href="https://readinghorizons.com/" target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 underline">
              Reading Horizons
            </a>
          </div>

          <div className="pl-4">
            <a href="https://bartonreading.com/" target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 underline">
              Barton
            </a>
          </div>

          <div className="pl-4">
            <a href="https://logicofenglish.com/" target="_blank" rel="noreferrer" className="text-lg font-semibold text-slate-900 underline">
              Logic of English
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCurriculum;
