import { useNavigate } from "react-router-dom";
const Navbar = () => {

    let navigate = useNavigate(); 
    const routeChangeCreate = () =>{ 
      let path = `/create`; 
      navigate(path);
    }

    const routeChangeHome = () =>{ 
        let path = `/`; 
        navigate(path);
      }

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
      

    return (  
    <div className="navbar bg-base-100 border-b border-black border-opacity-25">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-3xl" onClick={routeChangeHome}><span className="text-primary">Gig</span>Eship</a>
        </div>
        <div className="flex-none">
            <button className="btn btn-secondary normal-case mr-5 text-xl px-3 py-2" onClick={routeChangeCreate}>+ Post a Job</button>
            
        </div>
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
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>

    );
}
 
export default Navbar;