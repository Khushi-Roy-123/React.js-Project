import TicketNum from "./TicketNum";

export default function Ticket({ ticket }) {
    return (
        <div className="flex justify-center gap-4 my-6 p-6 bg-white rounded-2xl shadow-inner border border-gray-100">
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}
