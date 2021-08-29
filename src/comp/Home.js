import React,{useEffect,useState} from 'react';
import axios from 'axios';

export const Home = () => {
    const [state,setState] = useState([])
    const [dataa,setDataa] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(resolve=>setState(resolve.data))
    },[])
    

   function handleChange(event){
        setDataa(event.target.value)
   }
  
   const btnClick =()=>{
       axios.post('https://jsonplaceholder.typicode.com/users',{name:dataa}).then(resolve=>console.log(resolve.data));
       
   }
   
   
    return (
        <div>
            <div style={{margin:'auto',width:"70%",marginBottom:"30px"}}>
                <input onChange={(event)=>handleChange(event)} type="text" className="inputStyle"></input>
                <button onClick={()=>btnClick()}>Post</button>
            </div>
            <div className="conatiner-box">
        
           {state.map((value,index,array)=>{return <div className="name-border">{value.name}</div>})}

           </div>
           
        </div>
    )
}
