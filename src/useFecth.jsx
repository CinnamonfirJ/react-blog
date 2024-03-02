import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCon = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCon.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch resources for that data");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fecth aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortCon.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
