import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020")
  const filteredExpenseYear = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (<>
    <Card className="expenses">
    <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expenses = {filteredExpenseYear} />
    <ExpensesList items ={filteredExpenseYear}/>
    </Card>
    </>
  );
}

export default Expenses;
