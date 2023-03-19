const Filter = () => {

    return (  
        <div>
            <article className="prose">
                <h3 className="text-4xl px-5 pt-5 text-left">Filters</h3>
            </article>
            <input type="text" placeholder="Type here" className="input input-bordered max-w-xs m-5"/>
            <div className="flex ml-5">
                <input type="checkbox" className="checkbox checkbox-primary mr-2 mb-2" />
                <p>Entrepreneurship</p> 
            </div>
            <div className="flex ml-5">
                <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                <p>Developer</p> 
            </div>
        </div>
    );
}
 
export default Filter;