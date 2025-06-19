import { use, useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();

      if (result) {
        setData(result);
        setErrorMsg(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(`${error}. some error occurred`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, errorMsg, loading };
}
