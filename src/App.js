// import React, { useState } from 'react'

// function App() {
//     // const tempary = [
//     //     {
//     //      text:"jjkljfsk",
//     //      id:"s1"
//     //     },
//     //     {
//     //         text:"ramesj",
//     //         id:"ss"
//     //     }
//     // ]
//     const [list,setList] = useState([])
//     const [message,setMessage] = useState({
//         text:"",
//         id:""
//     })

//     const [edit,setEdit] =useState({
//         id:"",
//         isEditing:false
//     }
// ) 
//     const changeMessage = (e) =>{
//         setMessage({
//             ...message,
//             text:e.target.value
//         })
//     }
//     const handlerSubmit =  (e) =>{
//         e.preventDefault()
//         let error = message.text.length === 0 || message.text.length < 3
//         if(error){
//             return ;
//         }
//         let newTODO = {
//             text:message.text,
//             id:new Date().getTime().toString()
//         }
//         setList([...list,newTODO])
//         setMessage({
//             text:"",
//             id:""
//         })
//     }

//     const handlerDelete = (id) =>{
//         const newTodos = list.filter((eachItem)=>{
//             return eachItem.id !== id;
//         })
//         setList(newTodos)
//     //  console.log(id);
//     }

//     const changeEditState = (id) =>{
//         console.log(id);
//       setEdit({
//         ...edit,
//         id:id,
//         isEditing:true
//       })
//       let editablueItems = list.find((eachitem)=> eachitem.id === id)
//     console.log(editablueItems);
//     setMessage({
//        ...message,
//        text:editablueItems.text,
//        id:editablueItems.id
//    })
//     }

//     const handlerEdit = (e) =>{
//         e.preventDefault()
//         let newTodoText = list.map((eachItem)=>{
//             if(eachItem.id === edit.id){
//             return {
//                 text:message.text,
//                 id:edit.id
//             }
//             } else{
//                 return eachItem;
//             };
//         });
//         setList(newTodoText);
//         setMessage({
//             text:"",
//             id:""
//         })

//         setEdit({
//             id:"",
//             isEditing:false
//         })
//     }
//   return (
//     <div>
//         <form>
//             <input type='text'
//             name="message" 
//             placeholder='hello' 
//             value={message.text} 
//             onChange={changeMessage}
//             />
//             {
//                 edit.isEditing ? <button onClick={handlerEdit} type='submit'>EDIT</button> : <button onClick={handlerSubmit} type='submit'>ADD</button>
//             }
            
//         </form>
//         <hr/>
//         {
//             list.length === 0 && <h2>There is no items list</h2>
//         }
//         <ul>
//            {list.map((eachItem)=>{
//             const {text,id} = eachItem
//              return (
//                 <li key={id}>
//                     <span>{text}</span>
                    
//                     <button onClick={()=>changeEditState(id)}>EDIT</button>
//                     <button onClick={()=>handlerDelete(id)}>DELETE</button>
//                 </li>
//             )
//             })}
//         </ul>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Crud from './Crud'

function App() {
  return (
    <div>
        <Crud/>
    </div>
  )
}

export default App