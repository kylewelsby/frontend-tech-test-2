<template>
  <h1>Currency Converter</h1>
  <div>
    <div id="controls">
      <div>
        <label for="baseCurrency">Base</label>
        <select
          id="baseCurrency"
          v-model="baseCurrency"
          @input="fetchExchangeRates()"
        >
          <option v-for="currency of currencies" :key="currency">
            {{ currency }}
          </option>
        </select>
      </div>
      <button @click="swap()">Switch</button>
      <div>
        <label for="targetCurrency">Target</label>
        <select id="targetCurrency" v-model="targetCurrency">
          <option v-for="currency of currencies" :key="currency">
            {{ currency }}
          </option>
        </select>
      </div>
      <div>
        <label for="amount">Amount</label>
        <input name="amount" type="number" v-model.number="amount" />
      </div>
      <div>
        <span> {{ formattedAmount }} {{ baseCurrency }} = </span>
        <span> {{ formattedConversion }} {{ targetCurrency }} </span>
      </div>
    </div>
    <div id="main">
      <div v-for="(value, code) of exchangeRates" :key="code">
        <div>{{ code }}</div>
        <div>{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import currencies from "./supported_currencies.json";
  export default {
    name: "App",
    components: {},
    data() {
      return {
        currencies,
        amount: 100,
        baseCurrency: "INR",
        targetCurrency: "PLN",
        exchangeRates: { AUD: 0.01516, PLN: 0.052081 }
      };
    },
    computed: {
      conversion() {
        return this.exchangeRates[this.targetCurrency] * this.amount;
      },
      formattedAmount() {
        return new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: this.baseCurrency
        }).format(this.amount);
      },
      formattedConversion() {
        return new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: this.targetCurrency
        }).format(this.conversion);
      }
    },
    methods: {
      fetchExchangeRates() {
        // TODO: When the base currency is changed, the application should fetch new conversion rates
      },
      swap() {
        // TODO: When the 'switch' button is pressed, the values of the base and target are swapped
      },
      calculateValue() {
        // TODO: When an amount is entered into the input, a converted amount is displayed
      }
    }
  };
</script>
