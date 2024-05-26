import React from 'react'
import itemscart from './itemscart'
import data from './data'

const Home = () => {

  return (
    <div>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justufy-content-center">
            {data.productData.map((item, index) => {
                return(
                    <itemscart 
                    img={item.img}
                     title={item.title} 
                     desc={item.desc} 
                     price={item.price} 
                     item={item} 
                     key={index}
                    />
                )
            }
            )}
            <itemscart img="" title="title" desc="desc" />
        </div>
      </section>
    </div>
  )
}

export default Home
