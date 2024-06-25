import {useLocation} from "react-router-dom"
import axios from "axios"
import React, {useState,useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css'
function Cart(){
    const location =useLocation();
    console.log(location.state)
    const product= location.state.name
   console.log(product.id)
   const navigate = useNavigate();

   var PR, DS
function Amount(Value){
    var amt;

amt=Value.PR + (Value.PR*Value.DS/100)

return(
    <>
    <span>M.R.P: </span>
    <span class="Amount">${Math.floor(amt)}</span>
    </>
    
)
}

const[dataTable,setdata]=useState([])

useEffect(()=>{
    async function fetchData(){
        try{
            const response =await axios.get("https://fakestoreapi.in/api/products?limit=10")
            setdata(response.data.products)
            console.log(response.data.products[1]) 
        }
        catch(error){
            console.error(error);
        }
    }
    fetchData();
}, []);

  
return(
    <>
        <span ><img src ={product.image} ></img></span>
        <span><Link to={`/cart/${product.id}`} ><button>add to cart</button></Link></span>
        <span id= "choosen">
            <h1>{product.brand}, {product.model}, {product.color} color, {product.discount}%</h1>
            <h4>{product.title}</h4>
                        <div><span class="price">${product.price} </span> <span><Amount PR={product.price} DS={product.discount}/></span> <span class="discount">{product.discount}% OFF</span>  </div>
                        <p>{product.description}</p>
                        
        </span>
<hr></hr>
        <h2>Related products with free delivery on eligible orders</h2>
        <table>
               
               {dataTable.map((item)=>(
                  <tr key={item.id}>
                  <td id="image"> <img src={item.image}></img></td>
                  <td id="details">
                      <a href=""><h1>{item.brand}, {item.model}, {item.color} color, {item.discount}%</h1></a>
                      <h4>{item.title}</h4>
                      <div><span class="price">${item.price} </span> <span><Amount PR={item.price} DS={item.discount}/></span> <span class="discount">{item.discount}% OFF</span>  </div>
                      <p>{item.description}</p>
                      
                      <a href=""> <button onClick={()=>{navigate('/cart', {state:{name: item}})}}>Add to card</button></a>

                  </td>
              </tr>
              ))}  
              
          </table>
          
    </>
)
}
export default Cart