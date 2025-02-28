import React, { useEffect, useState } from "react";
import { FaHome, FaCoins, FaTasks, FaUserFriends } from "react-icons/fa";

export default function MiningApp() {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints((prev) => prev + 0.00000546);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-screen bg-black text-white p-4">
            <h1 className="text-3xl font-extrabold text-center mb-2 text-yellow-400">
                Mining App
            </h1>
            <p className="text-center text-gray-300">Start mining and earn rewards!</p>

            <div className="mt-6 p-6 text-center bg-gray-900 border border-gray-700 shadow-lg rounded-2xl">
                <h2 className="text-5xl font-extrabold text-blue-400">
                    {points.toFixed(8)}
                </h2>
                <p className="text-gray-400 text-sm">LIONS / Sec</p>
            </div>

            <button onClick={() => navigator.clipboard.writeText(window.location.origin + "/invite")}>
                Copy Referral Link
            </button>

            <div className="fixed bottom-0 left-0 right-0 bg-gray-900 flex justify-around p-3 border-t border-gray-700 rounded-t-xl shadow-xl">
                <div className="flex flex-col items-center text-gray-400">
                    <FaHome size={28} />
                    <span className="text-xs">Home</span>
                </div>
                <div className="flex flex-col items-center text-yellow-400">
                    <FaCoins size={28} />
                    <span className="text-xs">Earn</span>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                    <FaTasks size={28} />
                    <span className="text-xs">Tasks</span>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                    <FaUserFriends size={28} />
                    <span className="text-xs">Friends</span>
                </div>
            </div>
        </div>
    );
}
