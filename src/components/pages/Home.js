// import Header from "./components/Header/Headre";

import { useEffect, useState, useRef } from "react";
import { Card } from "../Card";
import Moon from'../../assets/Images/moon-sun-svgrepo-com.svg'
// import User from './User'

// import {Routes,Route} from "react-router-dom"

function Home () {


const[dark,setDark]=useState("")

const hendleDark = ()=>{
  if(dark === "light"){
    setDark('dark')
  }else{setDark('light')}
}

useEffect(()=>{
  document.body.className = 'dark';
},[dark])



  let InputVal = useRef();
  let SelektVal = useRef();
  const [Countres, setCountres] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => 
       {
        if (data) {
          setCountres({
            isLoading:false,
            data: data,
            isError: "",
          }
          );
        }
      }).catch((err=> console.log(err)))
  },[]);

  const hendleSubmit =
    (e) => {
      e.preventDefault();
      fetch("https://restcountries.com/v3.1/name/" + InputVal.current.value)


        .then((res) => res.json())
        .then((data) => {
          if(data){
            setCountres({
              isLoading:false,
              data:data,
              isError:'',
  
            })
          }
        
        })
        .catch((error) => console.log(error));
    };

    const hendleSelekt = ()=>{
      fetch("https://restcountries.com/v3.1/region/"+SelektVal.current.value)
      .then((res)=> res.json())
      .then((data=>{
        if(data){
          setCountres({
            isLoading:false,
            data:data,
            isError:""
          })
        }
      }))
    }

  return (
   


<div className="coutres ">

        
    
        <a className="bg-danger text-light pt-2 pb-2 ps-3 pe-3 rounded-circle position-fixed bottom-0 end-0" href="#" >^</a>
        <div className="ps-3 pe-3 pt-0">
          <div className="d-flex align-item-center justify-content-between p-5  shadow rounded ">
            <h1>COUTRES</h1>
            <button onClick={hendleDark}  className="btn  shadow fs-5 bold "><img src={Moon} alt='dark' width='50' height='50'/> DARK</button>
          </div>
          <form
            onSubmit={hendleSubmit}
            className="re-form align-item-center justify-content-between d-flex mt-5"
          >
            <input
              ref={InputVal}
              type="search"
              className="re-input rounded"
             
              placeholder="seorch"
            />
            <select onChange={hendleSelekt} ref={SelektVal} className="rounded pe-5">
              <option >
             Regions
              </option>
              <option>Africa</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>America</option>
            </select>
          </form>
  
          {Countres.isLoading ? <h1>Loading....</h1> : ""}
        {Countres.isError ? <h1>{Countres.isError}</h1> : ""}
        {Countres.data.length ? (
          <div className="container">
        
          <ul className=" row gy-3 mt-4 justify-content-center list-unstyled">
            {Countres.data.map((item) => (
             <Card  obj={item}/>         
            ))}
          </ul>
         
         
          </div>
        ) : (
          ""
        )}
  
  
  
  
      
        </div>
      </div>
  ); 
}

export default Home;
