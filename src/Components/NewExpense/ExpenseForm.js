import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  //-------------------------------------------------- classic way
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(enteredAmount);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(enteredDate);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      // id: 'e0',
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
