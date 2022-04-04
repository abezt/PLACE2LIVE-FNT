import {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Counter(url){
    useEffect( ()=>{
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(url);
        const items = await data.json();
        setItems(items);
    };

    return items
}

function Handler(url){
    const items = Counter(url);
    return items;
}

export default Handler
