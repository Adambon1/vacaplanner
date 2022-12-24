import {useEffect, useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Destination(){

    const notify = () => toast("Destination Added/Removed");

    const [destination, setDestination] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")
    const loadDestinationFromAPI = ()=>{
        
       axios.get('http://localhost:8080/api/destinations')
       .then((response)=>{
        if(response.status==200){
        setDestination(response.data);
        }
      })
        
    }

        const addItem = (item)=>{
            item.preventDefault();
            const title = item.target.elements.title.value;
            
            
            axios.post('http://localhost:8080/api/destinations', {
                'title' : title,
                
            })
           .then((response)=>{
            if(response.status === 200)
            {
                setErrorMessage("");
                loadDestinationFromAPI()
                item.target.elements.title.value="";
                
                
            }
           })
    
            .catch((error)=>{
               
                setErrorMessage("Must input a title that has 3 or more characters")
                
            })
      
        }

        useEffect(()=>{
            loadDestinationFromAPI();
    
        },[])

        const setComplete = (id, complete)=>{

            axios.put('http://localhost:8080/api/destinations'+ id,{
               complete: complete
            })
            .then((response)=>{
               if(response.status === 200)
               {
                   loadDestinationFromAPI()
               }
              })
            
   }



    return(
        <div>
            <form onSubmit={addItem}>
                <input name="title"></input>
                <button type="submit" onClick={notify}> Add </button>
                <ToastContainer/>
            </form>
        </div>
    )
}
export default Destination;