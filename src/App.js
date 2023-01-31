
import {Routes,Route}from 'react-router-dom'
import User from './components/pages/User' 
import Home from './components/pages/Home' 
import News from './components/pages/news' 
import About from './components/pages/about' 
import Singile from './components/pages/Singile' 
import {Card} from './components/Card' 



function App() {

return(
  <>
  {/* <Home/> */}
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/User' element={<User/>}/>
  <Route path='/News' element={<News/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Card' element={<Card/>}/>
  <Route path='//:name' element={<Singile/>}/>
</Routes>


  </>
)


}

export default App;