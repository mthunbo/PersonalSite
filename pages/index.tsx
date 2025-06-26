import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Velkommen til min portfolio
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Jeg er en passioneret datatekniker med speciale i programmering. Her kan du læse om mig og mine projekter.
      </motion.p>
    </main>
  );
}
