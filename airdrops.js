// airdrops.js - Separate file for airdrops data
const airdrops = [
    {
        id: 11,
        title: "MinionLab",
        type: "depin",
        description: "Learn about MinionLab and its decentralized network of autonomous AI agents.",
        launchDate: "January 24, 2025",
        image: "path/to/minionlab-image.jpg",
        link: "https://minionlab.example.com",
        badges: ["Web", "Depin", "AI"]
    },
    {
        id: 12,
        title: "Lab",
        type: "depin",
        description: "Learn about Lab and its decentralized network of autonomous AI agents.",
        launchDate: "January 24, 2025",
        image: "path/to/lab-image.jpg",
        link: "https://lab.example.com",
        badges: ["Web", "Depin"]
    },
    // You can add more airdrops here
    {
        id: 13,
        title: "CryptoQuest",
        type: "gaming",
        description: "A blockchain-based gaming platform with play-to-earn mechanics.",
        launchDate: "February 15, 2025",
        image: "path/to/cryptoquest-image.jpg",
        link: "https://cryptoquest.example.com",
        badges: ["Gaming", "Web", "Testnet"]
    },
    {
        id: 14,
        title: "StakeHub",
        type: "staking",
        description: "A decentralized staking platform with high APY returns.",
        launchDate: "March 5, 2025",
        image: "path/to/stakehub-image.jpg",
        link: "https://stakehub.example.com",
        badges: ["Staking", "Web"]
    }
];

// Export the airdrops array so it can be used in other files
// This is only needed if you're using modules (import/export)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { airdrops };
}
