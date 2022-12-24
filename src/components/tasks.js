import {useEffect, useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskToDo from './TaskToDo';

function Tasks(){

    const notify = () => toast("Task Added/Removed");

    const [tasks, setTasks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    const loadTasksFromAPI = ()=>{
        
       axios.get('http://localhost:8080/api/tasks'+ tasks.id)
       .then((response)=>{
        if(response.status==200){
        setTasks(response.data);
        }
      })
        
    }

    const addItem = (item)=>{
        item.preventDefault();
        const title = item.target.elements.title.value;
        const description=item.target.elements.description.value;
        
        axios.post('http://localhost:8080/api/tasks/taskid', {
            'title' : title,
            'description' : description
            
        })
       .then((response)=>{
        if(response.status === 200)
        {
            setErrorMessage("");
            loadTasksFromAPI()
            item.target.elements.title.value="";
            item.target.elements.description.value="";
            
        }
       })

        .catch((error)=>{
           
            setErrorMessage("Must input a title that has 3 or more characters")
            
        })
  
    }

    useEffect(()=>{
        loadTasksFromAPI();

    },[])

    const setComplete = (id, complete)=>{

        axios.put('http://localhost:8080/api/tasks'+ id,{
           complete: complete
        })
        .then((response)=>{
           if(response.status === 200)
           {
               loadTasksFromAPI()
           }
          })
        
    }

    const deleteItem = (id)=>{

        axios.delete('http://localhost:8080/api/tasks'+id)
        .then((response)=>{
            if(response.status === 200)
            {
                loadTasksFromAPI()
            }
           })
}


    return (

        <div>

        <form onSubmit={addItem}>
            <input name="title"></input>
            <input name="description"></input>
            <button type="submit" onClick={notify}> Add </button>
            <ToastContainer/>
        </form>

        {tasks.map((item) => {

            return <TaskToDo  item={item}
            setComplete = {setComplete}
            deleteItem = {deleteItem}>

            </TaskToDo>
            })}

        </div>
    )
}

export default Tasks;

