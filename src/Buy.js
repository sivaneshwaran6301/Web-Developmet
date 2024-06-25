import { useParams } from 'react-router-dom';
import axios from "axios"
import React, {useState,useEffect} from 'react';
import './Buy.css';
import { Link, useNavigate } from 'react-router-dom';

function Buy(){
    const navigate = useNavigate();
    const { productId } = useParams();
    console.log(productId)
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

    const[dataproduct,setdata]=useState([])
useEffect(()=>{
    async function fetchData(){
        try{
            const response =await axios.get(`https://fakestoreapi.in/api/products/${productId}`)
            setdata(response.data.product)
            console.log(response.data.product) 
        }
        catch(error){
            console.error(error);
        }
    }
    fetchData();
}, []);


    return(
        <>
        <h1 id='order'> order completed successfully!</h1>
        <span ><img src ={dataproduct.image} ></img></span>
        <span id= "choosen">
            <h1>{dataproduct.brand}, {dataproduct.model}, {dataproduct.color} color, {dataproduct.discount}%</h1>
            <h4>{dataproduct.title}</h4>
                        <div><span class="price">${dataproduct.price} </span> <span><Amount PR={dataproduct.price} DS={dataproduct.discount}/></span> <span class="discount">{dataproduct.discount}% OFF</span>  </div>
                        <p>{dataproduct.description}</p>
        </span>
        <button onClick={()=>{navigate('/Products')}}>Shop more</button>
        </>
    )
}
export default Buy