import "./style.css";
import { BusStop } from "../BusStop";

export const JourneyDetail = ({journey}) => {
    console.log('journey',journey.station)

  return (
    <div className="journey-detail container">
      <h3>Podrobnosti cesty</h3>
      <div className="stops">
        {journey.stops.map((stop)=>{
      return <BusStop key={stop.code} name={stop.name} station={stop.station} time={stop.time}/>})}
      </div>
    </div>
  );
};
