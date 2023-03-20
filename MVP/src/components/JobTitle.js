import { useState } from "react";


const JobTitle = () => {

    return (  
        <div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Job Title</span>
                </label>
                <input type="text" placeholder="Type here" required className="input input-bordered w-full max-w-xs text-lg" />
            </div>
        </div>
    );
}
 
export default JobTitle;