import { useNavigate } from "react-router-dom";
import { signout } from "../lib/pocketbase";
const Profile = () => {
    let navigate = useNavigate(); 
    const routeChangeSettings = () =>{ 
        let path = `/settings`; 
        navigate(path);
      }

    const routeChangeMessage = () =>{ 
        let path = `/messages`; 
        navigate(path);
      }
      const routeChangeJobs = () =>{ 
        let path = `/jobs`; 
        navigate(path);
      }

      const logout = () => {
        signout();
       // createPost(title,description,skills,role,time,comp);
        navigate("/");
    };


    return (  
        <div>
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src="monkey.png" />
            </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between" onClick={routeChangeMessage}>Messages</a>
                </li>
                <li>
                <a className="justify-between" onClick={routeChangeJobs}>My Jobs</a>
                </li>
                <li><a onClick={routeChangeSettings}>Settings</a></li>
                <li><a onClick={logout}>Logout</a></li>
            </ul>
        </div>
        </div>
    );
}
 
export default Profile;