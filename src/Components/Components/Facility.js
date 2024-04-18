import '../Pages/Hotel.css'

export default function Facility(props){
    return(
        <li className='F_li' key={props.index} >
        {props.id}: {props.facility_name}
        </li>
    )
}