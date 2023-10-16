import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Payment1 = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });

  const buttonStyles = {
    backgroundColor: 'grey',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleDonate = () => {
    // Send paymentInfo to the backend
    fetch('http://localhost:8080/payments/makePayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend (if needed)
        console.log('Payment response:', data);
        // You can perform additional actions here, such as showing a confirmation message.
      })
      .catch((error) => {
        console.error('Error making payment:', error);
        // Handle errors, e.g., display an error message to the user.
      });
  };

  return (
    <div>
    <>
    <title>Donating Hands</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
      crossOrigin="anonymous"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        .jumbotron {height: 10vh; background-color: grey;}\n        .header-text {color: white; font-size: 2.25em; font-weight: bold;}\n        .btn {white-space: normal;}\n        \n        #full-donation-form {padding: 0 0 5% 0;}\n        #submit-button {padding-bottom: 2%; padding-top: 1%;}\n        #gift-type {padding-bottom: 2%;}\n        #donation-info {padding-bottom: 2%;}\n        #donor-info {padding-bottom: 2%;}\n        #payment-info {padding-bottom: 2%;}\n        #payment-type {padding-bottom: 5%; padding-top: 3%;}\n        #payment-options {padding-bottom: 2%; padding-top: 1%;}\n    "
      }}
    />
    <header className="jumbotron" id="logo-header">
      <span className="header-text">Donating Hands</span>
    </header>
    <section className="container-payemnt">
      <div className="row">
        <div className="col-sm-12">
          <h1>Giving is the Greatest act of Grace</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            Your gift will help win justice on behalf of those who have no other
            champion, expose and fight the hate that thrives in our country, and
            provide tolerance education materials free of charge to schools across
            the nation.
          </p>
        </div>
      </div>
    </section>
    <div className="container-payment">
      <section className="container-payment" id="full-donation-form">
        <section id="menu">
          <div className="row">
            
          </div>
        </section>
      
        <section id="gift-type-description">
          <div className="row">
            <div className="col-sm-12">
              
            </div>
          </div>
        </section>
        <section id="donation-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>Donation Amount</h3>
            </div>
          
                <div className="col-sm-5">
                  <div className="input-group-amount">
                  <div className="input-group">
                    <span className="input-group-addon" id="btnGroupAddon">
                      Amount
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                      aria-describedby="btnGroupAddon"
                    />
                  </div>
                  </div>
                </div>
              </div>
            
          
        </section>
        <section id="donor-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>Donor Information</h3>
            </div>
           
              <div className="col-sm-8">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="SPLC"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              
              
            </div>
            
              <div className="col-sm-8">
                <div className="form-group row">
                  <label
                    htmlFor="example-email-input"
                    className="col-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="email"
                      defaultValue="emails@splcenter.org"
                      id="example-email-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
             
              
            </div>
            
              <div className="col-sm-8">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Country
                  </label>
                  <div className="col-10">
                    <select className="form-control" id="exampleSelect1">
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Address
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="123 Street Name"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          
        </section>
        <section id="payment-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>Payment Information</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12" id="payment-options">
              <a
                className=" col-md-2 col-sm-12 col-xs-12"
                
              >
                Credit/Debit Card
              </a>
              
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Card Number
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control text-muted"
                    type="tel"
                    defaultValue="5555-555-5555"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Expiration Date
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="month"
                    defaultValue="2011-08"
                    id="example-month-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Security Code
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control text-muted"
                    type="tel"
                    defaultValue="5555 or 555"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="summary">
          <div className="row">
            <div className="col-sm-12">
              <h3>Summary Confirmation</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                You are making a <strong>recurring monthly</strong> gift of{" "}
                <strong>$25.00</strong> by <strong>card</strong> to the Southern
                Poverty Law Center. After you review your information, please
                click "Donate Now" to process your gift. You will not be able to
                make changes to your donation on the next screen.
              </p>
            </div>
          </div>
          <div className="row" id="submit-button">
            <div className="col-md-6 col-sm-12 col-xs-12 mx-auto">
            <button style={buttonStyles}><Link to='/thank' style={{textDecoration:'none',color:'white'}}>Donate</Link></button>
            </div>
          </div>
        </section>
      
      </section>
      <Footer/>
    </div>
  </>
  
    </div>
  )
}

export default Payment1
