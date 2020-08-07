<template>
  <header class="flex justify-center mt-8 lg:mb-10">
    <h1 class="text-2xl md:text-4xl font-semibold">Currency Converter</h1>
  </header>
  <div class="flex flex-col sm:flex-row m-4">
    <div
      id="controls"
      class="bg-gray-500 p-8 m-4 flex flex-col items-end md:w-1/3"
    >
      <div class="flex my-2">
        <label for="baseCurrency" class="mr-2">Base</label>
        <select id="baseCurrency" v-model="baseCurrency">
          <option v-for="currency of currencies" :key="currency">
            {{ currency }}
          </option>
        </select>
      </div>
      <button
        @click="swap()"
        class="bg-pink-500 text-sm text-white px-6 py-2 rounded"
      >
        Switch
      </button>
      <div class="flex my-2">
        <label for="targetCurrency" class="mr-2">Target</label>
        <select id="targetCurrency" v-model="targetCurrency">
          <option v-for="currency of currencies" :key="currency">
            {{ currency }}
          </option>
        </select>
      </div>
      <div class="flex self-stretch my-2">
        <label for="amount" class="mr-2 w-1/3 text-right">Amount</label>
        <input
          class="w-2/3"
          id="amount"
          type="number"
          v-model.number="amount"
        />
      </div>
      <div class="flex-grow flex flex-col align items-end">
        <span> {{ formattedAmount }} {{ baseCurrency }} = </span>
        <span class="currency-calculation text-2xl lg:text-3xl">
          {{ formattedConversion }} {{ targetCurrency }}
        </span>
      </div>
    </div>
    <div
      id="main"
      class="flex-grow grid grid-cols-3 lg:grid-cols-6 bg-gray-500 p-8 m-4 w-2/3"
    >
      <div
        v-for="rate of sortedExchangeRates"
        :key="rate.code"
        class="flex flex-col items-center my-2"
      >
        <div
          class="font-medium"
          :class="{ 'text-pink-500': this.targetCurrency === rate.code }"
        >
          {{ rate.code }}
        </div>
        <div class="text-gray-700 text-sm">
          {{ formattedValue(rate.value) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        amount: 100,
        baseCurrency: "INR",
        targetCurrency: "PLN",
        exchangeRates: {}
      };
    },
    watch: {
      baseCurrency(val) {
        console.log('watch changed', val)
        this.fetchExchangeRates();
      }
    },
    computed: {
      conversion() {
        if (Object.keys(this.exchangeRates).length > 0) {
          return this.exchangeRates[this.targetCurrency] * this.amount;
        } else {
          return 0;
        }
      },
      currencies() {
        return Object.keys(this.exchangeRates).sort();
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
      },
      sortedExchangeRates() {
        return Object.keys(this.exchangeRates)
          .sort()
          .map((key) => {
            return {
              code: key,
              value: this.exchangeRates[key]
            };
          });
      }
    },
    beforeMount() {
      this.fetchExchangeRates();
    },
    methods: {
      fetchExchangeRates() {
        return fetch(
          `https://api.exchangeratesapi.io/latest?base=${this.baseCurrency}`
        )
          .then((res) => res.json())
          .then((data) => {
            this.exchangeRates = data.rates;
          })
          .catch((err) => {
            window.alert(
              "There was a problem fetching exhange rates, please refresh page to try again."
            );
            console.error(err);
          });
      },
      swap() {
        let base = this.baseCurrency.toString();
        this.baseCurrency = this.targetCurrency.toString();
        this.targetCurrency = base;
        return this.fetchExchangeRates();
      },
      formattedValue(value) {
        return value.toFixed(6);
      }
    }
  };
</script>
