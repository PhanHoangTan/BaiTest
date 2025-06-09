import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface CartContextType {
  cartCount: number;
  setCartCount: (count: number) => void;
  incrementCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartCount, setCartCount] = useState<number>(0);

  const incrementCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
