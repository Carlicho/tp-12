import React, { useState } from "react";

export default function Movies(props) {

    const [count, setCount] = useState(1)

    const myList = props.data.map( (element) => {
        return ( <h2> { element } </h2> )
    } );

    const transformedChildren = props.children.map ( (element) => {
        return ( <ul><li> { element } </li></ul>)
    } );

    return ( <>
        <button
        { transformedChildren.slice(0, count)}
        { myList }  
        
        </> );
}