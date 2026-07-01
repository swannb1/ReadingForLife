import React from "react";

const ResourceInfo = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              <a
                href="https://decodingdyslexiautah.org/wp-content/uploads/2023/03/utah-state-dyslexia-handbook.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 underline hover:text-slate-600"
              >
                Dyslexia Handbook Link
              </a>
            </h2>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">Organizations in Utah</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700 pl-4">
              <div>
                <a
                  href="https://decodingdyslexiautah.org/could-it-be-dyslexia/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 underline hover:text-slate-600"
                >
                  Decoding Dyslexia Utah
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">Screening</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700 pl-4">
              <div>
                <a
                  href="https://dyslexiaida.org/screening-for-dyslexia/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 underline hover:text-slate-600"
                >
                  IDA International Dyslexia Association online screening and resources
                </a>
              </div>
              <div>
                <a
                  href="https://uurc.utah.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 underline hover:text-slate-600"
                >
                  UURC Online assessment and programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceInfo;
