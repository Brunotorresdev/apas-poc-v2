import { create } from "zustand";
import { persist } from "zustand/middleware";

const localStoragePersist = {
  getItem: (name) => {
    const storedValue = localStorage.getItem(name);
    return storedValue ? JSON.parse(storedValue) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const useAuthStore = create()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (person) => {
        set({ user: person });
      },
      authenticateUser: async (data) => {
        set({ user: data });
      },
      logout: () => {
        set({ user: null });
      },
      hasPermission: (constraint) => {
        const { user } = get();
        const role = user?.role;
        return user || false;
      },
    }),
    {
      name: "auth-storage",
      storage: localStoragePersist,
    }
  )
);
