import { JourneyPicker } from '../../components/JourneyPicker';
import {useState} from 'react'

export const HomePage = () => {
  const [journey,setJourney]= useState(null);
  
  const handleJourneyChange = (journey)=>{
    setJourney(journey)
  }
  
  return (
    <main>
      <JourneyPicker  onJourneyChange={handleJourneyChange} />
      {/* journeyId={journeyId} journey={journey} */}
      {journey===null? null: <p>Nalezeno spojení s id{journey.journeyId}</p>}
    </main>
  );
};
