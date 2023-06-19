import React from "react";

export default function Card(props) {

    return (
        <div className="card">

            <img src={props.item.coverImg} alt={props.item.coverImg} className="card-img"></img>

            <div className="card-details">
                <i class="fa-solid fa-location-dot location-icon"></i>
                &nbsp;

                <span className="bold">{props.item.location.name}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <a href={props.item.location.link} target="_blank" rel="noreferrer" className="location-link">View On Google Maps</a>

                <h1 className="card-title">{props.item.title}</h1>

                <div className="card-date bold">
                    {props.item.date}
                </div>

                <div className="desc">
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}