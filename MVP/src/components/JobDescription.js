const JobDescription = () => {

    return (  
        <div>
            <div className="form-control ml-5 mb-2">
                <label className="label">
                    <span className="label-text text-xl">Description</span>
                </label>
                <textarea className="textarea textarea-bordered textarea-xs w-1/2 text-lg pl-3 pt-3" rows="4" placeholder="What skills are you looking for? Example: a website, an iOS mobile app"></textarea>
            </div>
        </div>
    );
}
 
export default JobDescription;