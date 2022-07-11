import React from 'react'
import "../googlemap/googlemap.css"

const googlemap = () => {
  return (
    <div className='googlemap'>
    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=vilnius&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default googlemap