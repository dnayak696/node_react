import React from 'react';


export default function TaskView({ 
    task,
    setTask,
    date,
    setDate,
    user,
    setUser,
    important,
    setImportant,
    submitData,

   
    
    deleteTask, 

    updateFlag,

    users,
    tasks
}){

    return(
        <>


           <div  className="border border-dark" style={{ width: '100%', height: "100%", backgroundColor: "", padding:"20px", boderStyle:'solid', borderWidth:"2px", margin: "50px"}}>
           
           <h5 style={{padding: '10px', alignSelf: "center", justifySelf: "center"}}>TaskView</h5>
  {/* Form Started */}

            <form className="row gy-2 gx-3 align-items-center" onSubmit={(e) =>{
                e.preventDefault()
                submitData(e)}}>
  <div className="col-auto">
   
    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="form-control" width="600px" id="autoSizingInput" placeholder="Task Description"/>
    <label  >Task Description</label>
  </div>
  <div className="col-auto">

      <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="form-control" id="autoSizingInputGroup" placeholder="Date"/>
    <label >Expiry Date</label>
  </div>
  <div className="col-auto">
   
    <select className="form-select" id="autoSizingSelect" onChange={(e) => setUser(e.target.value)}>
       <option defaultValue> Choose One</option>
      {users ? users.map((data) => (<option key={data.id} value={data.id}>{data.name}</option> )): null }
    </select>

    <label >User</label>
  </div>
  <div className="col-auto" >
 

          <div class="input-group pl-6" onClick={() => setImportant(!important)}>
      <div class="">  {important ? <i className="fas fa-flag"></i> : <i className="far fa-flag"></i>  }</div>
      <input className="form-check-input visually-hidden" type="checkbox" id="autoSizingCheck"/>
    </div>
      <label className="form-check-label">
        important
      </label>
  
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-white border"  >Submit</button>
  </div>
</form>


<hr></hr>


<table className="table table-striped">
   <thead className='table-dark'>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Users</th>
      <td> Important</td>
      <td>Action</td>
    </tr>
  </thead>
  <tbody >

    {tasks.map((task, index ) =>(<tr key={index}>
     
     <td>{task.Task}</td>
     <td> {task.Expiry_date}</td>
     <td>{ users? users.filter(data => data.id === task.User)[0]?.name : null}</td>
     <td onClick={() =>  updateFlag(index)}> {task.Important ? <i className="fas fa-flag"> </i>: <i className="far fa-flag"></i> }</td>
     <td onClick={() => deleteTask(index)} >  <i className="fa fa-circle-minus"></i></td>
   </tr>))}
    
  
  </tbody>
</table>


          </div>
  
          
     
        </>
    )
}