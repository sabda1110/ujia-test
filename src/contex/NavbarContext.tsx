import { createContext, useState } from 'react';

const NavbarContext = createContext();

const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <NavbarContext.Provider value={[open, setOpen]}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarMenu = NavbarContext;
export default NavbarContextProvider;
