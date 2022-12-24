import {useEffect, useState} from 'react';
import axios from 'axios';

function Tasks(){

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

    return (
        <form onSubmit={addItem}>
            <input name="title"></input>
            <input name="description"></input>
            <button type="submit"> Add </button>
            
        </form>
    )
}

export default Tasks;

