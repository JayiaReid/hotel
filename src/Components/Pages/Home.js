import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import introimg from '../../assets/landing.jpg'
import './Home.css'
import Catalogue from '../Components/Catalogue'
import { Link } from 'react-router-dom'

export default function Home(){
    const [searchInput, setSearchInput]=useState('');
    const [filterType, setFilterType]=useState(0);
    const [cities, setCities]=useState([])
    

     const fetchData = async ()=>{

        fetch("https://booking-com.p.rapidapi.com/v1/static/cities?country=ad&page=0", {
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
                
            // Loop through each item to get its title
            // result.forEach(result => {
            //     console.log(result.name);
            // });

            setCities(result)
        })
        .catch(err => {
        console.error(err);
        });


     }
     useEffect(()=>{
        
        // fetchData()
        
    
     },[]);
    
    

    return(
        <div id='home'>
            <header id='home_h'>
                <nav id='home_nav'>
                    {/* <Link className="hotel_nav" to='/Login'>Login/SignUp Page</Link> */}
                </nav>
                <div id='home_intro'>
                    <h1 id='h_h1'>Hotel Books</h1>
                    <p id='h_p' style={{color: "white"}}>Filter by city, select a hotel and go from there!</p>
                </div>
            </header>
            <div id='hotels'>
                <form>
                    <input 
                    type='text'
                    placeholder='Search Hotel' 
                    onChange={(e)=>setSearchInput(e.target.value)}/>
                    <select onChange={(e)=>setFilterType(e.target.value)}>
                    
                        <option value={null}>select city</option>
                    {cities.map((item, index)=>(
                        <option key={index} value={item.city_id}>{item.name}</option>
                    ))}
                
                    </select>
                </form>
                    <div id='catalogue'>
                        <Catalogue type={dest} search={searchInput} filter={filterType}/>
                    </div>
                    {!searchInput && !filterType && <p>No Search</p>}
                    {searchInput && !filterType && <p>No city selected</p>}
            </div>
            <div>

            </div>
            
        </div>
    );

}