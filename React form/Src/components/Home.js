import React from "react";
import{useLocation} from "react-router-dom";

function Home(){
    const location=useLocation()
    return(
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the home</h1>
            <form action="POST">
            <input type = "text">Name</input>
            <input type = "text">AGE</input>
            <input type = "date">DOB</input>
            <input type="submit" onClick={submit}/>
        </form>
        </div>




    )
}

export default Home