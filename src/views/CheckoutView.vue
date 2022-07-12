<script setup>
import { useCheckoutStore } from '@/stores/CheckoutStore';
import { storeToRefs } from 'pinia';

const checkoutStore = useCheckoutStore();
const { checkout } = storeToRefs(checkoutStore);
</script>


<template>

  <body>
    <div class="limiter">
      <div class="container">
        <div class="wrap">
          <div class="card-header">
            <div class="card-text">
              <h2>Pagamentos</h2>
            </div>
          </div>
          <form action="#" method="post">
            <h4>Método de Pagamento</h4>
            <section id="card-number-name">
              <div>
                <label for="card-number">Numero do cartão</label>
                <input id="card-number" name="card-number" placeholder="Número impresso" autocomplete="card-number"
                  inputmode="numeric" maxlength="50" pattern="[\d ]{10,30}" required />
              </div>

              <div>
                <label for="card-name">Nome no cartão</label>
                <input id="card-name" name="card-name" placeholder="Nome Impresso" autocomplete="card-name"
                  maxlength="50" pattern="[\p{L} \-\.]+" required />
              </div>
            </section>
            <section id="card-exp-csc">
              <div>
                <label for="card-exp">Data de Validade</label>
                <input id="card-exp" name="card-exp" autocomplete="card-exp" placeholder="MM/YY" maxlength="5"
                  required />
              </div>
              <div>
                <label for="card-csc">Código de segurança</label>
                <input id="card-csc" name="card-csc" placeholder="CVC" inputmode="numeric" maxlength="3" required />
                <div class="explanation">
                  Verso do cartão, três digitos
                </div>
              </div>
            </section>
            <div id="lin-hor"></div>
            <section id="bank-slip">
              <h4>Boleto Bancário</h4>
              <img src="src/assets/img/boleto.png" id="boleto">

            </section>
            <div id="lin-hor"></div>
            <section id="pix">
              <h4>Pagamento via Pix</h4>
              <img src="src/assets/img/pix.png" id="pix">
            </section>
          </form>
          <div class="card-footer">
            <a href="#" class="">
              <span class="btn-enviar" id="btn-enviar">FINALIZAR COMPRA</span>
            </a>
            <div class="card-footer">
              <a href="/" class="">
                <span class="btn-voltar" id="btn-voltar">MODIFICAR PEDIDO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
@import '@/assets/css/checkout.css';
</style>
