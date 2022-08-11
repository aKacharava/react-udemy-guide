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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearInput.filteredYear}
        onFilterExpenseYear={filterExpenseYearHandler}
      />
      {
        props.expenses.map(function(expense){
          return(
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      }
    </Card>
  );
}

export default ExpenseList;
