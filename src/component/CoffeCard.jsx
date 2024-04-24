import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeCard = ({coffe,removeCoffe,setRemoveCoffe}) => {
    const{_id,coffeName,quantity,photo,taste}=coffe;
const handleDelete=(_id)=>{
    console.log(_id)
    Swal.fire({
        title: "ARE YOU SURE",
        text: "You clicked the button!",
        icon: "error"
      });


      fetch(`http://localhost:5000/coffe/${_id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{

console.log(data)
        if(data.deletedCount >0){
      
                Swal.fire({
                  title: "Deleted!",
                  text: "Your COffe has been deleted.",
                  icon: "success"
                });
            
          const remainig=removeCoffe.filter(cof=> cof._id !== _id)
          setRemoveCoffe(remainig)
          }
      })
}




  return (
    <div>
      <h1>{coffeName}</h1>
      <p>{quantity}</p>
      <img src={photo}></img>
     <div >
     <button className='btn btn-primary'>view</button> <br />
 <Link to={`updateCoffe/${_id}`}>    <button className='btn '>Edit</button> <br /></Link>
     <button className='btn btn-warning' onClick={()=>handleDelete(_id)}>X</button><br />
     </div>
    </div>
  )
}

export default CoffeCard
