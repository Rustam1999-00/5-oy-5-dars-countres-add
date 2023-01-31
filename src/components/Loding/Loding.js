

import Loder from '../../assets/Images/Spinner-1s-200px.svg'

 const Loding = ()=>{
return(

    <img className='z-index=-1' style={{position:'absolute', left:'200', right:'100' ,bottom:'0'}} src={Loder} alt='loding'/>
)
}
export default Loding