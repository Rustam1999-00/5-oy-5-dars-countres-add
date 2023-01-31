import  User from './pages/User'
import Single from './pages/Singile'
import {Link} from 'react-router-dom'
// import {Routes,Route} from 'react-router-dom'


export const  Card  = ({obj})=>{
    return(

         <>
        

          <li className=" col-md-3 ">


        <Link className="card" to={`${obj.name.common} `}>
          <img
            className="card-img-top  "
            src={obj.flags.png}
            width="100%"
            height="150"
            alt={obj.name.common}
          />
          <div className="card-body">
            <h2> {obj.name.common}</h2>
            <strong className="d-block">
              Population:{obj.population}
            </strong>
            <strong className="d-block">Region:{obj.region}</strong>
            <strong className="d-block">Capital:{obj.capital}</strong>
          </div>
        </Link>
      
      </li>
      
        
         </>

       
    )
}