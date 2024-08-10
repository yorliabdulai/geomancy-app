import React from 'react';
import Script from 'next/script';

const Checkout = ({ book, setDeliveryStatus }) => {
  const handlePayment = () => {
    const paystackHandler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: 'customer-email@example.com', // Replace with actual customer email
      amount: book.price * 100, // Amount in kobo (1 USD = 100 kobo)
      currency: 'GHS',
      callback: (response) => {
        setDeliveryStatus('Payment Successful');
        console.log(response);
      },
      onClose: () => {
        alert('Transaction was not completed.');
      },
    });
    paystackHandler.openIframe();
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Price: ${book.price}</p>
      <button onClick={handlePayment}>Pay with Paystack</button>
      <Script src="https://js.paystack.co/v1/inline.js" />
    </div>
  );
};

export default Checkout;
