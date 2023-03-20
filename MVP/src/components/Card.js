import { useNavigate } from "react-router-dom";
import { getPosts, pb } from '../lib/pocketbase'
import { useEffect, useState } from "react";


const Card = (props) => {
    const { title, description, time, compensation, role} = props;
    
    let navigate = useNavigate(); 

    return ( 
    <div className="card w-100 bg-base-100 shadow-lg mb-5 ml-5 mr-5 border border-black border-opacity-25 rounded-25">
        <div className="card-body px-5 py-5">
            <h2 className="card-title text-3xl">{title}</h2>
            <div className='flex'>
            <div className="flex text-left text-lg mr-3 mt-2">  
            <h1>Role: </h1>
            <div className="badge badge-primary ml-1 mt-1 py-2">{role}</div>
            </div>
            <div className="flex text-left text-lg mr-3 mt-2">  
            <h1>Time Commitment: </h1>
            <div className="badge badge-primary ml-1 mt-1 py-2">~{time} hours</div>
            </div>
            <div className="flex text-left text-lg mr-3 mt-2">  
            <h1>Compensation: </h1>
            <div className="badge badge-primary ml-1 mt-1 py-2">${compensation} per hour</div>
            </div>
            </div>
            <p className="text-left">{description}</p>
            <div className="card-actions justify-end">
            <label htmlFor="my-modal" className="btn btn-secondary">Learn More</label>
            </div>
            </div>
        </div>
    );
}
 
export default Card;