import React from 'react'

const BackgroundImage = () => {

  const style = {
    width:'100%',
    height: 'auto',
    zIndex: '1',
  };

  return (
    <div className='ban position-relative' style={{height: '100%'}}>
      {/* <img src='src/assets/imagenes/16x9-solid.jpg' className="" alt="..." style={ style }/> */}
      <img src='https://occ-0-3791-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU1Czziam0slhA3T09BuJd70yj6v2tt42thd3cvpM-2E_bOAfttQ-b2wITR4RDJKkACCSUSnK7V20Fp7K7q5CBUsEG9MaTwgXQFq.webp?r=456' className="" alt="..." style={ style }/>
      <div className='gradient position-absolute top-50'></div>
    </div>
  )
}

export default BackgroundImage;