import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, expenses, dispatch, currency} = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const handleNewBudget = (e) => {
        if(e.target.value > 20000) {
            alert("Budget cannot exceed $20000!");
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return(total += item.cost);
        }, 0);

        if(e.target.value < totalExpenses) {
            alert("Budget cannot be less than current spending $" + totalExpenses);
            return;
        }
        setNewBudget(e.target.value);

        dispatch({
            type: "SET_BUDGET",
            payload: e.target.value 
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span style={{marginRight: "0.5em"}}>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleNewBudget} />
        </div>
    )
}

export default Budget;