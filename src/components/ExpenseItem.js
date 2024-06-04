import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import {TiDelete} from 'react-icons/ti'

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

    const decreaseAllocation = (name) => {

        if(cost <= 0) {
            return;
        }
        const expense = {
            name,
            cost: -10
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{currency}{cost}</td>
            <td>
                <button style={{background: "transparent", border: "none"}} onClick={(e) => increaseAllocation(name)}>
                    <img src="/plus_icon.png" alt=""/>
                </button>
            </td>
            <td>
                <button style={{background: "transparent", border: "none"}} onClick={(e) => decreaseAllocation(name)}>
                    <img src="/minus_icon.png" alt=""/>
                </button>
            </td>
            <td style={{paddingLeft: "1.2rem"}}>
                <TiDelete size="1.5em" onClick={handleDeleteExpenses}/>
            </td>
        </tr>
    )
}

export default ExpenseItem;