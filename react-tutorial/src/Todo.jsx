import React, { useState } from'react'
import './App.css'


export const Todo =()=>{
  const [todoText,setTodoText]=useState('')
  const[incompleteTodos,setIncompleteTodos] = useState([]);
  const[subcompleteTodos,setSubcompleteTodos] = useState([]);
  const[completeTodos,setCompleteTodos] = useState([]);

  const onChangeTodotext =(event)=> setTodoText(event.target.value);

  const onClickAdd =()=>{
    if(todoText==="")return;
    const newTodos=[...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newTodos =[...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos)

  }

  const onClickDelete2 = (index) => {
    const newTodos =[...subcompleteTodos];
    newTodos.splice(index,1);
    setSubcompleteTodos(newTodos)

  }

  const onClickDelete3 = (index) => {
    const newTodos =[...completeTodos];
    newTodos.splice(index,1);
    setCompleteTodos(newTodos)

  }

  const onClickIn_Complete =(index)=>{
    const newIncompleteTodos =[...incompleteTodos];
    newIncompleteTodos.splice(index,1);

    const newCompleteTodos=[...completeTodos,incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos)
  }

  const onclickSub_Complete=(index)=>{
    const newSubcompleteTodos =[...subcompleteTodos];
    newSubcompleteTodos.splice(index,1);

    const newCompleteTodos=[...completeTodos,subcompleteTodos[index]]
    setSubcompleteTodos(newSubcompleteTodos);
    setCompleteTodos(newCompleteTodos)
  }

  const onclickComplete_Sub=(index)=>{
    const newCompleteTodos =[...completeTodos];
    newCompleteTodos.splice(index,1);

    const newSubcompleteTodos=[...subcompleteTodos,completeTodos[index]]
    setCompleteTodos(newCompleteTodos);
    setSubcompleteTodos(newSubcompleteTodos)
  }



  const onClickIn_Sub =(index)=>{
    const newIncompleteTodos =[...incompleteTodos];
    newIncompleteTodos.splice(index,1);

    const newSubcompleteTodos=[...subcompleteTodos,incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos);
    setSubcompleteTodos(newSubcompleteTodos)
  }


  const onClickSub_Incomplete =(index)=>{
    const newSubCompleteTodos=[...subcompleteTodos]
    newSubCompleteTodos.splice(index,1);

    const newIncompleteTodos =[...incompleteTodos,subcompleteTodos[index]]
    setSubcompleteTodos(newSubCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);

  }

  
  const onClickComplete_Inconplete =(index)=>{
    const newCompleteTodos=[...completeTodos]
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos =[...incompleteTodos,completeTodos[index]]
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);

  }

  return(
    <>
    <div className='input-area'>
      <input placeholder='Todoを入力' value={todoText} onChange={onChangeTodotext}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
        <div className='incomplete-area'>
          <p className='title'>未着手Todoリスト</p>
          <ul>
            {incompleteTodos.map((todo,index)=> (     
            <li key={todo}> 
              <div className='list-row'>
            <p className='todo-item'>{todo}</p>
            <button onClick={()=>onClickIn_Sub(index)}>進行中へ</button>
            <button onClick={()=>onClickIn_Complete(index)}>完了へ</button>
            <button onClick={()=>onClickDelete(index)}>削除</button>
            </div>
            </li>
            ))}

          </ul>

      
        </div>

        <div className='incomplete-area'>
            <p className='title'>進行中Todoリスト</p>
          <ul>
          {subcompleteTodos.map((todo,index)=> (     
            <li key={todo}> 
              <div className='list-row'>
            <p className='todo-item'>{todo}</p>
            <button onClick={()=>onClickSub_Incomplete(index)}>未着手へ</button>
            <button onClick={()=>onclickSub_Complete(index)}>完了へ</button>
            <button onClick={()=>onClickDelete2(index)}>削除</button>
            </div>
            </li>
            ))}

          </ul>
      
            </div>

            <div className='incomplete-area'>
            <p className='title'>完了Todoリスト</p>
          <ul>
          {completeTodos.map((todo,index)=> (     
            <li key={todo}> 
              <div className='list-row'>
            <p className='todo-item'>{todo}</p>
            <button onClick={()=>onClickComplete_Inconplete(index)}>未着手へ</button>
            <button onClick={()=>onclickComplete_Sub(index)}>進行中へ</button>
            <button onClick={()=>onClickDelete3(index)}>削除</button>
            </div>
            </li>
            ))}

          </ul>

            </div>


            </>
  )
}