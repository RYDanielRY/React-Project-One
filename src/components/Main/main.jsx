import React from "react";
import './main.css';
import MainPost from "./mainPost";

const Main = () => {

    let students = [
        {id: 1, firstName: "Ann", middleName: "Jannet", lastName: "Smith"},
        {id: 2, firstName: "Mary", middleName: "Rose", lastName: "Sue"},
        {id: 3, firstName: "Katy", middleName: "Linn", lastName: "Whitson"},
    ];

    const studentsSort = students.map(function (x) {
        return <MainPost id={x.id} firstName={x.firstName} middleName={x.middleName} lastName={x.lastName}/>
    });

    return (
        <div className="mainAll">
            {studentsSort}
        </div>
    )
}
export default Main;