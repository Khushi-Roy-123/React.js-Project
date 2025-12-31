import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
import History from "./History";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Lottery({ n = 3, winCondition }) {
    // Game State
    const [ticket, setTicket] = useState(genTicket(n));
    const [balance, setBalance] = useState(100);
    const [history, setHistory] = useState([]);

    // Hooks
    const { width, height } = useWindowSize();
    const isWinning = winCondition(ticket);
    const isBankrupt = balance <= 0 && !isWinning;

    const buyTicket = () => {
        if (balance < 10) return; // Prevent buying if broke

        const newTicket = genTicket(n);
        const win = winCondition(newTicket);

        // Update Balance
        setBalance(prev => win ? prev + 40 : prev - 10); // -10 cost + 50 reward = +40 net on win
        setTicket(newTicket);

        // Update History (Keep last 5)
        setHistory(prev => [{ ticket: newTicket, win }, ...prev].slice(0, 5));
    };

    const resetGame = () => {
        setBalance(100);
        setHistory([]);
        setTicket(genTicket(n));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 text-gray-800 p-4 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            {isWinning && <Confetti width={width} height={height} numberOfPieces={500} recycle={false} gravity={0.1} />}

            <div className="relative z-10 bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 text-center max-w-lg w-full transform transition-all hover:scale-[1.01] duration-300">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                        Lottery
                    </h1>
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-orange-100 flex items-center gap-2">
                        <span className="text-xl">💰</span>
                        <span className={`text-xl font-bold font-mono ${balance < 20 ? 'text-red-500 animate-pulse' : 'text-gray-800'}`}>${balance}</span>
                    </div>
                </div>

                {isBankrupt ? (
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-gray-400 mb-2">💸 Bankrupt!</h2>
                        <p className="text-gray-500 mb-6">You ran out of money.</p>
                        <button
                            onClick={resetGame}
                            className="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all"
                        >
                            Restart Game ($100)
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6 p-3 bg-orange-50/50 rounded-xl border border-orange-100 flex justify-between items-center text-sm">
                            <span className="text-gray-500">Ticket Cost: <strong className="text-gray-800">$10</strong></span>
                            <span className="text-gray-500">Prize: <strong className="text-green-600">+$50</strong></span>
                            <span className="text-gray-500">Target: <strong className="text-orange-600">{winCondition.targetSum || 15}</strong></span>
                        </div>

                        <div className="perspective-1000 my-4">
                            <Ticket ticket={ticket} />
                        </div>

                        <div className="mt-6 mb-2">
                            <Button action={buyTicket} disabled={balance < 10} />
                        </div>

                        <div className="h-6 mt-2">
                            {isWinning && (
                                <h3 className="text-xl font-bold text-green-600 animate-bounce">
                                    🎉 You Won $50! 🎉
                                </h3>
                            )}
                        </div>
                    </>
                )}

                <History history={history} />
            </div>


        </div>
    );
}
