import axios from "axios"
import React, {useState,useEffect, useRef} from 'react';
import './Products.css'
import { Link, useNavigate } from 'react-router-dom';
import {useLocation} from "react-router-dom"
function Products(){
var input;
const navigate = useNavigate();
const[dataTable,setdata]=useState([])

useEffect(()=>{
    async function fetchData(input){
        try{
           
                const response =await axios.get("https://fakestoreapi.in/api/products")
                setdata(response.data.products)
                console.log(response.data.products[1]) 
           
                if(input){
                    const response =await axios.get(`https://fakestoreapi.in/api/products/category?type=${input}`)
                setdata(response.data.products)
                console.log(response.data.products[1]) 
                }
        }
        catch(error){
            console.error(error);
        }
    }
    fetchData();
}, []);
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
const inputRef = useRef();
// const inputValue = inputRef.current.value;
// const search = () => {
//     const inputValue = inputRef.current.value;
//     console.log('Input value:', inputValue);
//     navigate(`./product${inputValue}`, {state:{name: inputValue}})
//   }
const inputValue = "mobile"
    return(
        <>
        <div>
            <label>Search <input type="text" placeholder="" ref={inputRef} ></input></label>
          
            <Link to={`/Products/${inputValue}`} ><button>Go</button></Link>
        </div>
        <h1>Results</h1>
        <h5>Check each product page for other buying options.</h5>
        <div>
            <table>
               
                 {dataTable.map((item)=>(
                    <tr key={item.id}>
                    <td id="image"> <img src={item.image}></img></td>
                    <td id="details">
                        <a href=""><h1>{item.brand}, {item.model}, {item.color} color, {item.discount}%</h1></a>
                        <h4>{item.title}</h4>
                        <div><span class="price">${item.price} </span> <span><Amount PR={item.price} DS={item.discount}/></span> <span class="discount">{item.discount}% OFF</span>  </div>
                        <p>{item.description}</p>
                        
                        <button onClick={()=>{navigate('/cart', {state:{name: item}})}}>Add to card</button>

                    </td>
                </tr>
                ))}  
                
            </table>
        </div>
        </>
    )

}
export default Products