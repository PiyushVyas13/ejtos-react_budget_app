import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import {TiDelete} from 'react-icons/ti'

const ExpenseItem = ({id, name, cost}) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpenses = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id 
        })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        })
    }

    return(
        <tr>
            <td>{name}</td>
            <td>${cost}</td>
            <td>
                <button onClick={(e) => increaseAllocation(name)}>+</button>
            </td>
            <td>
                <TiDelete size="1.5em" onClick={handleDeleteExpenses}/>
            </td>
        </tr>
    )
}

export default ExpenseItem;