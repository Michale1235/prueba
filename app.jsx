import { useEffect, useState } from "react";
import { FaHome, FaCoins, FaTasks, FaUserFriends } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function MiningApp() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + 0.00000546);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const referralLink = `${window.location.origin}/invite`;

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4">
      <h1 className="text-4xl font-extrabold text-center mb-2 text-yellow-400 drop-shadow-lg">
        Mining App
      </h1>
      <p className="text-center text-gray-300">Start mining and earn rewards!</p>

      <Card className="mt-6 p-6 text-center bg-gray-800 border border-gray-600 shadow-xl rounded-3xl">
        <CardContent>
          <motion.h2
            className="text-6xl font-extrabold text-blue-400 drop-shadow-md"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            {points.toFixed(8)}
          </motion.h2>
          <p className="text-gray-400 text-sm">LIONS / Sec</p>
        </CardContent>
      </Card>

      <Button
        className="mt-6 bg-yellow-500 hover:bg-yellow-400 w-full font-bold text-black py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        onClick={() => navigator.clipboard.writeText(referralLink)}
      >
        Copy Referral Link
      </Button>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around p-4 border-t border-gray-700 rounded-t-2xl shadow-xl">
        <div className="flex flex-col items-center text-gray-400 hover:text-white transition duration-300">
          <FaHome size={30} />
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center text-yellow-400">
          <FaCoins size={30} />
          <span className="text-sm font-bold">Earn</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-white transition duration-300">
          <FaTasks size={30} />
          <span className="text-sm">Tasks</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 hover:text-white transition duration-300">
          <FaUserFriends size={30} />
          <span className="text-sm">Friends</span>
        </div>
      </div>
    </div>
  );
}
