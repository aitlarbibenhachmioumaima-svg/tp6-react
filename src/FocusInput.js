import { useRef } from "react";

function FocusInput() {
  const champRef = useRef(null);

  const activerFocus = () => {
    if (champRef.current) {
      champRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={champRef} type="text" placeholder="Écrire quelque chose..." />
      <button onClick={activerFocus}>Focus ici</button>
    </div>
  );
}

export default FocusInput;