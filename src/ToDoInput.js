import { useState } from "react";

const ToDoInput = (props) => {

    const [inputValue, setInputValue] = useState("")

    const formSubmitHandler = event => {
        event.preventDefault();
        setInputValue("")
        props.addInput(inputValue);


    }

    const inputValueHandler = (event) => {
        setInputValue(event.target.value)
    }


    return (
        <form className="form" onSubmit={formSubmitHandler}>

            <div className="form--input">
                <label>What is on your to-do list?</label>
                <input required onChange={inputValueHandler} type="text" value={inputValue} />
            </div>
            <button className="form--input-button" type="submit">Add new thing</button>
            <h3 style={{ textAlign: "center", color: "white" }}>You got {props.allItems.length} tasks left to complete!</h3>
        </form>
    )
}

export default ToDoInput