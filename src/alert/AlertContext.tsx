import React, { useState } from "react";

const defaultState = {
  // alert: boolean;
  toggle: () => void {},
};
export const AlertContext = React.createContext<any>(defaultState);

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
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
