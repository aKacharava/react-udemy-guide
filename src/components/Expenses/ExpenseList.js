import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";

function ExpenseList(props) {
  const [yearInput, setYearInput] = useState({
    filteredYear: "2022",
  });

  function filterExpenseYearHandler(year) {
    setYearInput(function (prevState) {
      return { ...prevState, filteredYear: year };
    });
  }

  const filteredExpenses = props.expenses.filter(function(expense){
    return expense.date.getFullYear().toString() === yearInput.filteredYear;
  })

  let expensesContent = <p>No Expenses found.</p>;

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map(function (expense) {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearInput.filteredYear}
        onFilterExpenseYear={filterExpenseYearHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default ExpenseList;
