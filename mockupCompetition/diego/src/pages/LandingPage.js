import Home from "../components/Home";
import Navbar from "../components/Navbar";

export default function LandingPage() {
    return (
        <div>
        <Navbar/>
        <div className='content'>
            <Home/>
        </div>
        </div>
    );

}