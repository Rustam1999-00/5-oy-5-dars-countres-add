
import Moon from'../../assets/Images/moon-sun-svgrepo-com.svg'
import vector from '../../assets/Images/left-arrow.gif'
import Loder from "../Loding/Loding";

import {useEffect,useState } from "react"

import { useParams,useNavigate} from 'react-router-dom';


 const Single =()=>{

    const {name} = useParams();
    console.log(name);


    let navigate = useNavigate();
let [user,setUser] = useState({
    loading:true,
    data:[],
})

    const getUsersn = ()=>{
      fetch('https://restcountries.com/v3.1/name/' + name)
        .then((res)=> res.json()) 
           .then((data)=>{
            if(data){
                setUser({
                    loading:false,
                    data:data,
                })
            }
           })
        .catch((err)=>console.log(err))
    }

useEffect (()=>{
    getUsersn();
},[])


    return(
        <>
     

        <div className="ps-3 pe-3 pt-0">
          <div className="d-flex align-item-center justify-content-between p-5  shadow rounded-3 ">
            <h2>Wether in the worlid</h2>
            <button  className="btn  shadow fs-5 bold "><img src={Moon} alt='dark' width='50' height='50'/> DARK</button>
          </div>
        </div>
<div>


    <button    className="back__btn d-flex align-items-center m-5 p-2 h4  shadow rounded"
        onClick={() => navigate(-1)}><img src={vector} alt='vector' width='50' height='50'/> Bask</button>
    <ul>
       {
           user.data.map((item)=>(
               
               <li className='mt-5 p-5'>
               

            <div className="d-flex align-items-center justify-content-between pb-5">
          <div className="div">
            <img
              width="560px"
              height="401px"
              className="rounded-3"
              src={item.flags.svg}
              alt=""
            />
          </div>
          <div className="country__info__right">
            <div className="country__wrap ">
              <h3 className="country__name">{item.name?.common}</h3>
              <div className="row">
                <div className="col-md-6">
                  <p className="country__info">
                    <span className="fw-bold">Native Name: </span>
                    {item.name.official}
                  </p>
                  <p className="country__info">
                    <span className="fw-bold">Population: </span>
                    {item.population}
                  </p>
                  <p className="country__info">
                    <span className="fw-bold">Region: </span> {item.region}
                  </p>
                  <p className="country__info">
                    <span className="fw-bold">Sub Region: </span>{" "}
                    {item.subregion}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="country__info">
                    <span className="fw-bold">Top Level Domain: </span>{" "}
                    {item.tld}
                  </p>
                  <p className="country__info">
                    <span className="fw-bold">Capital: </span> {item.capital}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
            
        </li>
         
        ))
    }
    </ul>
</div>


        </>
    )
}
export default Single