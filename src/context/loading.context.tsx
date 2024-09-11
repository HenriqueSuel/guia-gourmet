import { createContext, useContext, useState } from "react";

interface LoadingProps {
  loading: boolean;
  handleLoading: (status: boolean) => void;
}

const LoadingContext = createContext<LoadingProps>({
  handleLoading: () => null,
  loading: false,
});

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);

  const handleLoading = (status: boolean) => {
    setLoading(status);
  };

  return (
    <LoadingContext.Provider
      value={{
        handleLoading,
        loading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);

export { useLoading, LoadingProvider };
