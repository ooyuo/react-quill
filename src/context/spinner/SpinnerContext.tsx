import { ReactNode, createContext, useContext, useState } from 'react';

interface SpinnerContextProps {
  spinnerImage: string;
  setSpinnerImage: (imageUrl: string) => void;
}

const SpinnerContext = createContext<SpinnerContextProps | undefined>(
  undefined
);

export function SpinnerProvider({ children }: { children: ReactNode }) {
  const [spinnerImage, setSpinnerImage] = useState<string>('/spinner2.gif');

  return (
    <SpinnerContext.Provider
      value={{
        spinnerImage,
        setSpinnerImage,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
}

export function useSpinner() {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error('useSpinner must be used within a SpinnerProvider');
  }
  return context;
}
