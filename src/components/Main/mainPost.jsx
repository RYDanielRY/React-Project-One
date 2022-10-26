import React from "react";
import './mainPost.css';
import {NavLink} from "react-router-dom";

const MainPost = (props) => {

    return (
       <div className="mainPost">
           <div className="one">
              <h2>
                  Фамилия
              </h2>
              <p>
                   {props.lastName}
              </p>
           </div>
           <div className="one">
               <h2>
                   Имя
               </h2>
               <p>
                   {props.firstName}
               </p>
           </div>
           <div className="one">
               <h2>
                   Отчество
               </h2>
               <p>
                   {props.middleName}
               </p>
           </div>
           <div className="one">
               <h2>
                   Вид спорта
               </h2>
               <p>
                   {props.kindOfSports}
               </p>
           </div>
           <div className="one">
               <h2>
                   Курс
               </h2>
               <p>
                   {props.numberCourse}
               </p>
           </div>
           <div className="one">
               <nav>
                   <div>
                       <NavLink to="/allwatch">Отобразить всю информацию</NavLink>
                   </div>
               </nav>
           </div>
       </div>
   )
}

export default MainPost;