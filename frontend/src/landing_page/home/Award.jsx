import React from 'react';

export default function Award() {
  return (
    <div className="container mt-5 mb-5 overflow-hidden">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img className="img-fluid" src="/media/images/largestBroker.svg" alt="Largest Broker" />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h1 className="fs-2 mb-3">Largest Stock Broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          {/* Trading Categories */}
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="text-center mt-4">
            <img className="img-fluid" src="/media/images/pressLogos.png" alt="Press Logos" />
          </div>
        </div>
      </div>
    </div>
  );
}
