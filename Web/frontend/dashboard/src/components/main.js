import SideBar from "./sidebar/sidebar";
import UserSideBar from "./sidebar_student/sidebar";
import Pages from "./pages/pages";
import UserPages from "./pages_student/pages";
import TopBar from "./sidebar/topbar/TopBar";
import UserTopBar from "./sidebar_student/topbar/TopBar";
//import GlobalStyles from "./main-styles";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";


import { useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom'
import ComplteRegister from "./pages/account-changer";
import Pending from "./pages/Pending";


function Main() {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };
  useEffect(async () => {
		
    console.log(`Bearer ${localStorage.getItem("access")}`)
    console.log("tryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
    axios.get('http://127.0.0.1:8000/users/user-details/', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("access")}`
  }
})
.then((res) => {

  console.log("yeeeeeeeeeeeeeeeees")
  setStatus(res.data.status)
  setType(res.data.account_type)
})
.catch((error) => {
  console.error(error)
})
  
  }, []);




  if(status === null)
  {
    console.log("it is null!",status)
    return (
    
      <Router>
        <ComplteRegister/>
      </Router>


      //////////////////////////
    //   <Router>
    //   {/* <GlobalStyles /> */}
    //   <TopBar
    //     handleNavOpen={handleNavOpen}
    //     handleNavClose={handleNavClose}
    //     navOpen={navOpen}
    //   />
    //   <SideBar navOpen={navOpen} handleNavClose={handleNavClose} />
    //   <Pages />
    // </Router>


    );

  
    

  }
  else if(status === "PENDING")
  {
    console.log("it is pending!",type)
    return (
    
      <Router>
        <Pending/>
      </Router>
    );
  }
  else{
    console.log("it is false!",status)
    console.log("it is false!",type)
    if(type === "PROFESSOR")
    {
      return (
        <Router>
          {/* <GlobalStyles /> */}
          <TopBar
            handleNavOpen={handleNavOpen}
            handleNavClose={handleNavClose}
            navOpen={navOpen}
          />
          <SideBar navOpen={navOpen} handleNavClose={handleNavClose} />
          <Pages />
        </Router>
      );
    }
    else{
      console.log("horaaaaaaaaaaaaaaaaaaaaaaa")
      return (
        <Router>
          {/* <GlobalStyles /> */}
          <UserTopBar
            handleNavOpen={handleNavOpen}
            handleNavClose={handleNavClose}
            navOpen={navOpen}
          />
          <UserSideBar navOpen={navOpen} handleNavClose={handleNavClose} />
          <UserPages />
        </Router>
      );
    }
  
    
  }





  const root = ReactDOM.createRoot(document.getElementById('root')); 
  
  root.render(<Main isLoggedIn={false} />);

  
  
}




export default Main;

