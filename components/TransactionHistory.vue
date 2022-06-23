<template>
  <main>
    <div class="container">
      <div class="history">
        <div class="details">
          <img src="~assets/images/up.svg" alt="">
          <p class="name">
            Send Local
          </p>
        </div>

        <p
          v-for="(value, index) in transactions"
          :key="index"
          class="amount"
          :value="value"
        >
          {{ value }}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Trnasactions',
  data () {
    return {
      title: 'Save',
      transactions: []
    }
  },
  created () {
    this.getTransactions()
  },
  methods: {
    async getTransactions () {
      const response = await this.$axios.get('https://xyz-logistics-api.herokuapp.com/api/v1/wallet/paystak/transactions'
      )
      if (response) {
        this.transactions = []
        // response.data.reverse().forEach(v => this.vendorList.push(v.name))
        response.data.data.transactionHistory[0].forEach(v => this.transactions.push(v.amount))
      }
      // console.log(response.data.data.transactionHistory[0].amount)
      console.log(response.data.data.transactionHistory)
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  font-family: "Rubik Regular";
  font-style: normal;

  .container {
    width: 100%;
    background: #fff;
    .history {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 32px;
      margin-bottom: 48px;
      .details {
        display: flex;
        align-items: center;
      }
      .name {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        margin-left: 27px;
      }
      .amount {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #777777;
      }
    }
  }
}
</style>
