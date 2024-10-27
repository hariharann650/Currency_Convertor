import React, { useEffect, useState } from "react";
import "./currency.css";
import axios from "axios";
import img from "./assets/pexels-davidmcbee-730547.jpg";
const Currency = () => {
  const [amount, setAmount] = useState("");
  const [tocurrency, setTocurrency] = useState("USD");
  const [fromcurrency, setFromcurrency] = useState("INR");
  const [finalamount , setFinalamount] = useState(null);
  const [veryfinal,setVeryfinal]= useState(null);
 
useEffect(()=>{
  const converting = async () => {
    try {
      const url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
      const getting = await axios.get(url);
      setFinalamount(getting.data.rates[tocurrency]);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  converting();
},[tocurrency,fromcurrency]);

useEffect(()=>{
  if(finalamount != null){
    setVeryfinal((amount * finalamount).toFixed(2));
  }
},[amount,finalamount])
  const amounting = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };
  const fromcurrencysetting = (e)=>{
    setFromcurrency(e.target.value);
  }
  const tocurrencysetting = (e)=>{
    setTocurrency(e.target.value);
  }
  return (
    <>
      <div className="main-div">
        <img className="currency-img" src={img} alt="" />
        <div className="main-text">CURRENCY CONVERTER</div>
        <label htmlFor="amountdiv-input" className="amountdiv">
          Amount
        </label>
        <input
          type="text"
          value={amount}
          onChange={amounting}
          id="amountdiv-input"
          placeholder="Enter the Amount"
        />
        <div className="fromdiv">
          <label htmlFor="fromcurrency">From Currency</label>
          <select
            name=""
            id="fromcurrency"
            value={fromcurrency}
            onChange={fromcurrencysetting}
          >
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinse Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className="todiv">
          <label htmlFor="tocurrency">TO Currency</label>
          <select name="" id="tocurrency" onChange={tocurrencysetting}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinse Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className="result">
          {amount} {fromcurrency} is Equal to {veryfinal} {tocurrency}</div>
      </div>
    </>
  );
};

export default Currency;
