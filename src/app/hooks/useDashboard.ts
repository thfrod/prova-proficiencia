import { useEffect, useState } from "react";
import { ENDPOINTS } from "../constants";
import { Dashboard } from "../types";
import { buildGetHeaders } from "./apiHelper";

export const UseDashboard = () => {
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [error, setError] = useState(false);
  const [dash, setDash] = useState<Dashboard>();
  const [sales, setSales] = useState([]);

  const getDashboard = async () => {
    const url = ENDPOINTS.dashboard;
    const header = buildGetHeaders();

    try {
      const response = await fetch(url, {
        headers: header,
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data: any = await response.json();
      setDash(data.data);
    } catch (error) {
      setError(true);
    }
  };

  const getSales = async () => {
    const url = ENDPOINTS.sales;
    const header = buildGetHeaders();

    try {
      const response = await fetch(url, {
        headers: header,
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data: any = await response.json();
      setSales(data.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);

  useEffect(() => {
    getSales();
  }, [startMonth, endMonth]);

  return {
    dash,
    sales,
    setStartMonth,
    setEndMonth,
    startMonth,
    endMonth,
    error,
  };
};
