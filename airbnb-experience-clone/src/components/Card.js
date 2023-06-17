import React from "react";
import star from '../images/star.png'

export default function Card(props) {

    let badge_txt
    if (props.item.openSpots === 0) {
        badge_txt = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badge_txt = "ONLINE"
    }

    return (
        <div className="card">

            {badge_txt && <div className="card-badge"> {badge_txt} </div>}

            <div className="expr"></div>
            <img src={props.item.coverImg} alt={props.item.coverImg}
                className="expr-img" />

            <div className="card-stats">
                <img src={star} alt="star" className="card-star" />
                &nbsp;
                <span className="space-top bold"> {props.item.stats.rating} </span>
                &nbsp;
                <span className="grey space-top"> ({props.item.stats.reviewCount}) •</span>
                &nbsp;
                <span className="grey space-top">{props.item.location} </span>
            </div>

            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>

        </div>
    )
}