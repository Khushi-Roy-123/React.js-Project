export default function History({ history }) {
    if (history.length === 0) return null;

    return (
        <div className="mt-8 w-full max-w-sm">
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-3 text-center">Last 5 Attempts</h3>
            <div className="flex flex-col gap-2">
                {history.map((entry, idx) => (
                    <div key={idx} className={`flex justify-between items-center p-3 rounded-lg border ${entry.win ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100'}`}>
                        <div className="flex gap-1">
                            {entry.ticket.map((num, i) => (
                                <span key={i} className="font-mono font-bold text-gray-700">{num}</span>
                            ))}
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${entry.win ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
                            {entry.win ? '+$50' : '-$10'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
