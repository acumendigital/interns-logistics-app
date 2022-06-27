<template>
  <div class="main-container">
    <h2 class="header">Agents</h2>
    <p class="text">Manage all your dispatchers, assign orders, and track orders here.</p>
    <div class="search-section">
      <input class="input-search" type="text" placeholder="Search">
      <svg class="search-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.55716 8.17016C10.2626 7.12015 10.5519 5.84513 10.3686 4.59348C10.1854 3.34196 9.54278 2.20331 8.56591 1.39965C7.58914 0.595991 6.34815 0.184654 5.08477 0.24598C3.8213 0.30723 2.62603 0.8367 1.7314 1.73117C0.83693 2.62555 0.307559 3.821 0.24621 5.08454C0.18496 6.34792 0.59629 7.589 1.39997 8.56568C2.20372 9.54246 3.34221 10.1851 4.5938 10.3684C5.84541 10.5516 7.12043 10.2623 8.17048 9.55684L10.0954 11.4818C10.3432 11.7295 10.7042 11.8262 11.0426 11.7356C11.381 11.6449 11.6453 11.3806 11.736 11.0422C11.8266 10.7038 11.7299 10.3427 11.4822 10.095L9.55716 8.17016ZM5.3359 9.24543C4.29894 9.24543 3.30447 8.83348 2.57133 8.10024C1.83819 7.36701 1.42614 6.37256 1.42614 5.33567C1.42614 4.29871 1.8381 3.30424 2.57133 2.5711C3.30456 1.83796 4.29901 1.42591 5.3359 1.42591C6.37286 1.42591 7.36733 1.83787 8.10047 2.5711C8.83377 3.30431 9.24566 4.29878 9.24566 5.33567C9.2445 6.37229 8.83218 7.36603 8.09924 8.0991C7.36621 8.83204 6.37245 9.24436 5.33581 9.24552L5.3359 9.24543Z" fill="black"/>
      </svg>
      </div>
      <LogisticsTable :data="orderData" />
  </div>
</template>

<script>
  export default {
    layout: 'AdminLayout',
    data() {
      return {
        orderData: {
        title: '',
        searchBy: undefined,
        rowPerPage: 10,
        headers: [
          { key: 'dispatcher', label: 'Dispatcher name', type: 'string', isFilterable: true },
          { key: 'phone', label: 'Phone Number', type: 'string' , isFilterable: true },
          { key: 'email', label: 'Email Address', type: 'string', isFilterable: true },
          { key: 'vehicle', label: 'Vehicle', type: 'string', isFilterable: true },
          { key: 'condition', label: 'Condition', type: 'string', isFilterable: true },
          { key: 'status', label: 'Status', type: 'string', isFilterable: true },
          { key: 'date', label: 'Date joined', type: 'date', isFilterable: true },
        ],
        labels: [
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          },
          {
            dispatcher: 'Ajibike lola',
            phone: '08023457899',
            email: 'lola23@gm...',
            vehicle: 'Truck',
            condition: 'Good',
            status: 'In transit',
            date: '12/4/22',
          }
        ],
        bulkActions: undefined,
        styles: {
          fullWidth: true,
          actionText: undefined
        },
        iconType: ''
      }
    }
  }
  }
</script>

<style scoped>
.main-container{
  padding: 6rem 0 0 3rem;
  background-color: #fffceb91;
}
.search-section{
  border: 1px solid #F3F3F3;
  border-radius: .4rem;
  width: 500px;
  height: 30px;
  display: flex;
  column-gap: 17rem;
  align-items: center;
  padding: 1rem;
  margin: 1.5rem 0 1.5rem 0;
}
.input-search{
  border: none;
  outline: none;
}
.header{
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-family: 'DM Sans Regular';
  padding-bottom: .5rem;
}
.text{
  font-weight: 400;
  font-size: 1rem;
  list-style: 1.5rem;
  font-family: 'DM Sans Regular';
}
</style>