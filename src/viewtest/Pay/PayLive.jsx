// import React from "react";
// import "./PayLive.css";
// import request from "request";
// import moment from "moment";
// import crypto from "crypto";
// import querystring from 'qs';
// const PayLive = () => {
//   const handlePayment = (event) => {
//     event.preventDefault();

//     const amount = parseFloat(document.getElementById('amount').value);
//     const bankCode = document.querySelector('input[name="bankCode"]:checked').value;

//     const config = {
//       vnp_TmnCode: "B3L2CTJE",
//       vnp_HashSecret: "CCGDZQJSYAKYSKALFEVYOMMTYAWPSVBS",
//       vnp_Url: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
//       vnp_Api: "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction",
//       vnp_ReturnUrl: "http://localhost:3000/tkanks"
//     };
//     // let ipAddr = request.headers['x-forwarded-for'] ||
//     // request.connection.remoteAddress ||
//     // request.socket.remoteAddress ||
//     // request.connection.socket.remoteAddress;
//     let date = new Date();
//     let createDate = moment(date).format('YYYYMMDDHHmmss');
//     let tmnCode = config.vnp_TmnCode;
//     let secretKey = config.vnp_HashSecret;
//     let vnpUrl = config.vnp_Url;
//     let returnUrl = config.vnp_ReturnUrl;
//     let vnpApi = config.vnp_Api;
//     let orderId = moment(date).format('DDHHmmss');
//     let locale = request.body.language;
//     if(locale === null || locale === ''){
//         locale = 'vn';
//     }
//     let currCode = 'VND';
//     let vnp_Params = {};
//     vnp_Params['vnp_Version'] = '2.1.0';
//     vnp_Params['vnp_Command'] = 'pay';
//     vnp_Params['vnp_TmnCode'] = tmnCode;
//     vnp_Params['vnp_Locale'] = locale;
//     vnp_Params['vnp_CurrCode'] = currCode;
//     vnp_Params['vnp_TxnRef'] = orderId;
//     vnp_Params['vnp_OrderInfo'] = 'XeTotDaNang:' + orderId;
//     vnp_Params['vnp_OrderType'] = 'other';
//     vnp_Params['vnp_Amount'] = amount * 100;
//     vnp_Params['vnp_ReturnUrl'] = returnUrl;
//     // vnp_Params['vnp_IpAddr'] = ipAddr;
//     vnp_Params['vnp_CreateDate'] = createDate;
//     if(bankCode !== null && bankCode !== ''){
//         vnp_Params['vnp_BankCode'] = bankCode;
//     }

//     vnp_Params = sortObject(vnp_Params);


//     let signData = querystring.stringify(vnp_Params, { encode: false }); 
//     let hmac = crypto.createHmac("sha512", secretKey);
//     let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex"); 
//     vnp_Params['vnp_SecureHash'] = signed;
//     vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
  
//       window.location.href = vnpUrl;
//   };

//   return (
//     <div className="">
//       <form className="form-Vnpay-content-atm" onSubmit={handlePayment}>
//         <input
//           className="form-control"
//           id="amount"
//           name="amount"
//           placeholder="Số tiền"
//           required
//           type="number"
//         />
//         <div className="form-group">
//           <div className="controls">
//             <input
//               type="radio"
//               name="bankCode"
//               value="VNPAYQR"
//               required
//             />
//           </div>
//         </div>
//         <button className="btn btn-default" type="submit">
//           Thanh toán
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PayLive;
