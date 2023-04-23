import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Credentials = {
  credentials: string | undefined;
  setCredentials: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const UserContext = React.createContext<Credentials | null>(null);

const CredentialsProvider: React.FC<Props> = ({ children }) => {
  const [credentials, setCredentials] = useState<string>();

  return (
    <UserContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </UserContext.Provider>
  );
};

export default CredentialsProvider;
