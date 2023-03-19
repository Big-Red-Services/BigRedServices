const Comp = () => {

    return (  
        <div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Base Rate (Per Hour)</span>
                </label>
                <input type="text" placeholder="15" className="input input-bordered w-full max-w-xs text-lg" />
            </div>
        </div>
    );
}
 
export default Comp;