import React from 'react'

const Card = ({data}) => {
    console.log(data.image);
  return (
    <div className='Card'>
        <div className='Img'>
<img src={data.image} alt='sign'/>
        </div>
        <div className='content'>
            <span>{data.name}</span>
            <h3>$198K</h3>
            <span>37%</span>
        </div>

    </div>
  )
}

export default Card