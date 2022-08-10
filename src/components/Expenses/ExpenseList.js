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

  console.log(yearInput);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearInput.filteredYear}
        onFilterExpenseYear={filterExpenseYearHandler}
      />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default ExpenseList;
