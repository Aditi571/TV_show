import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Card_summary = ({ data }) => {


    const { id } = useParams();

    console.log(id)
    let show_info=null;
    data.map((obj)=>{
        if(obj.show.id==id){
            show_info=obj
            console.log(show_info)
        }
    })

    // Render the show details
    return (
        <div className='flex justify-center mt-10'>
            <div className="card w-[95vw]">
            <div className='flex flex-row'>
            {show_info.show.image && show_info.show.image.original && (
          <img className="card-img-top h-[65vh] " src={show_info.show.image.original} alt="Card image" />
        )}

<div className="card-body flex flex-col">
<h3 className="card-title font-bold text-center text-2xl ">{show_info.show.name}</h3>
            <h4 className='font-bold'>Runtime : {show_info.show.runtime}</h4>
            <h4 className='mb-10 font-bold '>Language : {show_info.show.language}</h4>
            <p className="card-text text-center mb-10">{`${show_info.show.summary}`}</p>
            <NavLink to={`/bookTicket/${show_info.show.id}`} className="btn btn-primary ">Book tickets</NavLink>
          </div>
            </div>
            
         
        </div>
           
        </div>
    );
};
