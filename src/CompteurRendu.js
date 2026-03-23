import { useEffect, useRef } from "react";

function CompteurRendu() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Nombre de rendus :", renderCount.current);
  });

  return (
    <p>Ouvre la console pour voir combien de fois ça s'affiche.</p>
  );
}

export default CompteurRendu;