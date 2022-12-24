function TaskToDo({item, setComplete, deleteItem})
{
    //this component takes three props
    // - item object which contains _id, complete, and description
    // - setComplete function which takes an id as parameter and boolean state for the complete to be set
    // - deleteItem function which takes an id as parameter
    return(
        
        <div>
            <div onClick={()=>{setComplete(item._id,!item.complete)}} className={item.complete? 'strike' : ''}>
                <p> {item.title} : {item.description} </p>
            </div>

            {item.complete && <button onClick={() =>{deleteItem(item._id)}}>Delete</button> }
        </div>
    )
}

export default TaskToDo;