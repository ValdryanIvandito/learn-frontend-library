import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpense = (props) => {
    const [triggerButton, setTriggerButton] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startChangeHandler = () => {
        setTriggerButton(true);
    }

    const stopChangeHandler = () => {
        setTriggerButton(false);
    }

    return (
        <div className="new-expense">
            {!triggerButton && 
                (<button onClick={startChangeHandler}>Add New Expense</button>
            )}
            {triggerButton && 
                (<ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancelTrigger={stopChangeHandler} 
                />
            )}
        </div>
    );
};

export default NewExpense;