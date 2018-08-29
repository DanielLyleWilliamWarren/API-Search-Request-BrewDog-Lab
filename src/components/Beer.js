import React from 'react'
import '../App.css'

const Beer = function (props) {
  console.log(props);
  return(
    <div className="beer">
    <h2 className='text-property'>{props.name}</h2>
    <img src={props.image}/>
    <p className='text-property-small' >{props.tagline}</p>
    <p className='text-property-small' >{props.description}</p>


    </div>
  );
}


export default Beer;
