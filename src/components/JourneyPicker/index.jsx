import React, { useEffect, useState } from "react";
import "./style.css";

/**
 * Komponenta `CityOptions` očekává props `cities`, což má být pole objektů, každý objekt v poli
 * má obsahovat property `code` a `name`.
 *
 * Např.:
 * [
 *   {name: "Plzeň", code: "PL"},
 *   {name: "České Budějovice", code: "CB"}
 * ]
 */
const CityOptions = ({ cities }) => {
  return cities.map((city) => (
    <option key={city.code} value={city.code}>
      {city.name}
    </option>
  ));
};
const DatesOptions = ({ dates }) => {
  return dates.map((date) => (
    <option key={date.dateBasic} value={date.dateBasic} datcs={date.dateCs}>
      {date.dateCs}
    </option>
  ));
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const resp = await fetch(
        "https://apps.kodim.cz/daweb/leviexpress/api/cities"
      );
      if (!resp.ok) {
        alert(
          "Něco je špatně, nepodařilo se načíst seznam měst. Dejte si kafe a pak to zkuste znova."
        );
        return;
      }
      const data = await resp.json();
      setCities(data.results);
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      const resp = await fetch(
        "https://apps.kodim.cz/daweb/leviexpress/api/dates"
      );
      if (!resp.ok) {
        alert(
          "Něco je špatně, nepodařilo se načíst seznam časů spojů. Dejte si kafe a pak to zkuste znova."
        );
        return;
      }
      const data = await resp.json();
      setDates(data.results);
    };

    fetchDates();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO
    console.log(
      `Uživatel chcete objednat jízdenku z ${fromCity} do ${toCity} na ${date}.`
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(event) => setFromCity(event.target.value)}
            >
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(event) => setToCity(event.target.value)}
            >
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(event) => setDate(event.target.value)}
            >
              <option value="">Vyberte</option>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
// import React, { useEffect, useState } from "react";
// import "./style.css";

// const CityOptions = ({ cities }) => {
//   return cities.map((city) => (
//     <option key={city.code} value={city.code}>
//       {city.name}
//     </option>
//   ));
// };

// export const JourneyPicker = ({ onJourneyChange }) => {
//   const [fromCity, setFromCity] = useState("");
//   const [toCity, setToCity] = useState("");
//   const [date, setDate] = useState("");
//   const [cities, setCities] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault()

//   useEffect(() => {
//     const fetchCities = async () => {
//       const resp = await fetch("https://apps.kodim.cz/daweb/leviexpress/api/cities");
//       if(!resp.ok){
//         alert("Něco je špatně")
//         return
//       }
//       const data = await resp.json()
//       setCities(data.results)
//     };
//     fetchCities()
//   }, []);

//   return (
//     <div className="journey-picker container">
//       <h2 className="journey-picker__head">Kam chcete jet?</h2>
//       <div className="journey-picker__body">
//         <form onClick={handleSubmit} className="journey-picker__form">
//           <label>
//             <div className="journey-picker__label">Odkud:</div>
//             <select value={fromCity} onChange={(e) => {setFromCity(e.target.value)}}>
//               <option value="">Vyberte</option>
//               <CityOptions cities={cities} />
//             </select>
//           </label>
//           <label>
//             <div className="journey-picker__label">Kam:</div>
//             <select value={toCity} onChange={(e) => {setToCity(e.target.value)}}>
//               <option value="">Vyberte</option>
//               <CityOptions cities={cities} />
//             </select>
//           </label>
//           <label>
//             <div className="journey-picker__label">Datum:</div>
//             <select value={date} onChange={(e) => {setDate(e.target.value)}}>
//               <option value="">Vyberte</option>
//               <option value="datum01">Datum 01</option>
//               <option value="datum02">Datum 02</option>
//               <option value="datum03">Datum 03</option>
//               <option value="datum04">Datum 04</option>
//               <option value="datum05">Datum 05</option>
//             </select>
//           </label>
//           <div className="journey-picker__controls">
//             <button className="btn" type="submit">
//               Vyhledat spoj
//             </button>
//           </div>
//         </form>
//         <img className="journey-picker__map" src="/map.svg" />
//       </div>
//     </div>
//   );
// };
// }
