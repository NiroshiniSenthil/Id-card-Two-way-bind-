
import { BrowserRouter, Link,Route,Routes } from 'react-router-dom';
import Twowaybind from './Components/Twowaybind';
import'./App.css';

function App() {
  return( 
    <>
  <BrowserRouter>
  <nav>
     <Link to ={"/Twowaybind"}>Twowaybind</Link>
  </nav>
  
       <Routes>
        <Route path='/Twowaybind' element={<Twowaybind/>}/>
       </Routes>
  
  </BrowserRouter>
  </>
  )
 
}
export default App;
