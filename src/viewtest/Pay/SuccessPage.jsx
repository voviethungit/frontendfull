import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vnpAmount = queryParams.get("vnp_Amount");
    const vnpTxnRef = queryParams.get("vnp_TxnRef");
    const userId = queryParams.get("userId");

    if (vnpAmount && vnpTxnRef && userId) {
      axios.post('http://localhost:5000/update_balance', {
        userId: userId,
        amount: vnpAmount / 100, 
      })
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error);

      });
    }
  }, [location.search]);

  return (
    <div>
      <h1>Success Page</h1>
    </div>
  );
};

export default SuccessPage;
