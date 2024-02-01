import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({show_info}) => {
  return (
    <div className='mt-10'>
        <div className="card" style={{ width: '450px' }}>
        {show_info.show.image && show_info.show.image.original && (
          <img className="card-img-top h-[50vh] " src={show_info.show.image.original} alt="Card image" />
        )}
          <div className="card-body flex justify-center flex-col">
            <h3 className="card-title font-bold text-center text-2xl">{show_info.show.name}</h3>
            <p className="card-text text-center mb-2">IMDB : {show_info.show.externals.imdb}</p>
            <NavLink to={`/summary/${show_info.show.id}`} className="btn btn-primary ">See More</NavLink>
          </div>
        </div>
    </div>
  )
}
