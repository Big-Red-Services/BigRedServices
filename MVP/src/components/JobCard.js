import { useNavigate } from "react-router-dom";

const JobCard = (props) => {
    const { title, info, time, comp, type} = props;

    let navigate = useNavigate(); 
    const routeChangeLearn = () =>{ 
        let path = `/learn`; 
        navigate(path);
      }

    return ( 

    <div className="card w-100 bg-base-100 shadow-lg mb-5 ml-5 mr-5 border border-black border-opacity-25 rounded-25">
        <div className="card-body px-5 py-5">
            <h2 className="card-title text-3xl">{title} <div class="badge badge-secondary ">{type}</div></h2>

            <div className="flex text-left text-lg">  
            <h1>Time Commitment: </h1>
            <div className="badge badge-primary ml-1 mt-1 py-2">~{time} hours</div>
            </div>
            <div className="flex text-left text-lg">  
            <h1>Compensation: </h1>
            <div className="badge badge-primary ml-1 mt-1 py-2">${comp} per hour</div>
            </div>
            <p className="text-left">{info}</p>
            <div className="card-actions justify-end">
            <label htmlFor="my-modal" className="btn btn-secondary">Learn More</label>
            </div>
        </div>
    </div>

    );
}

export default JobCard;