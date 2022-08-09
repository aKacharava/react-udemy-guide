import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props){
  const [title, setTitle] = useState(props.title);

  let amount = props.amount;
  let date = props.date;

  function clickHandler() {
    setTitle('Updated!');
    console.log('Clicked!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />      
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;