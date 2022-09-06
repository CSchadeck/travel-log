import React from 'react'
import data from '../data'
import Card from './Card'

export default function Hero (){
    const dataSet = data.map(x =>{
        return <Card
                    key= {x.title}
                    title= {x.title}
                    location={x.location}
                    googleMapsUrl={x.googleMapsUrl}
                    startDate={x.startDate}
                    endDate={x.endDate}
                    description={x.description}
                    imageUrl={x.imageUrl}
                    />

    })
    return (
        <>
        <div className='main'>
            {dataSet}
        </div>
        </>
    )
    
}