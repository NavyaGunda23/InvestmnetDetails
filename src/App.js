
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import DetailsPage from "./DetailsPage";
import NFTPage from "./NFTPage"
function App() {
 
  return (

      <Router>  
           <div >  
           <Routes>  
           <Route  element={< DetailsPage />}></Route>  
                 <Route exact path='/' element={< DetailsPage />}></Route>  
                 <Route exact path='/nft' element={< NFTPage />}></Route>
          </Routes>  
          </div>  
       </Router> 
 
  
 
  );
}

export default App;
