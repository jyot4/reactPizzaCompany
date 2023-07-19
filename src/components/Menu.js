import React from 'react'
import data from './data'


function Menu() {
  console.log(data)
  return (

    <div className='menu'>
      <h2>OUR MENU</h2>

      <p>Authentic italian  cuisine, 6 creative dishes to choose from . all from our store owen. all organic. all delicious</p>
      <div className='pizzas'>
        {
          data.map((content,index) => {
            return (
              <div className={(content.soldOut)? "pizza sold-out" :"pizza"} key= {index}>
                <img src={content.photoName} alt='photos'></img>
                <div className='pizza div'>

                  <h3>{content.name}</h3>
                  <p>{content.ingredients}</p>
                  <p>{(content.soldOut)?<span>Sold Out</span> : content.price}</p>

                </div>
              </div>
            )

          })

        }
      </div>





      {/* <data/> */}
    </div>

  )
}

export default Menu