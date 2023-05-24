import React, { useState , useEffect} from 'react';
import TaskView from '../View/taskView';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TaskController(){

    const newDate = new Date().toISOString().split('T')[0]

    const [task, setTask] = useState();
    const [date, setDate] = useState();
    const [user, setUser] = useState();
    const [important, setImportant] = useState(false);

    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);


    useEffect(() => {

        getUsers();
        getTasks();
        
        return() => {
         setUsers([]);
         setTasks([]);
        } 
    },[])


    // const newDate = () =>{
    //   return `${new Date().getFullYear()}-${new Date().getUTCMonth()}-${new Date().getDate()}`;
    // }


    const submitData = (e) =>{
         e.preventDefault();

       
            console.log("hiir")
            if(task && date && user){
                createTask();
            }else {
                alert("Please fill all fields")
            }
          
         
         
         console.log("hi", task, date, user, important,  newDate )
         
    }
     
    const getUsers = async  () => {

        try{
         const response =    await  axios.get('http://localhost:8000/api/users');
         setUsers(response.data.Users);
         console.log(response.data.Users);

        }catch(err){
            console.log(err)
        }
    }

    const getTasks =async  () => {
        try{ 

            const response =   await    axios.get('http://localhost:8000/api/tasks');
            setTasks(response.data.Tasks);
            notifyToast(response.data.Tasks);

        }catch(err){
           console.log(err)
       }
   }


   const createTask = () =>{


    console.log (user);
     const newTask = {
        "Task": task,
        "Expiry_date": date,
        "User": Number(user),
        "Important": important,
        "Created_on": new Date(),
        }
    axios.post('http://localhost:8000/api/tasks', newTask).then((response) => {
        setTasks(response.data.Tasks)
     }).catch((err)=>{
         console.log(err)
     })
   }


   const deleteTask = (index) => {
    axios.delete(`http://localhost:8000/api/tasks/${index}`).then((response)=>{
         setTasks(response.data.Tasks);
    }).catch((error) =>{
        console.error(error);
    })
   }


   const updateFlag = (index) => {
    axios.put(`http://localhost:8000/api/tasks/${index}`).then((response)=>{
        setTasks(response.data.Tasks);
   }).catch((error) =>{
       console.error(error);
   })
   }



   const notifyToast = (list) =>{
     const notifyList =  list.filter(task => task.Important === true)
        console.log(notifyList)
    notifyList.forEach(task =>{
        toast(task.Task);
    })
   }





    return(
        <>
        <TaskView
        task={task}
        setTask = {setTask}
        date={date}
        setDate={setDate}
        user={user}
        setUser={setUser}
        important={important}
        setImportant={setImportant}
        submitData ={submitData}
        deleteTask = {deleteTask}

        updateFlag={updateFlag}


        users = {users}
        tasks = {tasks}

  
        />

    <ToastContainer/>
        
        </>
    )
}