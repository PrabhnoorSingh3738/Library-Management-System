import axios from "axios";
import React,{useState} from "react";

export default function AddBooks() {
  const [Data, setData] = useState({name:"", authorName:"", code:"", publisherName:"", price:"", buy:""})
  const change = (e)=>{
    const {name, value} = e.target;
    setData({...Data,[name]: value})  
  }

  const submit = async ()=>{
    // e.preventDefault();
    await axios.post('http://localhost:3001/addbook', Data).then((res)=>{console.log(res)})
  }
  console.log(Data)
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
        <button className="btn btn-success" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
