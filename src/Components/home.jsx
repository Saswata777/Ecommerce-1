import React from 'react'
import { CartState } from '../context/context'
import SingleProducts from './singleProducts';






const Home = () => {
  const {state : {products}} = CartState();
  console.log(products);

  return (
    <div className='home'>
      {/* <Filter /> */}
      <div className="productsContainer" style={{display:'flex', flexFlow:'wrap',justifyContent:'space-around'}}>
        {
          products.map((prod)=>{
            return (
              <SingleProducts prod={prod} key={prod.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home