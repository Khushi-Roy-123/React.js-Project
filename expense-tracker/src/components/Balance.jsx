import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Balance() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance-container">
            <h4 className="balance-label">Your Balance</h4>
            <h1 className="balance-amount" id="balance">${total}</h1>
        </div>
    )
}
