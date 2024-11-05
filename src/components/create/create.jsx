import { useState } from "react"
import './create.css'

export default function Add(){

    let [task,setTask]=useState('')
    let [list,setList]=useState([])
    let [ind,setInd]=useState(-1)
    let [edit,setEdit]=useState('')


    function create(){
        if(task!==''){
            setList([...list,task])
            setTask('')
        }
    }

    function saved(){
        let edittask=[...list]
        edittask[ind]=edit
        setList(edittask)
        setInd(-1)
    }

    function canceled(){
        setInd(-1)
    } 

    function edited(index){
        setInd(index)
        setEdit(list[index])
    }

    function deleted(index){
        let arr=[...list]
        arr.splice(index,1)
        setList(arr)

    }
    return(
        <div className="head">
           <div className="na"> <h1>ToDo LisT</h1></div>

            <div className="add">
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onClick={create} id="bt1">Add</button>
            </div>

            <div className="data">
                <div className="base">
                    {
                        list.map((item,index)=>(
                            <div className="border"
                         key={index}>{
                            ind===index?(
                                <div className="value1">
                            <input type="text" value={edit} onChange={(e)=>setEdit(e.target.value)}/>
                            <button onClick={saved} id="bt2">update</button>
                            <button onClick={canceled} id="bt3">cancel
                            </button>
                            </div>
                            ) : (
                                <div className="value1">
                                    {item}
                                    <button onClick={()=>edited(index)} id="bt2">edit</button>
                                    <button onClick={()=>deleted(index)} id="bt3">delete</button>
                                </div>
                            )
                        }</div>)
                    )}
               </div> 
            </div>


        </div>
    )
}