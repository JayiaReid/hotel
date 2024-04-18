import React, { useEffect, useRef } from "react";

export default function Photos(props){

    const photoRef = useRef(null);

    useEffect(() => {
        if (props.isActive && photoRef.current) {
            photoRef.current.style.display = 'block';
        } else if (photoRef.current) {
            photoRef.current.style.display = 'none';
        }
    }, [props.isActive]);

    return (
        <img className='photos'  ref={photoRef} id={`${props.url}`} src={props.url} alt="Hotel photo"/>
    );
}
