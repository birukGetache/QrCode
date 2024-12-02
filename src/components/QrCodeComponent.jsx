import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Ensure this package is installed
//output-onlinepngtools.png
const QrCodeComponent = () => {
  const [value, setValue] = useState('https://kiko-five.vercel.app/');

  return (
    <div className="qr-code-container">
      <h1 style={{color:"black" , fontFamily:"cursive" , textAlign:"center" , fontSize:"42px"}}>Kiko Restorant </h1>
     
      {/* <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text or URL"
        className="input-field"
        style={{textAlign:"center"}}
      /> */}
      <div className="qr-code-wrapper">
        <QRCode
          value={value}
          size={256} // Size of the QR code
          level="H" // Error correction level (L, M, Q, H)
          includeMargin={true} // Include margin around the QR code
          style={{borderRadius:"50px"}}
        />
        {/* <img
          src="/hulus.jpg" // Make sure the image path is correct
          alt="Logo"
          className="qr-code-image"
        /> */}
        
      </div>
      <h2 style={{color:"black" , fontFamily:"cursive"}}>scan to view our menu</h2>
    </div>
  );
};

export default QrCodeComponent;
