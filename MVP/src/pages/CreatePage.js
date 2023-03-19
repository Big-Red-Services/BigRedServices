import Comp from "../components/Comp";
import JobDescription from "../components/JobDescription";
import JobTitle from "../components/JobTitle";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Time from "../components/Time";
import { useNavigate } from "react-router-dom";


export default function CreatePage() {

    let navigate = useNavigate(); 
    const routeChangeConfirm = () =>{ 
        let path = `/confirm`; 
        navigate(path);
      }

    return (
    <div className="bg-base-300 text-base-content ">
        <Navbar/>
        <article className="prose">
            <h3 className="text-4xl px-5 pt-5 text-left mb-5">Add a New Job</h3>
        </article>
        <div className="ml-5 mr-5">
            <JobTitle/>
            <JobDescription/>
            <Skills/>
            <Time/>
            <Comp/>
            <button className="btn btn-secondary normal-case mr-5 text-lg px-3 py-2 mb-10" onClick={routeChangeConfirm}>Confirm</button>
        </div>
    </div>
    );
}