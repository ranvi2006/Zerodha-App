import React from 'react';

export default function Footer() {
  return (
    <div className="container-fluid" style={{ padding: "80px 20px" }}>
      <div className="row">
        {/* Left Section */}
        <div
          className="col-9"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          <p className="mb-1" style={{ color: "gray" }}>
            Varsity by Zerodha © 2015 – 2025. All rights reserved. Reproduction
            of the Varsity materials, text, and images, is not permitted. For
            media queries, contact
          </p>
          <a
            style={{ textDecoration: "none" }}
            href="mailto:press@zerodha.com"
          >
            press@zerodha.com
          </a>
        </div>

        {/* Right Section */}
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img width="50%" src="/media/images/appstoreBadge.svg" alt="App Store" />
          &nbsp;&nbsp;&nbsp;
          <img width="50%" src="/media/images/googlePlayBadge.svg" alt="Google Play" />
        </div>
      </div>
    </div>
  );
}

