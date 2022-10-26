import React from "react";
import './createPe.css';

const CreatePe = () => {
    return(
        <div>
            <div className="allCreatePeople">
                <div className="peoples">
                    <h1>
                        Create People
                    </h1>
                </div>
                <div className="peoples">
                    <h2>
                        First Name
                    </h2>
                    <br/>
                    <div>
                        <textarea placeholder="First Name"></textarea>
                    </div>
                </div>
                <div className="peoples">
                    <h2>
                        Middle Name
                    </h2>
                    <br/>
                    <div>
                        <textarea placeholder="Middle Name"></textarea>
                    </div>
                </div>
                <div className="peoples">
                    <h2>
                        First Name
                    </h2>
                    <br/>
                    <div>
                        <textarea placeholder="Last Name"></textarea>
                    </div>
                </div>
                <div className="peoples">
                    <div>
                        <button className="pl">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePe;