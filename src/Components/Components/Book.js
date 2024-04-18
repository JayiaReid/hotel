import '../Pages/Hotel.css'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Pages/Room.css'

export default function Book(){
    const [checkin_date, setCheckIn]= useState('');
    const [checkout_date, setCheckOut] = useState('');
    const [firstName, setFirstName]=useState('');
    const [lastname, setLastname]=useState('');
    const [adultNum, setAdultNum]=useState('');
    const [childrenNum, setChildrenNum]=useState(0);
    const{hotel_id}=useParams();
    const {name}=useParams();
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(adultNum==isNaN || childrenNum==isNaN){
            alert("Invalid");
        }
        else{
            const result = window.confirm("Confirm Booking?");
            if (result) {
                alert("An email from the hotel regarding selecting rooms will be sent upon processing booking.");
            }
        }
    }
    return(
        <div id="book_page" className='hotel_page'>
            <header>
                <nav>
                    <Link className="hotel_nav" to='/'>Home</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}`} >Overview</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/reviews`}>Reviews</Link>
                    <Link className="hotel_nav" to={`/hotel/${hotel_id}/${name}/rooms`}>Rooms</Link>
                    {/* <Link className="hotel_nav" to={`hotel/${hotel_id}/${name}/questions`}>Nearby Places</Link>
                    <Link className="hotel_nav" to={`hotel/${hotel_id}/${name}/nearby-places`}>Questions</Link> */}
                </nav>
                <div className="hote_h1">
                    <h1><u>Book</u> {name} Today!</h1>
                </div>
            </header>
            <div id="book" className="dark">
                <h1>First Choose Booking Period</h1>
                <form onSubmit={handleSubmit}>
                <div className='date_form'>
                    <label htmlFor="check-in"> Check-In Date</label>
                    {/* <br/> */}
                    <input
                        type="date"
                        name="check-in"
                        onChange={(e)=>setCheckIn(e.target.value)}
                        required
                    />
                    {/* <br/> */}
                    <label htmlFor="check-out">Check-out Date</label>
                    {/* <br/> */}
                    <input
                        type="date"
                        name="check-out"
                        onChange={(e)=>setCheckOut(e.target.value)}
                        required
                    />
                    {/* <br/> */}
                    
                </div>
                <h1>Enter Additional Details</h1>
                <div className='details_form'>
                    <input type='text' 
                    placeholder='Enter First Name'
                    onChange={(e)=>setFirstName(e.target.value)}
                    required/>
                    <br/>
                    <input type='text' 
                    placeholder='Enter Last Name'
                    onChange={(e)=>setLastname(e.target.value)}
                    required/>
                    <br/>
                    <input type='text'
                    placeholder='Enter number of adults'
                    onChange={(e)=>setAdultNum(e.target.value)}
                    required/>
                    <br/>
                    <input type='text'
                    placeholder='Enter number of adults'
                    onChange={(e)=>setChildrenNum(e.target.value)}
                    required/>
                    <br/>
                    <button type="submit">Book with Hotel</button>
                </div>
                </form>
                </div>
        </div>
    )
}