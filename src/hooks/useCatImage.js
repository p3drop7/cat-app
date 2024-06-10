import { useState, useEffect } from "react";

const PREFIX = "https://cataas.com/cat/says/";
const CONFIG = "?fontSize=100&fontColor=red";

function useCatImage({ catFact }) {
  const [catImageURL, setCatImageURL] = useState();

  useEffect(() => {
    if (!catFact) return;
    const firstWord = catFact.split(" ")[0];
    setCatImageURL(`${PREFIX}${firstWord}${CONFIG}`);
  }, [catFact]);

  return { catImageURL };
}

export default useCatImage;
