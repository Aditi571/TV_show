import React from 'react'
import { useParams } from 'react-router-dom';

export const Ticket = ({data}) => {
    const { id } = useParams();

    console.log(id)
    let show_info=null;
    data.map((obj)=>{
        if(obj.show.id==id){
            show_info=obj
            console.log(show_info)
        }
    })
  return (
    <div className='flex justify-center w-[100vw] '>
        
        <form action="/action_page.php" class="was-validated w-[60vw]">
        <h1 className='text-center mt-10 text-3xl font-bold'>BOOK YOUR TICKETS NOW!!</h1>
  <div class="mb-3 mt-3">
    <label for="uname" class="form-label">Movie Name:</label>
    <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" value={show_info.show.name} required></input>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="mb-3 mt-3">
    <label for="uname" class="form-label">Time:</label>
    <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" value={show_info.show.schedule.time} required></input>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div class="mb-3 mt-3">
    <label for="uname" class="form-label">Username:</label>
    <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required></input>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
  </div>
 
  <div class="form-check mb-3">
    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required></input>
    <label class="form-check-label" for="myCheck">I agree on terms.</label>
    <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Check this checkbox to continue.</div>
  </div>
  <button type="submit" className=" bg-blue-500 text-white pt-2 pb-2 pl-4 pr-4 rounded-lg text-xl ">Submit</button>
</form>
    </div>
  )
}
