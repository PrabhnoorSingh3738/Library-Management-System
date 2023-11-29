import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Display from "../components/Display";



export default function Books() {
  const [Data, setData] = useState()
  useEffect(() => {
    const fetch = async () => {
      await axios
      .get("http://localhost:3001/getbooks")
      .then((res) => {setData(res.data.books);});
      
    };
    fetch();
  });

  return (
    <div className="bg-dark">
      <div className="d-flex justify-content-center align-items-center" style={{height:"auto"}}>
        <h4 className="text-white py-4">Books Section</h4>
      </div>
      {Data ? <Display data = {Data}/>:<div className="text-white">Loading......</div>}
    </div>
  );
}
