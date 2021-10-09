import { useState, useEffect } from "react";
import MeetupList from "../components/meetup/MeetupList"

function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [dataLoading, setDataLoading] = useState([])
  useEffect(()=>{
    fetch("https://react-first-app-98acc-default-rtdb.firebaseio.com/meetups.json")
    .then(response=>{
      return response.json()
    }).then(data=>{
      const meetups = []
      for (const key in data ){
      const meetup = {
        id: key,
        ...data[key]
      }
      meetups.push(meetup)
      }
      setIsLoading(false)
      setDataLoading(meetups)
    })
  }, [])
 
  if(isLoading){
    return (
      <section>
        <div>is loading ....</div>
      </section>
    )
  }
  else 
    return (
      <section>
        
       <h1>All meet ups page</h1>
      <MeetupList meetups={dataLoading} />
        </section>
    );
  }
  
  export default AllMeetUpPage;
  