import React from 'react'
import './expenseItem.scss'


export default function ExpenseItem() {
    const expense_date = new Date(2021, 7, 12);
    const expense_title = 'Car Insurance';
    const expense_amount = 294.67;
  return (
    <div className='expense-item'>
        <div>{expense_date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expense_title}</h2>
            <div className='expense-item__price'>${expense_amount}</div>
        </div>
    </div>
  )
}
