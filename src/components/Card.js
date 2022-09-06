import React from "react";
import image from '../images/location.svg';

export default function Card (props){
    return(
        <div className="card-container">
            <div className="main--container">
                <img className="card--image" src={props.imageUrl} alt=""/>
            </div>

            <div className="info">
                <div className="location">
                <img className='small-icon' src={image} alt="" />
                <h6>{props.location}</h6>
                <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>

                <h2 className="title">{props.title}</h2>
                <h6 className="date">{props.startDate}-{props.endDate}</h6>
                <p className="description">{props.description}</p>
            </div>

        </div>
    )

};