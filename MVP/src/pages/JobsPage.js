import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
export default function JobsPage() {
    return (
    <div className="text-base-content ">
        <Navbar/>
        <article className="prose text-lg mx-auto m-5">
            <h1>My Jobs</h1>
        </article>
        <div className= "grid place-content-center">  
        <JobCard title='IOS Developer' time='15' comp = '20' info = 'I need someone who knows how to build a full-stack iOS app from scratch. We have hi-fidelity wireframes and need a developer.' type = "Accepted"/>
        <JobCard title='Full Stack Developer' time='30' comp = '15' info = 'We are building a website that seeks to connect entrepreneurships with developers. We need an expert in HTML/CSS, Flask, and JavaScript.' type = "Posted"/>
        </div>
    </div>
    );
}