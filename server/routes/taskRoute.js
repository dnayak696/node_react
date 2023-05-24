const express = require('express');

const router = express.Router();


const tasks = [
    {
    "Task": "Sample task -1",
    "Expiry_date": "10/21/2022",
    "User": 1,
    "Important": true,
    "Created_on": "01/10/2022"
    },
    {
    "Task": "Sample task -2",
    "Expiry_date": "03/03/2022",
    "User": 2,
    "Important": false,
    "Created_on": "01/10/2022"
    },
    {
    "Task": "Sample task -3",
    "Expiry_date": "05/30/2022",
    "User": 3,
    "Important": true,
    "Created_on": "01/10/2022"
    }
    ];


router.get('/tasks',(req, res) =>{
      
    res.json({Tasks: tasks})
})

// create a new task

router.post('/tasks',(req, res) =>{
     
    const task = {
        "Task": req.body.Task,
        "Expiry_date": req.body.Expiry_date,
        "User": req.body.User,
        "Important": req.body.Important,
        "Created_on": req.body.Created_on,
        }
        tasks.push(task);
     res.json({Tasks: tasks})
})


router.delete('/tasks/:id', function(req, res){
    let {id} = req.params;
    
    if (id > -1) {
      tasks.splice(id, 1);

       res.json({Tasks: tasks})
    }
   
})


router.put('/tasks/:id', function(req, res){
    let {id} = req.params;

    // tasks.map((obj,index)  =>
    //     index === id ? { ...obj, Important: ! obj.Important } : obj
    // );

    tasks[id].Important =  !tasks[id].Important;
     console.log(tasks[id].Important);
    res.json({Tasks: tasks});
})


module.exports = router;