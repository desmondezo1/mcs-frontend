import create from "zustand";

const useStore = create((set) => ({
  searchFilter: "",
  loggedIn: false,
  userId: "",
  shippingCost: 0,
  doorDelivery: false,
  setUserId: (val) => set((state) => ({ userId: val })),
  setDoorDelivery: (val) => set((state) => ({ doorDelivery: val })),
  setShippingCost: (val) => set((state) => ({ shippingCost: val })),
  setLoggedInState: (val) => set((state) => ({ loggedIn: val })),
  setSearchFilterValue: (val) => set((state) => ({ searchFilter: val })),
  removeSearchFilterValue: () => set((state) => ({ searchFilter: "" })),
}));

export default useStore;
