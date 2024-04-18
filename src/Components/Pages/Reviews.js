import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Reviews.css'
import './Hotel.css';
import { useState, useRef } from "react";
import Review from "../Components/Review";

export default function Reviews(){
    const {hotel_id} = useParams();
    const {name} = useParams();
    const [reviews, setReviews]=useState([]);
    const [display,ShowDisplay ]=useState(false);
    const pageRef = useRef(null);

    const fetchData = async ()=>{

        fetch(`https://booking-com.p.rapidapi.com/v1/hotels/reviews?locale=en-gb&sort_type=SORT_MOST_RELEVANT&hotel_id=${hotel_id}&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=en-gb%2Cde%2Cfr`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "booking-com.p.rapidapi.com",
                "x-rapidapi-key": "8292f7d216mshbffd0920d41e1dfp111efejsnad0ff7647a13"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const {result} =data;
            setReviews(result);
        });

    }

        const showReviews=()=>{
            fetchData()
            if (pageRef.current) {
                pageRef.current.style.height = 'auto';
            }
            ShowDisplay(true);
        }

    return (
        <div id="reviews_page" ref={pageRef} className="hotel_page">
            <header>
                <nav>
                    <Link className="hotel_nav" to='/'>Home</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}`} >Overview</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/rooms`}>Rooms</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/rooms/book`}>Book</Link>
                    {/* <Link className="hotel_nav" to={`hotel/${hotel_id}/questions`}>Nearby Places</Link>
                    <Link className="hotel_nav" to={`hotel/${hotel_id}/nearby-places`}>Questions</Link> */}
                </nav>
                <div className="hote_h1">
                    <h1>{name}</h1>
                    <button style={{color: "white"}} onClick={showReviews}>Show Reviews</button>
                </div>
            </header>
           {display && 
           <div className="reviews_s">
           <h1>Reviews</h1>
                <div className=" reviews">
                    
                    {reviews.map((item, index)=>(
                        <Review key={index} title={item.title} pros={item.pros} cons={item.cons} />
                    ))}
                </div>
                </div>
            }
        </div>
        
    )
}