import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React from 'react';
import Card from './Card';
function ExpenseItem(props){
    // const expenseDate = new Date(2023,3,6);
    // const expenseTitle='Car insurance';
    // const expenseAmount=297.4;

    return(
        
         <Card className="expense-item">

           <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
               <h2>{props.title}</h2>
               <div className="expense-item_price">${props.amount}</div>
            </div>

         </Card>
    );
}
export default ExpenseItem