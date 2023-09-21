import React from 'react'

const Payment = () => {
  return (
    <div>
    <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Payment Page</title>
    {/* Fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:200,600"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    />  
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        body{\n            background: #fff;\n            font-family: Nunito,sans-serif;\n            font-size: .9rem;\n            font-weight: 400;\n            line-height: 1.6;\n            color: #212529;\n        }\n        .form-control {\n            display: block;\n            height: 35px;\n            font-size: 14px;\n            width: 100%;\n            line-height: 35px;\n            padding: 0 10px;\n            border: solid 1px #cccccc !important;\n            border-radius: 2px !important;\n            outline: none !important;\n        }\n        .form-control:active, .form-control:active, .form-control:focus, .form-control:focus {\n            border-color: #3676C8 !important;\n        }\n        .element-label {\n            font-size: 13px;\n            font-weight: bold;\n            line-height: 2.5em;\n        }\n        .payment-form {\n            padding: 20px;\n            border: solid 1px #eaeaea;\n            border-radius: 4px;\n            background: #fbfbfb;\n        }\n        .paystack-color-bar {\n            height: 2px;\n            width: 100%;\n            z-index: 10;\n            position: fixed;\n            top: 0;\n            background: linear-gradient(to right, #44b669 0%, #09a5db 100%);\n            background: -webkit-linear-gradient(to right, #44b669 0%, #09a5db 100%);\n            background: -webkit-gradient(to right, #44b669 0%, #09a5db 100%);\n        }\n        .paystack-container .paystack-page .header .page-description {\n            margin: 20px 0 0;\n            padding: 0 15px;\n        }\n        .page-description {\n            font-size: 14px;\n        }\n        .header {\n            display: inline-block;\n            width: 100%;\n            margin: 30px 0;\n            text-align: center;\n        }\n        .header .page-name {\n            font-size: 18px;\n            font-weight: normal;\n            margin: 20px auto 0;\n            width: 80%;\n            line-height: 1.3;\n        }\n        .header .company-name {\n            color: #777;\n            margin: 5px auto 0;\n            font-size: 12px;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n        }\n        .paystack-footer {\n            width: 300px;\n            max-width: 100%;\n            font-size: 11px;\n            text-transform: uppercase;\n            margin: 40px auto;\n            text-align: center;\n            opacity: .7;\n            clear: both;\n        }\n        .paystack-footer img {\n            width: 200px;\n        }\n        "
      }}
    />
    <div className="paystack-color-bar" />
    <div className="container">
      <div className="row">
        <div className="col-md-5 offset-md-4">
          <div className="header">
            <div className="page-info">
              <h3 id="page-name" className="page-name">
                Disaster Relief Crowd Funding
              </h3>
              <p className="company-name">
                BY <span id="company-name">Durabyte Studio</span>
              </p>
            </div>
            <div className="page-description">
              <span id="page-description">
                Payment page for services rendered by the developer
              </span>
            </div>
          </div>
          <form id="paymentForm" className="payment-form">
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <div className="element-label">
                    <span>First Name</span>
                  </div>
                  <input type="text" id="first-name" className="form-control" />
                </div>
                <div className="col-md-6">
                  <div className="element-label">
                    <span>Last Name</span>
                  </div>
                  <input type="text" id="last-name" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="element-label">
                <span>Email</span>
              </div>
              <input type="text" id="email-address" className="form-control" />
            </div>
            <div className="form-group">
              <div className="row">
                
                <div className="col-md-6">
                  <div className="element-label">
                    <span>Amount to donate</span>
                  </div>
                  <input
                    type="text"
                    id="amountv"
                    onkeypress="return isNumber(event)"
                    className="form-control"
                  />
                  <input type="hidden" id="amount" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              
              <div className="float-right">
                <h6>Donate Now</h6>
                <h3 id="total" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  
    </div>
  )
}

export default Payment
