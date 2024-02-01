import React from 'react'
import { Card } from '../components/Card_component';

export const Home = ({data}) => {
  return (
    <div className='bg-violet-50'>
        <h1 className='text-3xl font-bold pt-5 text-center'>CURRENT TV SHOWS</h1>
        {data ? (
        <div className='w-[100vw] h-full flex justify-center items-center bg-violet-50'>
          <div className='flex flex-row flex-wrap justify-between h-full w-[95vw]'>
        {data ? (
          data.map((obj) => (
            <div key={obj.show.id} style={{ marginBottom: '10px' }}>
              <Card key={obj.show.id} show_info={obj}/>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
        </div>
        
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
