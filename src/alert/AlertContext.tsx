import React, { useState, createContext, ReactNode } from "react";

interface IAlertContext {
  visible: boolean;
  toggle: () => void;
}
export const AlertContext = createContext<IAlertContext>({
  visible: false,
  toggle: () => {},
});

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<boolean>(false);

  const toggle = () => setAlert((prev: boolean) => !prev);

  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
