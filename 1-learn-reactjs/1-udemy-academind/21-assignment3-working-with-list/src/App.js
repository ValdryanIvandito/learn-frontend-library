import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2020, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [expensesBuffer, setExpensesBuffer] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); 
    setExpensesBuffer((prevExpenses) => {
      return [expense, ...prevExpenses];
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  };

  const filterValueHandler = (selectedYear) => {
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(selectedYear));
    setExpensesBuffer(filteredExpenses);
    console.log(filteredExpenses);
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesBuffer} onFilterYearHandler={filterValueHandler}/>
    </div>
  );
}

export default App; 