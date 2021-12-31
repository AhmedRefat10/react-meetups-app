import { useState, useEffect } from "react"
import MeetupList from '../components/meetups/MeetupList';


function AllMeetupsPage() {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsloading(true)
    fetch(
      'https://react-meetup-app-96e44-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup)
        }
        setIsloading(false);
        setLoadedMeetups(meetups)
      });

  }, []);
      

      if(isLoading) {
        return (
          <section>
            <h1>Loading...</h1>
          </section>
          );
      }

	return (
    <section>
      <h1>All Meetups</h1>
		  <MeetupList meetups={loadedMeetups}/>
    </section>
		)
}

export default AllMeetupsPage;