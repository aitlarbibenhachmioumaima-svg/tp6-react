import { useState, useEffect } from "react";

function useFetch(url) {
  const [resultat, setResultat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const chargerDonnees = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setResultat(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    chargerDonnees();
  }, [url]);

  return { resultat, loading, error };
}

export default useFetch;