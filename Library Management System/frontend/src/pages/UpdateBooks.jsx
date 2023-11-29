import axios from "axios";
import React,{ useState} from "react";
import { Link, useParams} from "react-router-dom";

export default function UpdateBooks() {
  const [Data, setData] = useState({name:"", authorName:"", code:"", publisherName:"", price:"", buy:""})
  const change = (e)=>{
    const {name, value} = e.target;
    setData({...Data,[name]: value})  
  }
  const {id} = useParams();
  console.log(id)
  const submit = async ()=>{
    // e.preventDefault();
    await axios.put(`http://localhost:3001/updatebook/${id}`).then((res)=>{console.log(res)
    window.location.reload()})
  }

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center">
      <div className="container p-4">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Book Name"
            name="name"
            value={Data.name}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Author Name"
            name="authorName"
            value={Data.authorName}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Book Code
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Book Code"
            name="code"
            value={Data.code}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Publisher Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Publisher Name"
            name="publisherName"
            value={Data.publisherName}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Price of Book"
            name="price"
            value={Data.price}
            onChange={change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Buying Link
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Buying Link of Book"
            name="buy"
            value={Data.buy}
            onChange={change}
          />
        </div>
        <Link to={`/updatebooks`} className="btn btn-success" onClick={submit}>Update Book</Link>
      </div>
    </div>
  );
}
