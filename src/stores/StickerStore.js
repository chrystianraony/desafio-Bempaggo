import { defineStore } from "pinia";

export const useStickerStore = defineStore("StickerStore", {

  state: () => {
    return {
      stickers: []
    }
  },

  actions: {
    async fill() {
      // Aqui poderia ser implementação do axios para pegar os stickers da API
      // Os dados poderiam estar em um mock json também.
      this.stickers = [
        { slug: 'react', text: 'React' },
        { slug: 'vue', text: 'Vue' },
        { slug: 'angular', text: 'Angular' }
      ]
    } 
  }


})