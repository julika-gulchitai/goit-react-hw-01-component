import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionHeder}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <>
              <tr key={id}>
                <td className={s.tableType}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
