import{useParams} from 'react-router-dom'
export const ReservationPage =()=>{
    const {id} = useParams()
     const [reservation, setReservation]=useState(null)
    //  useEffect(()=>{
    //     const fetchReservation = async()=>{
    //         const resp = await fetch (''{id})
    //     if(!resp.ok){
    //         alert('nenačteno,soráč!')
    //     return
    //     }
    //     const data = await resp.json()
    //     setReservation(data.results)
    //     }
    //     fetchReservation()
    //  })
  return(
    <div class="reservation container">
    <h2>Vaše e-jízdenka č. {id}</h2>
    <div class="reservation__body">
      <div class="reservation__headings">
        <p>Datum cesty:</p>
        <p>Odjezd:</p>
        <p>Příjezd:</p>
        <p>Sedadlo:</p>
      </div>
      <div class="reservation__info">
        {/* <p>{reservation.date}</p>
        <p>{{reservation.fromCity.name},{reservation.fromCity.time}}</p>
        <p>{{reservation.toCity.name},{reservation.toCity.time}}</p>
        <p>{reservation.seatNumber}</p> */}
      </div>
    </div>
  </div>
  )
}