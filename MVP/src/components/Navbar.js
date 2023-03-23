import { useNavigate } from "react-router-dom";
import { isUserValid, signout } from "../lib/pocketbase";
import Profile from "./Profile";
const Navbar = () => {

  let navigate = useNavigate();
  const routeChangeCreate = () => {
    let path = `/create`;
    navigate(path);
  }

  const routeChangeHome = () => {
    let path = `/`;
    navigate(path);
  }

  const routeChangeLogin = () => {
    let path = `/login`;
    navigate(path);
  }

  const routeChangeSignup = () => {
    let path = `/signup`;
    navigate(path);
  }
  const routeChangeJobs = () => {
    let path = `/jobs`;
    navigate(path);
  }

  const routeChangeAbout = () => {
    let path = `/about`;
    navigate(path);
  }


  const navButtonStyle = {
    marginRight: '35px',
    paddingRight: '35px',
    backgroundColor: '20222c',
    color: 'white',
  }



  return (
    <div className="navbar bg-base-100 border-b border-black border-opacity-25">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl" onClick={routeChangeHome}><span className="text-primary">Gig</span>Eship</a>
      </div>
      <div className="menu-buttons">
        <button className="home" onClick={routeChangeHome} style={navButtonStyle}> <span className="text-primary">Home</span></button>
        <button className="home" onClick={routeChangeAbout} style={navButtonStyle}> <span className="text-primary">About</span></button>
      </div>

      <div className="flex-none">
        {isUserValid ? <button className="btn btn-secondary normal-case mr-5 text-xl px-3 py-2" onClick={routeChangeCreate}>+ Post a Job</button> : null}
        {!isUserValid ? <button className="btn btn-neutral normal-case mr-5 text-xl px-3 py-2" onClick={routeChangeLogin}>Login</button> : null}
        {!isUserValid ? <button className="btn btn-neutral normal-case mr-5 text-xl px-3 py-2" onClick={routeChangeSignup}>Sign Up</button> : null}
      </div>
      {isUserValid ? <Profile /> : null}
    </div>

  );
}

export default Navbar;