import {Route , Switch} from "react-router-dom"
import AllMeetUpPage from "./pages/AllMeetUps";
import FavoritPage from "./pages/Favorit";
import NewMeetUpPage from "./pages/NewMeetUps";
import Layout from "./components/Layout/Layout"
function App() {
  return (
  
    <Layout>
      <Switch>
      <Route path="/" exact> <AllMeetUpPage/> </Route>
      <Route path="/favoritPage"> <FavoritPage/> </Route>
      <Route path="/NewMeetUpPage"> <NewMeetUpPage/> </Route>
      </Switch>
      </Layout>
   
  );
}

export default App;
