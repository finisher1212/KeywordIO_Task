import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

  const Navbar=()=>{
    return (
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">KeywordIO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item active">
      <NavLink className="nav-link" to="" exact activeClassName="active_class">Home|</NavLink>
      </li>
      
      <li className="nav-item">
      <NavLink className="nav-link" to="login"  activeClassName="active_class">Login|</NavLink>
      </li>
     
      <li className="nav-item">
      <NavLink className="nav-link" to="add"  activeClassName="active_class">Add Books|</NavLink>
      </li>
      
      <li className="nav-item">
      <NavLink className="nav-link" to="show"  activeClassName="active_class">Show Books|</NavLink>
      </li>

    </ul>
  </div>
</nav>

   

        </>
    )
}
export default Navbar;