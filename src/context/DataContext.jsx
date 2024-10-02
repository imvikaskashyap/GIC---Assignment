import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../services/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);

  // console.log(data)

  useEffect(() => {
    const loadData = async () => {
      try {
        const breedsData = await fetchData("/images/search", {
          limit: 100,
          breed_ids: "beng",
        });
        setData(breedsData);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{ data, loading, error, selectedCat, setSelectedCat }}
    >
      {children}
    </DataContext.Provider>
  );
};
