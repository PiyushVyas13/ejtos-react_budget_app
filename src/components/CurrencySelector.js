import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
        })
    }

    return (
        <div className="alert alert-secondary">
                <span>Currency: </span>
                <select style={{display: "inline", width: "60%"}} className="form-select form-select-sm" onChange={handleCurrencyChange}>
                    <option selected={currency === "$"}value='$'>$ Dollar</option>
                    <option selected={currency === "&pound;"} value="&pound;">&pound; Pound</option>
                    <option selected={currency === "&euro;"}value="&euro;">&euro; Euro</option>
                    <option selected={currency === "&#8377;"}value="&#8377;">&#8377; Ruppee</option>
                </select>
        </div>
            
    );
}

export default CurrencySelector;