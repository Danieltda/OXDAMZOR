import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ETHcalc.css';

// EthereumBalanceChecker component
const EthereumBalanceChecker = () => {
  const [ethereumAddress, setEthereumAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [historicalBalances, setHistoricalBalances] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load historical balances from local storage on component mount
    const storedBalances = JSON.parse(localStorage.getItem('historicalBalances')) || [];
    setHistoricalBalances(storedBalances);
  }, []);

  const getEthereumBalance = async () => {
    // Validate Ethereum address format
    if (!/^(0x)?[0-9a-fA-F]{40}$/.test(ethereumAddress)) {
      setError('Please enter a valid Ethereum address.');
      return;
    }

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
        const newBalance = parseFloat(data.result) / 1e18;
        setBalance(newBalance);

        // Update historical balances
        const newHistoricalBalances = [...historicalBalances, { address: ethereumAddress, balance: newBalance }];
        setHistoricalBalances(newHistoricalBalances);
        localStorage.setItem('historicalBalances', JSON.stringify(newHistoricalBalances));

        // Clear error on successful balance retrieval
        setError('');
      } else {
        setError(`Error: ${data.message}`);
      }
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    }
  };

  const handleRemove = (index) => {
    const updatedHistoricalBalances = [...historicalBalances];
    updatedHistoricalBalances.splice(index, 1);
    setHistoricalBalances(updatedHistoricalBalances);
    localStorage.setItem('historicalBalances', JSON.stringify(updatedHistoricalBalances));

    // Reset current balance to null when all historical balances are removed
    if (updatedHistoricalBalances.length === 0) {
      setBalance(null);
    }
  };

  const calculateTotalHistoricalBalance = () => {
    return historicalBalances.reduce((total, entry) => total + entry.balance, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getEthereumBalance();
  };

  return (
    <div id="bottomSection" className="ethereum-balance-checker">
      <form onSubmit={handleSubmit}>
        <label id="about-me"htmlFor="ethereumAddress">Enter Ethereum Address:</label>
        <input
          type="text"
          id="ethereumAddress"
          placeholder="Please fill in your Ethereum Address"
          value={ethereumAddress}
          onChange={(e) => {
            setEthereumAddress(e.target.value);
            // Clear error when user starts typing
            setError('');
          }}
        />
        <button type="submit">Check Balance</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {balance !== null && (
        <p>
          Balance of {ethereumAddress}: {balance} ETH
        </p>
      )}

      {historicalBalances.length > 0 && (
        <div>
          <h2>Historical Balances:</h2>
          <ul>
            {historicalBalances.map((entry, index) => (
              <li key={index}>
                {entry.address}: {entry.balance} ETH
                <button onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Historical Balance: {calculateTotalHistoricalBalance()} ETH</p>
        </div>
        
      )}
    </div>
    
  );
  
};

export default EthereumBalanceChecker;
