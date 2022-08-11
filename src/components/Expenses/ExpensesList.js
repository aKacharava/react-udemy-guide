import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return(
      <h2 className="expenses-list__fallback">No expenses found.</h2>
    );
  }

  return(
    <ul className="expenses-list">
      {
        props.expenses.map(function (expense) {
          return (
            <li>
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </li>
          );
        })
      }
    </ul>
  )
}

export default ExpensesList;