import '../Pages/Hotel.css'
import Facility from './Facility'
export default function Facilites({list, id, type}){

    return(
        <div>
            <h3>{type}</h3>
            {/* prop drill into facility */}
                <div className="f_list">
                    {list.map((item, index)=>(
                        item.facilitytype_id===id?
                        <Facility index={index} id={id} facility_name={item.facility_name}/>:
                    null
                ))}
                </div>
        </div>
    ) 
}

