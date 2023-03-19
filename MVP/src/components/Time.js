const Time = () => {

    return (  
        <div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Expected Hours of Work</span>
                </label>
                <input type="text" placeholder="+30 Hours" className="input input-bordered w-full max-w-xs text-lg" />
            </div>
        </div>
    );
}
 
export default Time;