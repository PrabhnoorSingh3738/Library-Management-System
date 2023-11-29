import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


function Display({data}) {
  const handleDelete =async(id)=>{
    await axios.delete(`http://localhost:3001/deletebook/${id}`)
    .then(res=>{console.log(res)
    window.location.reload()})
    .catch(err=>{console.log(err)})
  }
    // {console.log(data)}
  return (
    <div className='d-flex justify-content-center align-items-center text-black flex-wrap'>
    {data && data.map((item, index)=>(
    <div className="card col-md-3 mx-3 my-2" key={item._id}>
        <div><strong>Book Name:</strong>{item.name}</div>
        <div><strong>Author Name:</strong>{item.authorName} </div>
        {/* <div><strong>ID:</strong>{item._id} </div> */}
        <div className='d-flex justify-content-around align-item-center'>
        <Link to={`/updatebook/${item._id}`} className='btn btn-dark'>Update</Link>
        <button className='btn btn-danger' onClick={(e)=>handleDelete(item._id)}>Delete</button>
        </div>
        <a href={item.buy} style={{margin:"10px 20px 10px 20px"}} className='btn btn-success' target='_blank' rel="noreferrer">Buy</a>
    </div>
    ))}
    
    </div>
  )
}

export default Display