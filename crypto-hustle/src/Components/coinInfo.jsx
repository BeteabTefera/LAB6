import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    getCoinPrice().catch(console.error);
  },[symbol]);

  const getCoinPrice = async () =>{
    const response = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=`+API_KEY
    );
    const json = await response.json();
    setPrice(json)
}

  return(
        <div className="list-container">
            {price ? ( // rendering only if API call actually returned us data
                <li className="main-list" key={symbol}>
                    <img
                    className="icons"
                    src={`https://www.cryptocompare.com${image}`}
                    alt={`Small icon for ${name} crypto coin`}
                    />
                {name} <span className="tab"></span> ${price.USD} USD
              </li>
            ) : null
            }

        </div>

    );

};

export default CoinInfo;