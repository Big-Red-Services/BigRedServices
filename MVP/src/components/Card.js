import React from "react";
const Card = (props) => {
    const { paid, time, dayNum, dayPlural,info} = props;

    const handleClick = (e) => {
        window.location.href = "http://localhost:3000/confirm";
    }

    return (  
        <div className = "card">
            <div className="cardInner">
                <div className="paid">
                <h2>{paid} • {time}</h2>
                </div>
                <div className="expire">
                    <h2>expires in {dayNum} {dayPlural}</h2>
                </div>
            </div>
            <div className="info">
                <p>{info}</p>
            </div>
            <div className="butt">
                <button class="button-24" role="button" onClick={(e) => handleClick(e)}>confirm</button>
            </div>
        </div>

    );
}
 
export default Card;