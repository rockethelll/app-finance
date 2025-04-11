import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type SidebarStore = {
  isCollapsed: boolean;
  isLoading: boolean;
  toggleSidebar: () => void;
  setLoaded: () => void;
};

const useSidebarStore = create<SidebarStore>()(
  devtools(
    persist(
      (set) => ({
        isCollapsed: false,
        isLoading: true,
        toggleSidebar: () =>
          set((state) => ({ isCollapsed: !state.isCollapsed })),
        setLoaded: () => set({ isLoading: false }),
      }),
      {
        name: 'sidebar-store',
      },
    ),
  ),
);

export default useSidebarStore;
