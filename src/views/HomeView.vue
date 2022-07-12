<script setup>

import { useStickerStore } from '@/stores/StickerStore';
import { useCheckoutStore } from '@/stores/CheckoutStore';
import { storeToRefs } from 'pinia';

const stickerStore = useStickerStore();
stickerStore.fill();

const { stickers } = storeToRefs(stickerStore);

const checkoutStore = useCheckoutStore();
const { checkout } = storeToRefs(checkoutStore);

</script>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    // implementação dos métodos do componente
  }
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="limiter">
      <div class="container">
        <div class="wrap">
          <div class="card-header">
            <div class="card-text">
              <p>Formulário</p>
              <p>para compra de</p>
              <h2>Pacote de adesivos</h2>
            </div>
          </div>
          <div class="card-body">
            <h3>Quais adesivos:</h3>

            <div v-for="sticker in stickers" :key="sticker.slug">
              <input type="checkbox" :id="sticker.slug" :value="sticker.slug" v-model="checkout.selectedStickers" />
              <label class="check-label" :for="sticker.slug">{{ sticker.text }}</label>
            </div>

            <div class="box-count">
              <h3>Quantos adesivos de cada?</h3>
              <div class="box-count-input">
                <span class="mdi mdi-minus-box" id="minus" @click="checkoutStore.decrement"></span>
                <input class="number" type="number" :value="checkout.quantity" />
                <span class="mdi mdi-plus-box" id="plus" @click="checkoutStore.increment"></span>
              </div>
            </div>
            <div class="box-obs">
              <h3>Observações:</h3>
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Alguma dúvida? Recado?"
                :value="checkout.observation"
                @input="event => checkout.observation = event.target.value">
              </textarea>
            </div>
          </div>
          <div class="card-footer">
            <a href="/checkout" class="">
              <span class="btn-enviar" id="btn-enviar">ENVIAR</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import '@/assets/css/home.css';
</style>
