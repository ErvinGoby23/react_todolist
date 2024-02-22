import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Accueil from './pages/Accueil';
import Tables from './pages/Tables';
import Update from './pages/Update';
import Supp from './pages/Supp';
import Create from './page_bulletin/Create';
import Read from './page_bulletin/Read';
import Modifi from './page_bulletin/Modifi';
import Delt from './page_bulletin/Delt';
import Creer from './page_absence/Creer';
import Tableau from './page_absence/Tableau';
import Sup from './page_absence/Sup';
import Upt from './page_absence/Upt';



 export default function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route index element ={<Accueil/> }/>
       <Route path='/accueil' element={<Accueil/>}/>
       <Route path='/tables' element={<Tables/>}/>
       <Route path='/update' element={<Update/>}/>
       <Route path='/supp' element={<Supp/>}/>
       <Route path='/create' element={<Create/>}/>
       <Route path='/read' element={<Read/>}/>
       <Route path='/modifi' element={<Modifi/>}/>
       <Route path='/Delt' element={<Delt/>}/>
       <Route path='/Creer' element={<Creer/>}/>
       <Route path='/Tableau' element={<Tableau/>}/>
       <Route path='/sup' element={<Sup/>}/>
       <Route path='/Upt' element={<Upt/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}
