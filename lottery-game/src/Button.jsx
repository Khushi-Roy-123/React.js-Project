export default function Button({ action, disabled }) {
    return (
        <button
            onClick={action}
            disabled={disabled}
            className={`px-10 py-4 font-bold text-xl rounded-full flex items-center gap-2 justify-center mx-auto transition-all transform
                ${disabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none scale-100'
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-orange-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-200'
                }`}
        >
            <span className="text-2xl">{disabled ? '🚫' : '🎟️'}</span> Buy New Ticket
        </button>
    );
}
