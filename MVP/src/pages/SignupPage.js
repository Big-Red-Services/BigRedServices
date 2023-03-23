import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, signup } from "../lib/pocketbase";


export default function SignupPage() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!username){
            window.alert("Username Invalid")
            return;
        }
        if(!password || password.length < 8){
            window.alert("Password Invalid")
            return;
        }
        signup(username,password)
       // createPost(title,description,skills,role,time,comp);
        navigate("/");
    };

    return (
    <div className="bg-base-300 text-base-content ">
        <Navbar/>
        <article className="prose text-lg mx-auto m-5">
            <h3 className="text-4xl px-5 pt-5 mb-5">Signup</h3>
        </article>
        <div className="ml-5 mr-5">
            <div className="form-control flex items-center ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Username</span>
                </label>
                <input type="text" placeholder="Type here" onChange={e=>setUsername(e.target.value)} required className="input input-bordered w-full max-w-xs text-lg" />
            </div>
            <div className="form-control flex items-center ml-5 mb-2">
                <label className="label">
                <span className="label-text text-xl">Password</span>
                </label>
                <input type="text" placeholder="Type here" onChange={e=>setPassword(e.target.value)} required className="input input-bordered w-full max-w-xs text-lg" />
            </div>
            <button className="btn btn-secondary m-5" onClick={handleSubmit}>Signup</button>
        </div>
    </div>
    );
}