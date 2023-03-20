export default function ConfirmPage() {
    const handleClick = (e) => {
        window.location.href = "http://localhost:3000";
    }

    return (
        <div className="confirmationPage">
            <body>
            <button className= "homeButton" style={{height:'70px',width:'140px', borderRadius: '10px', font: 100}} onClick={(e) => handleClick(e)}>Home</button>
            <h1>Thank You for applying for this job!</h1>
            <h2>You will receive an update soon from the Job Poster!</h2>
            </body>
        </div>

    );

}