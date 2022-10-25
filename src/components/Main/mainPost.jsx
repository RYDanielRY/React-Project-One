import React from "react";
import './mainPost.css';

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
       </div>
   )
}

export default MainPost;