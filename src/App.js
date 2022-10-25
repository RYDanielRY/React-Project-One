import './App.css';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navigation/navigation";

const App = () => {
   return(
       <div className="app-wrapper">
           <Header/>
           <Navigation/>
           <Main/>
           <div className="app-wrapper-content">

           </div>
       </div>
   )
}

export default App;
