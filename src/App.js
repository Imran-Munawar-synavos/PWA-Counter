import React, { useState } from 'react';
import './App.css';

function App() {

  const ProductCard = () => {
    return (
      <div className='flex justify-center mt-32'>
        
      <div className='bg-[#1c1816] relative w-72 flex flex-col px-3 pt-2 rounded-lg'> 
       <div>
          <img src='/zinger.png' className=''/>
       </div>
       <h5 className='font-semibold text-white'>Kruch Burger</h5>
       <p className='mt-3 text-white'>Tender boneless strips, sliced onions, tangy imli chutney, mint</p>
       <span className='font-bold mt-3 pb-10 text-white	'>
          Rs 200
       </span>
       <button className='bg-[#ea002a] absolute -bottom-5 left-20 hover:bg-white rounded-lg p-1'>
          <span className='text-xs whitespace-nowrap font-extrabold pb-8 cursor-pointer hover:text-[#ea002a]'> + ADD TO BUCKET</span>
       </button>
      </div>
      </div>
  
    )
  }
  
  return (
    <div className='lg:flex gap-10 px-5 flex-wrap justify-center'>
     {[...Array(10)].map((_, index) => (
      <ProductCard key={index} />
    ))}
    </div>
  );
}

export default App;
