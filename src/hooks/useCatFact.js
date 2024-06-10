import { useState } from "react";

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact";

function useCatFact() {
  const [catFact, setCatFact] = useState();

  const refreshCatFact = () => {
    return fetch(CAT_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        const data = res.fact;
        setCatFact(data);
      });
  };

  return { catFact, refreshCatFact };
}

export default useCatFact;
