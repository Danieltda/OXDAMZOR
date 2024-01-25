import React, { useState } from 'react';
import axios from 'axios';
import "./ETHcalc.css";

// EthereumBalanceChecker component
const EthereumBalanceChecker = () => {
  const [ethereumAddress, setEthereumAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const getEthereumBalance = async () => {
    const apiKey = process.env.API_KEY_ETHERSCAN;
    const apiUrl = 'https://api.etherscan.io/api';

    try {
      const response = await axios.get(apiUrl, {
        params: {
          module: 'account',
          action: 'balance',
          address: ethereumAddress,
          tag: 'latest',
          apikey: apiKey,
        },
      });

      const data = response.data;

      if (data.status === '1') {
        const balance = parseFloat(data.result) / 1e18;
        setBalance(balance);
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getEthereumBalance();
  };

  return (
    <div className="ethereum-balance-checker">
    <form onSubmit={handleSubmit}>
      <label htmlFor="ethereumAddress">Enter Ethereum Address:</label>
      <input
        type="text"
        id="ethereumAddress"
        placeholder="Please fill in your Ethereum Address"
        value={ethereumAddress}
        onChange={(e) => setEthereumAddress(e.target.value)}
      />
      <button type="submit">Check Balance</button>
      </form>

      {balance !== null && (
        <p>
          Balance of {ethereumAddress}: {balance} ETH
        </p>
      )}
    </div>
  );
};

export default EthereumBalanceChecker;

