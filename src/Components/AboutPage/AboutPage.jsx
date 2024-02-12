import React from 'react';
import ReactDOM from 'react-dom';

function simulateSignMessage(message) {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous signMessage operation
    setTimeout(() => {
      // Simulating success
      resolve(`Signed: ${message}`);
      // Simulating failure
      // reject(new Error('Failed to sign message'));
    }, 1000);
  });
}

function ETHcalc() {
  const [signData, setSignData] = React.useState('');
  const [isSignError, setIsSignError] = React.useState(false);
  const [isSignLoading, setIsSignLoading] = React.useState(false);
  const [isSignSuccess, setIsSignSuccess] = React.useState(false);
  const isConnected = true; // Assuming connected for the sake of example

  const signMessage = async () => {
    setIsSignLoading(true);
    setIsSignError(false);
    setIsSignSuccess(false);
    try {
      const signedData = await simulateSignMessage('gm wagmi frens');
      setSignData(signedData);
      setIsSignSuccess(true);
    } catch (error) {
      setIsSignError(true);
    } finally {
      setIsSignLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button>Connect with MetaMask</button>
        {isConnected && (
          <>
            <div style={{ marginTop: 20 }}>
              <button disabled={isSignLoading} onClick={signMessage}>
                Sign message
              </button>
              {isSignSuccess && <div>Signature: {signData}</div>}
              {isSignError && <div>Error signing message</div>}
            </div>
          </>
        )}
      </header>
    </div>
  );
}

function App() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // Simulating asynchronous initialization
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  if (!ready) {
    return <div>Loading...</div>;
  }

  return <ETHcalc />;
}

ReactDOM.render(<App />, document.getElementById('root'));
