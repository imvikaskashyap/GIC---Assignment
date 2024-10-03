import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../services/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCats, setTotalCats] = useState(0);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = `/images/search?limit=${limit}&page=${page}&breed_ids=beng&q=${query}`;
      const catData = await fetchData(endpoint);
      setData(catData);
      setTotalCats(100); 
    } catch (error) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [page, query, limit]);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        selectedCat,
        setSelectedCat,
        page,
        setPage,
        query,
        setQuery,
        totalCats,
        limit,
        setLimit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
