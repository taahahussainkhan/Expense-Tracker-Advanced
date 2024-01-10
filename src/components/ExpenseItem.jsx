import React from 'react'
import './expenseItem.scss'
import ExpenseDate from './ExpenseDate';


export default function ExpenseItem(props) {
    const expense_title =props.title;
    const expense_amount = props.amount;
  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{expense_title}</h2>
            <div className='expense-item__price'>${expense_amount}</div>
        </div>
    </div>
  )
}
