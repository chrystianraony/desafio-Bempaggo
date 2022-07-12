import { defineStore } from "pinia";

export const useCheckoutStore = defineStore("CheckoutStore", {
  state: () => {
    return {
      checkout: {
        quantity: 0,
        selectedStickers: [],
        observation: ''
      },
    };
  },
  actions: {
    increment() {
      this.checkout.quantity++
    },
    decrement() {
      if (this.checkout.quantity > 0) {
        this.checkout.quantity--
      }
    }
  }
});
