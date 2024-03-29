import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearInput.filteredYear}
        onFilterExpenseYear={filterExpenseYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
