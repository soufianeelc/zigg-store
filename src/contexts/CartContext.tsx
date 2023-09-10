import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext({
  open: false,
  setIsOpen: (f: any) => f,
});

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ open, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}
