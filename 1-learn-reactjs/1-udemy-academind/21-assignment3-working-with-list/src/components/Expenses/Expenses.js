import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019'); 

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        props.onFilterYearHandler(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                
                {/* Dynamic List */}
                {props.items.map((item) => (
                    <ExpenseItem 
                        key={item.id}
                        title={item.title} 
                        amount={item.amount} 
                        date={item.date} 
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;