import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
  const location = useLocation();
  
  return (
    <div>
      <h1>Success Page</h1>
    </div>
  );
};

export default SuccessPage;
