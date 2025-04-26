import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You for Joining Vibe Producer!</title>
        <meta name="description" content="You're officially on the list! Get ready for the future of music production with Vibe Producer." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-extrabold">🔥 Welcome to the Vibe!</h1>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl"
>
            🎉
        </motion.div>
          <p className="text-lg text-slate-300 max-w-lg">
            You&apos;re officially on the Early Access list.  
            <br />We&apos;ll be dropping exciting updates soon — stay tuned!
          </p>
          <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="relative"
>
  <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-50 blur-lg transition-opacity duration-300 hover:opacity-75"></div>
  <Link href="/" className="relative inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition transform rounded-full font-semibold shadow-lg">
    🚀 Back to Home
  </Link>
</motion.div>


          
        </motion.div>
      </main>
    </>
  );
}
