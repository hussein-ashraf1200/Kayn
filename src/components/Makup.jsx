import React from 'react'
import all_product from "../components/asests/all_product"
import AddCart from './AddCart'


const Makup = () => {
  return (
    <div >
    
    <div className=' mx-auto text-center mb-4 mt-8'>
    <p className='text-black font-bold text-2xl'>Our Products </p>
    <hr className=' border-t-2 w-36 mx-auto border-black ' />
  </div>
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {all_product.map((product) => (
        <div key={product.id} className="border hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden shadow-lg">
 
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">New Price: ${product.new_price.toFixed(2)}</p>
            <p className="text-gray-400 line-through">Old Price: ${product.old_price.toFixed(2)}</p>
          </div>
          <AddCart/>
        </div>
      ))}
</div>
    </div>
  )
}

export default Makup
