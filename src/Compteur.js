import { useReducer } from "react";

// état initial
const initialValue = { valeur: 0 };

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { valeur: state.valeur + 1 };
    case "moins":
      return { valeur: state.valeur - 1 };
    case "reset":
      return { valeur: 0 };
    default:
      return state;
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h3>Valeur : {state.valeur}</h3>

      <button onClick={() => dispatch({ type: "plus" })}>Ajouter</button>
      <button onClick={() => dispatch({ type: "moins" })}>Retirer</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Compteur;