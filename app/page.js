
"use client"
import React,{useState} from 'react'

const page = () => {
const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])
const submithandler = (e)=>{
e.preventDefault()

setmainTask([...mainTask,{title,desc}])
console.log(title);
console.log(desc);
settitle("")
setdesc("")
console.log(mainTask);

}
const deletehandler = (i)=>{
let copytask = [...mainTask]
copytask.splice(i,1)
setmainTask(copytask)




}

let renderTask =  <h2> No Task available</h2>
if(mainTask.length>0){

  renderTask = mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between'><div className='flex item-center justify-between mb-5 w-2/3 mb-8'>
    
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6  className='text-lg font-semibold'> {t.desc}</h6>
    
    </div>
    <button className='bg-red-400 text-white rounded px-4 py-3 font-bold' onClick={()=>{deletehandler(i)}}>delete</button></li>
    
    
    
    })
}

  return (
    <><h1 className='bg-black text-white  p-5 text-5xl font-bold text-center'>Mohit's  Todo list</h1><form onSubmit={submithandler}>

<input type='text' className='text-2xl border-2 border-zinc-800 m-5 px-4 py-2 'placeholder= 'Enter task here' value={title}
onChange={(e)=>{
  settitle(e.target.value)
}}

/>
<input type='text' className='text-2xl border-2 border-zinc-800 m-5 px-4 py-2' placeholder= 'Enter desc here' value={desc} onChange={(e)=>{


  setdesc(e.target.value)
}}/>
    
    <button className='bg-black text-white px-4 py-3 text--2xl font-bold rounded'>Add task</button>
    
    
    </form>
    
    <hr/>
    <div className=' p-8 bg-slate-200'>

<ul>
  {renderTask}
</ul>


    </div>
    
    
    
    
    </>
  
  
  
  
  
    )
}

export default page
