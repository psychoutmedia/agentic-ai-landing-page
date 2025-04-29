import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("%c🚀 Welcome to Vibe Producer!", "color: #6366f1; font-weight: bold;");
      console.log("Initializing AOS...");
      AOS.init({
        once: true, // Animations run only once
        duration: 800,
        easing: "ease-out",
        disable: "mobile", // Disable AOS on mobile
        offset: 200, // Increased offset to trigger animations earlier
      });
      console.log("AOS initialized");
      console.log("Footer should render below 'Built for Musicians' section");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Vibe Producer — Unlock Your Best Tracks</title>
        <meta name="description" content="Join the next evolution of music creation. AI that feels like magic." />
        <meta name="color-scheme" content="dark light" />
        <meta property="og:title" content="Vibe Producer — Unlock Your Best Tracks" />
        <meta property="og:description" content="Join the next evolution of music creation. AI that feels like magic." />
        <meta property="og:url" content="https://vibeproducer.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vibeproducer.com/Vibe_Producer.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibe Producer — Unlock Your Best Tracks" />
        <meta name="twitter:description" content="Join the next evolution of music creation. AI that feels like magic." />
        <meta name="twitter:image" content="https://vibeproducer.com/Vibe_Producer.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-col items-center justify-start px-4 pt-6 sm:pt-12 space-y-8 sm:space-y-16">
        <section data-aos="fade-down" className="text-center w-full max-w-4xl space-y-4 sm:space-y-6 py-6 sm:py-10 px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Unlock Your Best Tracks <span className="block text-indigo-400">Faster, Smarter, Together.</span>
          </h1>
          <p className="text-lg text-slate-300">
            Meet your new creative partner: an AI assistant built to boost inspiration, streamline production, and help you finish more music — without losing your soul.
          </p>
        </section>

        <div className="logo-wrapper" data-aos="fade-up">
          <Image
            src="/vibe-logo-transparent.png"
            alt="Vibe Producer Logo"
            className="landing-logo"
            width={200}
            height={200} // Adjust based on your logo’s aspect ratio
            priority
          />
        </div>

        {/* Early Access Form */}
        <section className="mt-8 sm:mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-xl mx-auto text-center shadow-lg" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">Sign Up for Early Access</h3>
          <p className="text-slate-300 mb-6">Be among the first to experience the future of music production.</p>

          <form action="https://formspree.io/f/xeogolqk" method="POST" className="space-y-4">
            <input type="hidden" name="_redirect" value="https://vibeproducer.com/thank-you" />
            <input
              type="text"
              name="name"
              placeholder="Your Name (optional)"
              className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email Address"
              className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 transition transform hover:scale-105 rounded-lg font-semibold shadow-md"
            >
              🎶 Join Vibe Early Access
            </button>
          </form>
        </section>

        {/* Pain Point Section */}
        <section
          data-aos="fade-up"
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-12"
        >
          <h2 className="text-3xl font-bold mb-4">Making Music Shouldn’t Feel This Overwhelming</h2>
          <p className="text-slate-300">
            If you are stuck in creative ruts, battling complex software, or spending hours tweaking tiny details, you are not alone. Most independent musicians hit the same wall — and too many great ideas die unfinished. There is a better way.
          </p>
        </section>

        {/* Features Section */}
        <section
          data-aos="fade-up"
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-12 space-y-4"
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
            This isn’t a robot making music for you. It’s a creative amplifier — tuned to your vision, your style, your flow.
          </p>
        </section>

        {/* How It Works */}
        <section
          data-aos="fade-up"
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-12 space-y-4"
        >
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <ol className="list-decimal list-inside text-left space-y-6">
            <li className="flex items-start space-x-2">
              <motion.div
                initial={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.3 }}
                className="text-2xl p-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20"
              >
                🧠
              </motion.div>
              <div>
                <span className="font-bold text-indigo-400">Talk to Your AI:</span>
                <span className="text-slate-300"> Describe the vibe or idea you are chasing — in plain English.</span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <motion.div
                initial={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.3 }}
                className="text-2xl p-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20"
              >
                ⚡
              </motion.div>
              <div>
                <span className="font-bold text-indigo-400">Watch It Assist:</span>
                <span className="text-slate-300"> Get instant musical ideas, arrangement templates, and production fixes.</span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <motion.div
                initial={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.3 }}
                className="text-2xl p-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20"
              >
                🎯
              </motion.div>
              <div>
                <span className="font-bold text-indigo-400">Stay In Control:</span>
                <span className="text-slate-300"> Accept, tweak, or reject suggestions at any time. You stay the artist. It stays the assistant.</span>
              </div>
            </li>
          </ol>
        </section>

        {/* Built for Musicians */}
        <section
          data-aos="fade-up"
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-lg py-12 space-y-6"
        >
          <h2 className="text-3xl font-bold mb-6">Built for Musicians. Shaped by Musicians.</h2>
          <div className="space-y-4">
            <p className="text-slate-300">Our Early Access members aren’t just beta testers — they’re co-creators.</p>
            <p className="text-slate-300 font-semibold">Here’s what you’ll get as an Early Access member:</p>
          </div>
          <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md pt-6">
            <li>✅ Be the first to try the AI Assistant Plugin</li>
            <li>✅ Help shape the features and future</li>
            <li>✅ Get exclusive lifetime perks</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 text-center text-sm text-slate-500">
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