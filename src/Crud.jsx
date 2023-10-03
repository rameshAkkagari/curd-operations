import classes from './Curd.module.css';

import React, { useState } from 'react'

function Crud() {
    const [employer,setEmployer] = useState({
        name:"",
        jobtype:"",
        salary:""
    });

    const [userList,setUserList] = useState([])

    const [edit,setEdit] = useState({
      id:"",
      isEditing:false
    });


    const handlerChangeName = (e) =>{
      setEmployer({
        ...employer,
        name:e.target.value
      });
    };

    const handlerChangeJob = (e) =>{
      setEmployer({
        ...employer,
        jobtype:e.target.value
      });
    };

    const handlerChangeSalary = (e) =>{
        setEmployer({
            ...employer,
            salary:e.target.value
        })
    }
    const SubmitHandler  = (e) =>{
      e.preventDefault()

        if(employer.name.length < 3){
            return alert("please enter your name")
        }

        const salary = !employer.jobtype
        if(salary){
            return alert("Please select a job type.");
        }

        if (employer.salary < 100000) {
            alert("Please enter a salary of at least 1L (100,000).");
            return;
          }

      let newUser = {
        id:new Date().getTime().toString(),
        name:employer.name.toUpperCase(),
        jobtype:employer.jobtype,
        salary:employer.salary
        };
       
      setUserList([...userList,newUser])
      
      setEmployer({
        name:"",
        salary:"",
        jobtype:""
      });    
    };

    const handlerDelete = (id) =>{
      const newUser = userList.filter((eachItem)=>{
          return eachItem.id !== id;
        })
      setUserList(newUser);
  };

  const handlerEdit = (id) =>{
    setEdit({
     ...edit,
     id:id,
     isEditing:true
    });
    let editablueUser = userList.find((eachitem)=> eachitem.id === id)
        console.log(editablueUser);
        setEmployer({
        id:editablueUser.id,
        name:editablueUser.name,
        jobtype:editablueUser.jobtype,
        salary:editablueUser.salary
        });
    };

 const editUserDetails = (e) =>{
        e.preventDefault()
        if(employer.name.length < 3){
            return alert("please enter your name")
        }

        const salary = !employer.jobtype
        if(salary){
            return alert("Please select a job type.");
        }

        if (employer.salary < 100000) {
            alert("Please enter a salary of at least 1L (100,000).");
            return;
          }
        const updateUser = userList.map((eachUser)=>{
            if(eachUser.id === edit.id){
                return {
                id:edit.id,
                name:employer.name,
                jobtype:employer.jobtype,
                salary:employer.salary
                }
            } else{
            return eachUser;
            }
        });
        setUserList(updateUser)
        setEmployer({
            id:"",
            name:"",
            jobtype:"",
            salary:""
        });

        setEdit({
            id:"",
            isEditing:false
        });
    };

  return (
    <div>
        <h1 className={classes.header}>CRUD OPARATIONS</h1>
        <form className={classes.formContainer}>
              <div className={classes.formInputs}>
              <div>
                <input type="text" 
                    name="name" 
                    id="name"  
                    placeholder='Name' 
                    value={employer.name} 
                    onChange={handlerChangeName}
                /> 
               </div>

                <div className={classes.jobtype}>
                    <select value={employer.jobtype} onChange={handlerChangeJob}>
                        <option value="" disabled selected>Select a job type</option>
                        <option value="Software Developer/Engineer">Software Developer/Engineer</option>
                        <option value="Data Analyst/Scientist">Data Analyst/Scientist</option>
                        <option value="Cloud Solutions Architect">Cloud Solutions Architect</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="IT Sales and Marketing">IT Sales and Marketing</option>
                        <option value="Database Administrator (DBA)">Database Administrator (DBA)</option>
                    </select>
                </div>
                
                <div>
                <input type="number"  
                name='number' 
                id='number' 
                placeholder='Expected Salary'
                value={employer.salary}
                onChange={handlerChangeSalary}
                />
                </div>
           { edit.isEditing ? (<button className={classes.submit} type='submit' onClick={editUserDetails}>EDIT</button>): (<button type='submit' className={classes.submit} onClick={SubmitHandler}>ADD</button>)}
              </div>
           
        </form>
        
        <main>
            <ul className={classes.userData}>
                {userList.map((eachUser)=>{
                    const {id,name,salary,jobtype} = eachUser
                    return (
                        <div className={classes.margin}>
                            <li key={id} className={classes.eachUserDetails}>
                            <h3>{name}</h3>
                            <p>{jobtype}</p>
                            <h4>$ {salary}</h4>
                            <div className={classes.actions}>
                                <button onClick={()=>handlerEdit(id)}>EDIT</button>
                                <button onClick={()=>handlerDelete(id)}>DELETE</button>
                            </div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </main>
    </div>
  )
}

export default Crud;