import './App.css';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Navigation from "./components/Navigation/navigation";
import {Route, Routes} from "react-router-dom";
import CreateDoc from "./components/Main/CreateDoc";
import CreatePe from "./components/Main/CreatePe";
import AllInformation from "./components/Main/AllInformation";

const App = (props) => {
   return(
       <div className="app-wrapper">
           <Header/>
           <Navigation/>
           <div className="app-wrapper-content">
               <Routes>
                   <Route path="/home*" element={<Main state={props.state}/>}/>
                   <Route path="/otchetOne*" element={<CreateDoc/>}/>
                   <Route path="/createPeople*" element={<CreatePe/>}/>
                   <Route path="/allwatch*" element={<AllInformation/>}/>
               </Routes>
           </div>
       </div>
   )
}

export default App;
