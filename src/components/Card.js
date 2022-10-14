import React from 'react'

import starImg from '../images/star.png';

export default function Card (props) {
    let badgeText = null;
    if(props.spots === 0) {
        badgeText = 'SOLD OUT';
    }else if(props.country === 'online') {
        badgeText = 'ONLINE';
    }
    return (
        <div className='card--item'>
            {badgeText && <div className="card--availability-badge">{badgeText}</div>}
            <img src={`images/${props.img}`} alt="Img" width={'350px'} className="card-image--place"/>
            <div className="card-text--place">
                <img src={starImg} alt="Img" width={'17px'}/>
                <span> {props.rating} </span>
                <span className='card-light-text'>({props.reviewCount}) . {props.country}</span> <br />

                <span>{props.textMessage}</span><br />
                <span className='card-dark-text'>From ${props.price} </span>
                <span>/ person</span>
            </div>
        </div>
    );
};