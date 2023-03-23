const LearnModal = () => {

    return (  
        <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box bg-base-300">
                <h3 className="font-bold text-lg">Thank You for applying for this job!</h3>
                <p className="py-4">You will receive an update soon from the Job Poster!</p>
                <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">Okay</label>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default LearnModal;