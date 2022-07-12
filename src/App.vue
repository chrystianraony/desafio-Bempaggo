<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCheckoutStore } from './stores/CheckoutStore';
import { useStickerStore } from './stores/StickerStore';

const stickerStore = useStickerStore();
const checkoutStore = useCheckoutStore();

</script>

<template>
  <RouterView />
</template>

<style>

</style>
