import { createContext, useReducer } from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find(i => i.id === action.payload.id);
      if (existing) {
        return state.map(i =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE":
      return state.filter(i => i.id !== action.payload);

    case "INC":
      return state.map(i =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );

    case "DEC":
      return state.map(i =>
        i.id === action.payload && i.qty > 1
          ? { ...i, qty: i.qty - 1 }
          : i
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
