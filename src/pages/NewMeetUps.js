import {useHistory} from "react-router-dom"
import NewMeetUpForm from "../components/meetup/NewMeetUpForm";
function NewMeetUpPage() {
  const histrory =  useHistory()
 const onSubmitHandler = (data)=>{
fetch("https://react-first-app-98acc-default-rtdb.firebaseio.com/meetups.json",
{
  method:"POST",
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(()=>{
  histrory.replace("/")
})
  }
    return (
      <section>
        <h1>Add new meetup</h1>
        <NewMeetUpForm  onAddData={onSubmitHandler}/>
      </section>
    );
  }
  
  export default NewMeetUpPage;
  