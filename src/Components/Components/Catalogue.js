// import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import introimg from '../../assets/landing.jpg'
import { Link } from 'react-router-dom';
// import './Home.css'

export default function Catalogue(props){
    const [list, setList]=useState([]);
    const [filter, SetFilter]=useState('')

    const fetchData = async ()=>{
        fetch("https://booking-com.p.rapidapi.com/v1/static/hotels", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": "8292f7d216mshbffd0920d41e1dfp111efejsnad0ff7647a13"
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const { result } = data;
            setList(result)
        })
        .catch(err => {
        console.error(err);
        });

    }
    useEffect(()=>{
        
        fetchData()
        SetFilter(props.filter);
    
    },[props.filter]);
    
        

    return(
        <div id='hotel_c'>
            <ul>
              {list?.map((item, index)=>(
                item.name.toLowerCase().includes(props.search.toLowerCase()) && item.city_id==props.filter? 
                     <Link className='hotel' to={`/hotel/${item.hotel_id}`}>
                        <div>
                            <h3 key={index}>{item.name}</h3>
                            {/* <p>City: {item.city}</p> */}
                        </div>
                    </Link>
                : null
            ))}  
            </ul>
            
        </div>
    );

}