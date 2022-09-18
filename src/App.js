import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpenses/NewExpense';

let DUMMY_eXPENSE = [
  {
    id: 'e1',
    title: 'school Fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2021, 2, 22)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 700,
    date: new Date(2021, 4, 2)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 540,
    date: new Date(2021, 5, 5)
  },
];

const App= () => {
  const [expenses, setExpenses] = useState(DUMMY_eXPENSE);

  const addExpenseHandler = (expense) => {
    const updateExpense = [expense, ...expenses];
      setExpenses(updateExpense);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
    </>
  )
}

export default App;
