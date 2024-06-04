import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import {TiDelete} from 'react-icons/ti'
import { FaPlusCircle } from "react-icons/fa";

const ExpenseItem = ({id, name, cost}) => {
    const {dispatch, currency} = useContext(AppContext);

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
            <td>{currency}{cost}</td>
            <td style={{paddingLeft: "1.8rem"}}>
                <button onClick={(e) => increaseAllocation(name)}>
                    +
                </button>
            </td>
            <td style={{paddingLeft: "1.2rem"}}>
                <TiDelete size="1.5em" onClick={handleDeleteExpenses}/>
            </td>
        </tr>
    )
}

export default ExpenseItem;