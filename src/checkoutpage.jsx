import React from 'react';

const CheckoutPage = () => {
  const handleCheckout = async () => {
    try {
      console.log('Sending request to backend...');
      const res = await fetch('https://backend-only-q2zx5uxyh-beingscorppp.vercel.app/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);

      if (data.url) {
        console.log('Redirecting to:', data.url);
        // window.location.href = data.url;
        window.location.assign(data.url);

      } else {
        console.error('No URL in response:', data);
      }
    } catch (err) {
      console.error('Error creating checkout session', err);
    }
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Buy Product</h1>
      <button onClick={handleCheckout} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Pay $49
      </button>
    </div>
  );
};

export default CheckoutPage;
