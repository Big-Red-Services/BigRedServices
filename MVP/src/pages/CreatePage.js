import Comp from "../components/Comp";
import JobDescription from "../components/JobDescription";
import JobTitle from "../components/JobTitle";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Time from "../components/Time";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPost } from "../lib/pocketbase";


export default function CreatePage() {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [role, setRole] = useState(null);
    const [skills, setSkills] = useState(null);
    const [time, setTime] = useState(null);
    const [comp, setCompensation] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!title){
            window.alert("please enter title")
            return;
        }
        if(!description){
            window.alert("please enter description")
            return;
        }
        if(!skills){
            window.alert("please enter skills")
            return;
        }
        if(!time){
            window.alert("please enter time")
            return;
        }
        if(!comp){
            window.alert("please enter compensation")
            return;
        }
        createPost(title,description,skills,role,time,comp);
        navigate("/confirm");
    };

    return (
    <div className="bg-base-300 text-base-content ">
        <Navbar/>
        <article className="prose">
            <h3 className="text-4xl px-5 pt-5 text-left mb-5">Add a New Job</h3>
        </article>
        <div className="ml-5 mr-5">
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Job Title</span>
                </label>
                <input type="text" placeholder="Type here" onChange={e=>setTitle(e.target.value)} required className="input input-bordered w-full max-w-xs text-lg" />
            </div>
            <div className="form-control ml-5 mb-2">
                <label className="label">
                    <span className="label-text text-xl">Description</span>
                </label>
                <textarea className="textarea textarea-bordered textarea-xs w-1/2 text-lg pl-3 pt-3" onChange={e=>setDescription(e.target.value)} required rows="4" placeholder="What skills are you looking for? Example: a website, an iOS mobile app"></textarea>
            </div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Skills</span>
                </label>
                <input type="text" placeholder="Full Stack, Backend, Python, etc" onChange={e=>setSkills(e.target.value)} className="input input-bordered w-full max-w-xs text-lg" />
            </div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Role</span>
                </label>
                <input type="text" placeholder="IOS Developer, Data Scientist" onChange={e=>setRole(e.target.value)} className="input input-bordered w-full max-w-xs text-lg" />
            </div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Expected Hours of Work</span>
                </label>
                <input type="number" placeholder="+30 Hours" onChange={e=>setTime(e.target.value)} className="input input-bordered w-full max-w-xs text-lg" />
            </div>
            <div className="form-control w-full max-w-xs ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Base Rate (Per Hour)</span>
                </label>
                <input type="number" placeholder="15" onChange={e=>setCompensation(e.target.value)} className="input input-bordered w-full max-w-xs text-lg" />
            </div>
                <button className="btn btn-secondary normal-case mr-5 text-lg px-3 py-2 mb-10" onClick={handleSubmit}>Confirm</button>
        </div>
    </div>
    );
}