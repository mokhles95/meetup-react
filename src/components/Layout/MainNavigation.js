import {Link} from "react-router-dom"
import classes from "./MainNavigation.module.css"
function MainNavigation() {
    return (
     <header className={classes.header}>
         <div className={classes.logo}>React meetUps</div>
         <nav>
             <ul>
                 <li>
                     <Link to="/">All meetups</Link>
                 </li>
                 <li>
                     <Link to="/favoritPage">My favorit</Link>
                 </li>
                 <li>
                     <Link to="/NewMeetUpPage">add new meetup</Link>
                 </li>
             </ul>
         </nav>
     </header>
    );
  }
  
  export default MainNavigation;
  