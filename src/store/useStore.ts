import create from 'zustand';

interface AppState {
  spinnerImage: string;
  setSpinnerImage: (imageUrl: string) => void;
}

export const useStore = create<AppState>((set) => ({
  spinnerImage: '',
  setSpinnerImage: (imageUrl: string) => set({ spinnerImage: imageUrl }),
}));
