export default function TicketNum({ num }) {
    return (
        <span className="inline-flex items-center justify-center w-16 h-20 text-4xl font-bold bg-white text-gray-800 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-gray-100 transform transition-transform hover:-translate-y-1 animate-pop bg-gradient-to-b from-white to-gray-50 bg-clip-padding">
            {num}
        </span>
    );
}
