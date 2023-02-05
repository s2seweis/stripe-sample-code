import React, { useState } from 'react';

import { BrowserRouter as Switch, Route } from 'react-router-dom'
import PaymentForm from './PaymentForm'


import Confirmation from './Confirmation';
import CheckoutForm from './CheckoutForm';




const Router = () => {
    return (
        <Switch>


            <Route path="/" exact>
                <PaymentForm />
            </Route>

            <Route path="/confirmation" exact>
                <Confirmation />
            </Route>

            
            <Route path="/checkout-form" exact>
                <CheckoutForm/>
            </Route>
            
        </Switch>
    )
}

export default Router;