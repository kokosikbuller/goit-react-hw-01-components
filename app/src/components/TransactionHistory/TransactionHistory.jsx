import React from 'react';
import './TransactionHistory.scss'

function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map(({type, amount, id, currency}) => {
                    const changeFirstSymbol = type.slice(0,1).toUpperCase() + type.slice(1, type.length);
                    return (
                        <tr key={id}>
                            <td>{changeFirstSymbol}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    );
}

export default TransactionHistory;