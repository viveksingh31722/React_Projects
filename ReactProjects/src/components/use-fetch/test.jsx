import React from "react";
import useFetch from ".";
import "./style.css";

export default function UseFetchHookTest() {
  const { data, errorMsg, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div className="fetch-hook-container">
      <h1>Use Fetch Hook</h1>
      {loading ? <h3>Loading ! Please Wait</h3> : null}
      {errorMsg ? <h3>{errorMsg}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
