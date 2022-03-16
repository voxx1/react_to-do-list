const ToDoItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li onClick={deleteHandler}>
            {props.value}
        </li>
    )
}

export default ToDoItem