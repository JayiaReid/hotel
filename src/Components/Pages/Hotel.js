
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import './Hotel.css'
import {Link} from 'react-router-dom'
import Facilities from "../Components/Facilities";

export default function Hotel(){

    const {hotel_id} = useParams();
    const [name, setName]=useState('hotel_name');
    const [address, setAddress]=useState('')
    const [url,setUrl]=useState('');
    const [review_score,setReviewScore]=useState(0);
    const [review_score_word,setReviewWord]=useState('');
    const [city,setCity]=useState('');
    const [currency, setCurrency]=useState('')  
    const [country,setCountry]=useState('')
    const [facilities, setFacilities]=useState([])
    const [photos, setPhotos]=useState([])
    const [descr, setDescr]=useState('');
    const [map, setMap]=useState('');

    const fetchData = async ()=>{

        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=${hotel_id}&locale=en-gb`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "booking-com.p.rapidapi.com",
                "x-rapidapi-key": "8292f7d216mshbffd0920d41e1dfp111efejsnad0ff7647a13"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const { address, 
                name, 
                url, 
                review_score,
                review_score_word,
                city,
                currency, 
                country
                } = data;
// location: [latitude, longitude]
                setName(name)
                setCity(city)
                setUrl(url)
                setReviewScore(review_score)
                setReviewWord(review_score_word)
                setCurrency(currency)
                setCountry(country)
                setAddress(address)
            
        })
        .catch(err => {
        console.error(err);
        });

        // Facilities of the Hotel
        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/facilities?hotel_id=${hotel_id}&locale=en-gb`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "booking-com.p.rapidapi.com",
                "x-rapidapi-key": "8292f7d216mshbffd0920d41e1dfp111efejsnad0ff7647a13"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setFacilities(data);
        })

        //description
        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/description?hotel_id=${hotel_id}&locale=en-gb`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "booking-com.p.rapidapi.com",
                "x-rapidapi-key": "8292f7d216mshbffd0920d41e1dfp111efejsnad0ff7647a13"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const {description}=data;
            setDescr(description)
        })

     }
     useEffect(()=>{
        
         fetchData()
        
    
     },[]);

    return(
        <div className="hotel_page">
            <header>
                <nav>
                    <Link className="hotel_nav" to='/'>Home</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/rooms`} >Rooms</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/reviews`}>Reviews</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/rooms/book`}>Book</Link>
                    {/* <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/questions`}>Nearby Places</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/nearby-places`}>Questions</Link> */}
                </nav>
                <div className="hote_h1">
                    <h1>{name}</h1>
                    <button><Link className='hote_link' to={`/hotel/${hotel_id}/${name}/rooms/book`}>Book a room</Link></button>
                </div>
            </header>
            <div className="description dark">
                <h1>Description of {name} </h1>
                <p>Located in the City of {city}, {country}, {name} is said to be {review_score_word}. The hotel is located at {address} </p>
                <p>{descr}</p>
            </div>
            <div className="facilities light">
                <h1>Facilites of {name}</h1>
                <Facilities list={facilities} id={1} type="General" />
                <Facilities list={facilities} id={2} type="Activities" />
                <Facilities list={facilities} id={3} type="Services" />
                <Facilities list={facilities} id={10} type="Ski" />
                <Facilities list={facilities} id={29} type="Miscellaneous" />
                <Facilities list={facilities} id={23} type="Reception Services" />
            </div>
        </div>
    )
}  
