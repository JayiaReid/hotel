import '../Pages/Reviews.css'
export default function Review(props){

    return(
        <div className="review">
            <h2>"{props.title}"</h2>
            <p><span className='review_p_t'>Pros:</span> {props.pros}</p>
            <p><span className='review_p_t'>Cons:</span> <br/> {props.cons}</p>
        </div>
    )
}