import { useEffect, useState } from "react"

const useCream = () =>{
    const [creams, setCreams] = useState([]);
    
    useEffect( () =>{
        fetch('creams.json')
        .then(res => res.json())
        .then(data => setCreams(data));
        
    }, []);
    return [creams, setCreams];
}
export default useCream;