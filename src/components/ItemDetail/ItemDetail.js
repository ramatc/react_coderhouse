import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [cart, setCart]= useState(true);
    
    const {id, name, img, description, price, stock} = item;

    const handleOnAdd = (count) => {
        alert(`Gracias por la compra de ${count} ${name}`);
        setCart(false);
    }

    return (
        <div key={id}>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <h3>{description}</h3>
            <p>${price}</p>
            {cart 
                ? 
                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/> 
                : 
                <Link to="/cart">Ir al carrito</Link>
            }
            <br/>
            <Link to="/">Volver al home</Link>
        </div>
    )
}

export default ItemDetail;
