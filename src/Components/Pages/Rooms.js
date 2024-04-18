import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import './Hotel.css'
import './Room.css'
import Photos from "../Components/Photos";

export default function Rooms(props){
    const {hotel_id} = useParams();
    const {name} = useParams();
    // const childrenNum=useState(0);
    const [info, haveInfo]=useState(false);
    const [rooms, setRooms]=useState([]);

    const fetchData = () =>{
        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=${hotel_id}&locale=en-gb`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "booking-com.p.rapidapi.com",
                "x-rapidapi-key": "8292f7d216mshbffd0920d41e1dfp111efejsnad0ff7647a13"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setRooms(data)
        }).catch(err => {
            console.error(err);
            });
    }

    //room slideshow
    const [activeIndex, setActiveIndex]=useState(0)
    const handleLeftArrowClick = () => {
        setActiveIndex(prevIndex => (prevIndex - 1 + rooms.length) % rooms.length);
    
      };
      
      const handleRightArrowClick = () => {
        setActiveIndex(prevIndex => (prevIndex + 1) % rooms.length);
      };
    
    useEffect(()=>{
        fetchData();
    })
    

    return (
        <div id="room_page" className="hotel_page">
            <header>
                <nav>
                    <Link className="hotel_nav" to='/'>Home</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}`} >Overview</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/reviews`}>Reviews</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/rooms/book`}>Book</Link>
                    {/* <Link className="hotel_nav" to={`hotel/${hotel_id}/${name}/questions`}>Nearby Places</Link>
                    <Link className="hotel_nav" to={`hotel/${hotel_id}/${name}/nearby-places`}>Questions</Link> */}
                </nav>
                <div className="hote_h1">
                    <h1>{name}</h1>
                    <button><Link to={`/hotel/${hotel_id}/${name}/rooms/book`} className="hote_link">Book a room</Link></button>
                </div>
            </header>
            
                <div id="rooms_shown" className="dark">
                    <div className="controls">
                        <button id="prev" onClick={handleLeftArrowClick}>&larr;</button>
                        <button id="next" onClick={handleRightArrowClick}>&rarr;</button>
                    </div>
                    <h1>Photos of Hotel</h1>
                    {rooms.map((item, index)=>(
                        <Photos key={index}
                        url={item.url_max}
                        isActive={index === activeIndex}/>
                    ))}
                </div>
        </div>
    )
}