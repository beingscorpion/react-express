import React from 'react';

const CheckoutPage = () => {
  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:5000/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      window.location.href = data.url; // ✅ Redirects to Stripe Checkout
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
