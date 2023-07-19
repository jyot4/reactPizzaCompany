import React from 'react'

function Footer() {
  let opentiming = 12;
  let closetimeing = 22;
  let today = new Date()
  console.log(today)


  const getHours = today.getUTCHours()
  const indianTime = 5.5
  const getIndiaTime = getHours + indianTime % 24
  console.log(getIndiaTime)

  return (
    <>
      <div className='footer'>

      
        <div className={(getIndiaTime > opentiming) ? "order" : "close"}>
        <p>We're Happy to welcome you between {opentiming}:00 and {closetimeing}:00</p>
          <button className='btn'>  Order Now</button>
        </div>

      </div>

    </>
  )
}

export default Footer