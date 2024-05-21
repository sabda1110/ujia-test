import { createContext, useState, useContext } from 'react';

const NavbarContext = createContext<MyApp.NavbarMenuContextType | undefined>(
  undefined
);

const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <NavbarContext.Provider value={{ open, setOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarMenu = NavbarContext;
export const useNavbarMenu = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error(
      'useNavbarMenu must be used within a NavbarContextProvider'
    );
  }
  return context;
};
export default NavbarContextProvider;
