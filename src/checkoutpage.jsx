import React from 'react';

const CheckoutPage = () => {
  const [loading, setLoading] = React.useState(false);

    const handleCheckout = async () => {
    setLoading(true);
    try {
      console.log('Sending request to backend...');
      const res = await fetch('https://backend-only-eonx7e0cp-beingscorppp.vercel.app/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);

      if (data.url) {
        console.log('Redirecting to:', data.url);
        window.location.href = data.url;
      } else {
        console.error('No URL in response:', data);
      }
    } catch (err) {
      console.error('Error creating checkout session', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Buy Product</h1>
      <button 
        onClick={handleCheckout} 
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          fontSize: '18px',
          opacity: loading ? 0.7 : 1,
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Processing...' : 'Pay $49'}
      </button>
    </div>
  );
};

export default CheckoutPage;
