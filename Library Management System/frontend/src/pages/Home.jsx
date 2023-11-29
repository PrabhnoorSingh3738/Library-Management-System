import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        ><h2 style={{fontSize:"70px"}}>BOOK STORE FOR YOU</h2>
        <Link to="/books" className="viewBook my-3">View Books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{ height: "91.5vh" }}
        ><img className="img-fluid homeImg"
         src={require('./pic.jpg')} alt="/"/>
        </div>
      </div>
    </div>
  );
}
