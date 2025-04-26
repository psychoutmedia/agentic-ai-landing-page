import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agentic AI Music — Unlock Your Best Tracks</title>
        <meta name="description" content="Unlock your creative potential with Agentic AI — your ultimate music assistant. Create faster, smarter, and finish more tracks with ease." />
        <link rel="icon" href="/favicon.ico" />
        {/* Load Poppins font */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-20 space-y-24">
        
        {/* Hero Section */}
        <section
            data-aos="fade-down"
            className="text-center max-w-4xl space-y-8 py-20"
        >
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            Unlock Your Best Tracks {" "}
            <span className="text-indigo-400 whitespace-nowrap">Faster, Smarter, Together.</span>
          </h1>
          <p className="text-lg text-slate-300">
            Meet your new creative partner: an AI assistant built to boost inspiration, streamline production, and help you finish more music — without losing your soul.
          </p>
          <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 transition transform hover:scale-105 rounded-full font-semibold shadow-lg">
            🔥 Join the Early Access List
          </button>
        </section>

        {/* Pain Point Section */}
        <section
            data-aos="fade-up"
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-20"
        >
          <h2 className="text-3xl font-bold mb-4">Making Music Shouldn&apos;t Feel This Overwhelming</h2>
          <p className="text-slate-300">
            If you&apos;re stuck in creative ruts, battling complex software, or spending hours tweaking tiny details, you&apos;re not alone. Most independent musicians hit the same wall — and too many great ideas die unfinished. There&apos;s a better way.
          </p>
        </section>

        {/* Features Section */}
        <section
            data-aos="fade-up"
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-20 space-y-4"
        >
        <h2 className="text-3xl font-bold mb-6">
  Your Personal Creative Wingman,
  <br />
  <span className="text-indigo-400 text-4xl block mt-2">Inside Your DAW</span>
</h2>
<div className="mx-auto max-w-md">
  <ul className="space-y-3 text-left">
    <li>🎼 <span className="font-semibold">Generate melodies, chords, and structures on demand</span></li>
    <li>⚙️ <span className="font-semibold">Get real-time production tips — right as you work</span></li>
    <li>⚡ <span className="font-semibold">Automate the hard stuff: mixing, leveling, organization</span></li>
    <li>🏁 <span className="font-semibold">Finish more tracks, faster, and sound better doing it</span></li>
  </ul>
</div>

          <p className="mt-6 text-slate-400 text-sm">
            This isn&apos;t a robot making music for you. It&apos;s a creative amplifier — tuned to your vision, your style, your flow.
          </p>
        </section>

        {/* How It Works */}
        <section
            data-aos="fade-up"
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-20 space-y-4"
        >
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <ol className="list-decimal list-inside text-left space-y-2">
            <li><span className="font-bold">Talk to Your AI:</span> Describe the vibe or idea you&apos;re chasing — in plain English.</li>
            <li><span className="font-bold">Watch It Assist:</span> Get instant musical ideas, arrangement templates, and production fixes.</li>
            <li><span className="font-bold">Stay In Control:</span> Accept, tweak, or reject suggestions at any time. You stay the artist. It stays the assistant.</li>
          </ol>
        </section>

        {/* Early Access CTA */}
        <section
            data-aos="fade-up"
            className="text-center max-w-4xl space-y-6 py-20"
        >

          <h2 className="text-3xl font-bold mb-4">Built for Musicians. Shaped by Musicians.</h2>
          <p className="text-slate-300">
            Our Early Access members aren&apos;t just beta testers — they&apos;re co-creators. Sign up now to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
            <li>✅ Be the first to try the AI Assistant Plugin</li>
            <li>✅ Help shape the features and future</li>
            <li>✅ Get exclusive lifetime perks</li>
          </ul>
          <button className="mt-6 px-8 py-4 bg-pink-500 hover:bg-pink-600 transition transform hover:scale-105 rounded-full font-semibold shadow-lg">
            🚀 Get Early Access
          </button>
        </section>

        {/* Footer */}
        <footer
            data-aos="fade-up"
            className="pt-20 text-center text-sm text-slate-500"
        >
          <p>© 2025 AgenticAI Music. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </footer>

      </main>
    </>
  );
}