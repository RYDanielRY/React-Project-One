import React from "react";
import './main.css';
import MainPost from "./mainPost";

const Main = (props) => {

    const studentsSort = props.state.posts.map(function (x) {
        return <MainPost id={x.id} firstName={x.firstName}
                                   middleName={x.middleName}
                                   lastName={x.lastName}
                                   kindOfSports={x.kindOfSports}
                                   numberCourse={x.numberCourse}
        />
    });

    return (
        <div className="mainAll">
            {studentsSort}
        </div>
    )
}
export default Main;