import React from "react";

    

class Header extends React.Component{

    render(){

        return (

           <nav className="Nav">

             <div className="Nav-menus">

               <div className="Nav-brand">

                 <a className="Nav-brand-logo" href="/">
                    <img style = {{width: '300px', height: '40px', float: "inline-start"}} src={"./brhLogo.png"} alt="Logo" />
                    <img style = {{width: '110px', height: '37px',float: "right", marginTop: '3px'}} src = {"./profile.png"} alt="Profile"/>
                    <img style = {{width: '140px', height: '42px', marginLeft: '10px',float: "right"}} src = {"./messages.png"} alt="Messages"/>
                    <img style = {{width: '170px', height: '40px',float: "right"}} src = {"./postJob.png"} alt="PostJob"/>

                 </a>

               </div>
                
             </div>

           </nav>

       );

    }   

}

export default Header;