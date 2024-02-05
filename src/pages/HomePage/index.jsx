import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JourneyPicker } from "../../components/JourneyPicker";
import { JourneyDetail } from "../../components/JourneyDetail";
import { SeatPicker } from "../../components/SeatPicker";
import { SelectedSeat } from "../../components/SelectedSeat";
import "./style.css";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (selectedJourney) => {
    setJourney(selectedJourney);
    setUserSeat(selectedJourney.autoSeat)
  };

  const handleBuy = async () => {
    const resp = await fetch(
      "https://apps.kodim.cz/daweb/leviexpress/api/reservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "create",
          seat: userSeat,
          journeyId: journey.journeyId,
        }),
      }
    );
    
    if (!resp.ok) {
      alert("Aj, karamba! Něco se pokazilo. Server se mnou nemluví 😢");
      return;
    }
    const data = await resp.json();
    const reservation = data.results;
    
    navigate(`/reservation/${reservation.reservationId}`);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat}/>
          <SeatPicker
            seats={journey.seats}
            journeyId={journey.journeyId}
            selectedSeat={userSeat}
            onSeatSelected={setUserSeat}
          />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};

// import { JourneyPicker } from '../../components/JourneyPicker';
// import {useState} from 'react'
// import { JourneyDetail } from '../../components/JourneyDetail';
// import { SeatPicker } from '../../components/Seat';

// export const HomePage = () => {
//   const [journey,setJourney]= useState(null);

//   const handleJourneyChange = (journey)=>{
//     setJourney(journey)
//     console.log('co je jour', journey.stops)
//   }
  
//   return (
//     <main>
//       <JourneyPicker  onJourneyChange={handleJourneyChange} />
//       {journey && <JourneyDetail journey={journey}/>} {/*{journey===null ? null : <JourneyDetail journey={journey}/>} jiný zápis*/}
//       <SeatPicker />

//       <div className="controls container">
//             <button className="btn btn--big" type="button" onClick={handleBuy}>
//               Rezervovat
//             </button>
//           </div>
//     </main>
//   );
// };
