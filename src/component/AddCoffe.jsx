import React from 'react'
import Swal from 'sweetalert2'

const AddCoffe = () => {

const handleSubmit=(e)=>{

    e.preventDefault()

    const form=e.target;
const coffeName=form.coffeName.value;
const quantity=form.quantity.value;
const supplier=form.supplier.value;
const category=form.category.value;
const photo=form.photo.value;
const taste=form.taste.value;
const detail=form.detail.value;
const userCoffe={coffeName,quantity,supplier,category,photo,taste,detail}

/*2222222222222222 POST METOD MONGO DBs */

fetch('http://localhost:5000/addCoffe',{
method:"POST",
headers:{'content-type': 'application/json'},
body:JSON.stringify(userCoffe)
})



.then(res=> res.json())
.then(data=>{
    if(data.insertedId){
        Swal.fire({
            title: 'Succesfull !',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }

})



}

  return (
    <div className='bg-blue-400 text-yellow-400  '>


<form action="" onSubmit={handleSubmit}>    
<div className=''>

<label htmlFor="" >Coffe Name</label>

<input name='coffeName' type="text" placeholder="coffe name" className="my-8 bg-white input input-bordered w-full max-w-xs" />
<br  className='my-8'/>

<label htmlFor="">Available Quantity</label>

<input name='quantity' type="text" placeholder="quantity" className=" my-8 input input-bordered w-full max-w-xs" /><br  className='my-8'/>

<label htmlFor="">Supplier</label>

<input name='supplier' type="text" placeholder="supplier" className="input input-bordered w-full max-w-xs" /><br  className='my-8'/>

<label htmlFor="">category</label>

<input name='category' type="text" placeholder="Category" className="my-8 input input-bordered w-full max-w-xs" /><br  className='my-8'/>

<label htmlFor="">Photo URL</label>

<input  name='photo' type="text" placeholder="PHOTO URL" className="my-8 my-8 input input-bordered w-full max-w-xs" /><br  className='my-8'/>

<label htmlFor="">Taste</label>

<input name='taste' type="text" placeholder="Taste" className="input input-bordered w-full max-w-xs" /><br  className='my-8'/>

<label htmlFor="">Detail</label>

<input name='detail' type="text" placeholder="detail" className="my-8 input input-bordered w-full max-w-xs" /><br  className='my-8'/>



<input type="submit" value='Add Coffe' className='block w-full p-6 bg-green-400 ' />
</div>
</form>

    </div>
  )
}

export default AddCoffe
