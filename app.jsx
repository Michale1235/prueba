import React, { useEffect, useState } from "react";

export default function MiningApp() {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints((prev) => prev + 0.00000546);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h1>Mining App</h1>
            <p>Start mining and earn rewards!</p>
            <h2>Your Points: {points.toFixed(8)}</h2>
            <button className="button">Mining...</button>
        </div>
    );
}
