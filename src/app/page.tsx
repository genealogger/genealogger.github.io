export default function Home() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-600 uppercase bg-brand-50 rounded-full">
          Weekly Update: v0.1.2 is Live
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Handcrafted apps for
          <br />
          <span className="text-brand-600 decoration-brand-200">
            genealogists.
          </span>
        </h1>
        {/* <h2 className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Updates weekly.
        </h2> */}
        {/* <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-64">
          <input
            type="email"
            placeholder="Enter your email for beta access"
            className="flex-1 px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white shadow-sm"
          />
          <button className="px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:shadow-lg transition-all active:scale-95">
            Join the Beta
          </button>
        </div> */}

        {/* <h1 className="text-5xl md:text-5 font-extrabold mb-3 tracking-tight">
          Family Docs
        </h1>
        <p className="text-2xl text-slate-500 max-w-2xl mx-auto mb-5 leading-relaxed">
          File tagging, organization, and sharing.
        </p> */}

        {/* <div className="relative max-w-5xl mx-auto">
          <div className="absolute bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl blur opacity-20"></div>
          <div className="relative aspect-auto rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex items-center justify-center">
            <div className="text-center">
              <video controls muted autoPlay className="w-full h-auto">
                <source
                  src="demo-videos/demo-v0.1.0-alpha.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div> */}
      </main>

      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Building in Public</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              As a solo developer, I&apos;m documenting the entire engineering
              process. Each weekly update includes new features, bug fixes, and
              a deep dive into the technical hurdles I&apos;ve cleared.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-mono border border-slate-200">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-mono border border-slate-200">
                React
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-mono border border-slate-200">
                Dexie
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-mono border border-slate-200">
                Electron
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
              <div className="text-2xl font-bold text-brand-600 mb-1">01</div>
              <div className="text-sm font-medium text-slate-500 uppercase">
                Weeks Active
              </div>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-600 mb-1">01</div>
              <div className="text-sm font-medium text-slate-500 uppercase">
                Testers
              </div>
            </div>
            {/* <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 col-span-2">
              <div className="text-sm font-medium text-slate-500 uppercase mb-2">
                Latest Milestone
              </div>
              <div className="text-lg font-semibold italic text-slate-800">
                &quot;Successfully implemented local-first sync.&quot;
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        © 2026 Developed by DC
        {/* •{" "}
        <a href="#" className="hover:text-brand-600">
          Twitter
        </a>{" "}
        •{" "}
        <a href="#" className="hover:text-brand-600">
          GitHub
        </a> */}
      </footer>
    </>
  );
}
