import React, { useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { IdealBankElement } from '@stripe/react-stripe-js';

import { withRouter } from 'react-router-dom';


// import './App.css';



const PaymentForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // Do something with the element.
        const cardElement = elements.getElement(CardElement);
        console.log('card', cardElement)
        console.log('stripe', stripe)

    }

    return (

        <>
            <h1 style={{ textAlign: "center" }}>Landing</h1>

            <form onSubmit={handleSubmit} id="payment-form">




                <div>

                    <a href="/confirmation">Route: /confirmation</a>

                </div>

                <div>

                    <a href="/checkout-form">Route: /checkout-form</a>

                </div>

                <div>

                    <a href="/payment-form">Route: /payment-form</a>

                </div>

               


            </form>

        </>
    )



}

export default withRouter (PaymentForm);