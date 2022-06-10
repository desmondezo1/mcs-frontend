import create from 'zustand'

const useStore = create(set => ({
  searchFilter: "",
  loggedIn : false,
  userId: "",
  setUserId: (val) => set(state => ({ userId: val })),
  setLoggedInState: (val) => set(state => ({ loggedIn: val })),
  setSearchFilterValue: (val) => set(state => ({ searchFilter: val })),
  removeSearchFilterValue: () => set({ searchFilter: "" })
}))

export default useStore;