import React from 'react'
import CardSlider from './CardSlider';

export default React.memo( function Slider({movies}) {

    const getMoviseFromRange = (from, to) => {
        return movies.slice(from,to)
    }
    
  return (
    <div>
        <CardSlider title='Trending Now' data={getMoviseFromRange(0,10)}/>
        <CardSlider title='New Releases' data={getMoviseFromRange(10,20)}/>
        <CardSlider title='BlockBuster Movies' data={getMoviseFromRange(20,30)}/>
        <CardSlider title='Popular on Turkey' data={getMoviseFromRange(30,40)}/>
        <CardSlider title='Action Movies' data={getMoviseFromRange(40,50)}/>
        <CardSlider title='Love Movies' data={getMoviseFromRange(50,60)}/>
    </div>
  )
})
