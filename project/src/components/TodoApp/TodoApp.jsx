import React, { useState } from 'react';


function TodoApp() {
  const [task,settask] = useState('');
  const [alltodos,setalltodos]=useState([]);


  const submithandler=(e)=>{
    e.preventDefault();
    const updatedtodos=[...alltodos,task];
    setalltodos(updatedtodos);
    settask('');

    
  }

  return (
    <div>
       <center>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>ToDo Management Applications</h5>
                <form onSubmit={submithandler}>
                    <input type='text' size='30' value={task} onChange={(e)=>settask(e.target.value)}></input>  &nbsp;&nbsp;
                    <input type='submit' value="Add" ></input>
                </form>

             {alltodos.map((item,index)=>
             <div key={index}> 
             <div>
              <h4>{item} &nbsp; <button>Delete</button></h4> 
             </div>
             </div>)}

            </div>
        </div>  
        <body></body>

       </center>
    </div>
  )
}


export default TodoApp;