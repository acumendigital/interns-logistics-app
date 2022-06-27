<template>
  <div class="main-container">
    <div class="settings-links">
      <NuxtLink to="/admin/settings">Users &amp; Roles</NuxtLink>
      <NuxtLink to="/admin/settings/account">Account settings</NuxtLink>
    </div>
    <div class="search-container">
      <div class="search-section">
      <input class="input-search" type="text" placeholder="Search">
      <svg class="search-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.55716 8.17016C10.2626 7.12015 10.5519 5.84513 10.3686 4.59348C10.1854 3.34196 9.54278 2.20331 8.56591 1.39965C7.58914 0.595991 6.34815 0.184654 5.08477 0.24598C3.8213 0.30723 2.62603 0.8367 1.7314 1.73117C0.83693 2.62555 0.307559 3.821 0.24621 5.08454C0.18496 6.34792 0.59629 7.589 1.39997 8.56568C2.20372 9.54246 3.34221 10.1851 4.5938 10.3684C5.84541 10.5516 7.12043 10.2623 8.17048 9.55684L10.0954 11.4818C10.3432 11.7295 10.7042 11.8262 11.0426 11.7356C11.381 11.6449 11.6453 11.3806 11.736 11.0422C11.8266 10.7038 11.7299 10.3427 11.4822 10.095L9.55716 8.17016ZM5.3359 9.24543C4.29894 9.24543 3.30447 8.83348 2.57133 8.10024C1.83819 7.36701 1.42614 6.37256 1.42614 5.33567C1.42614 4.29871 1.8381 3.30424 2.57133 2.5711C3.30456 1.83796 4.29901 1.42591 5.3359 1.42591C6.37286 1.42591 7.36733 1.83787 8.10047 2.5711C8.83377 3.30431 9.24566 4.29878 9.24566 5.33567C9.2445 6.37229 8.83218 7.36603 8.09924 8.0991C7.36621 8.83204 6.37245 9.24436 5.33581 9.24552L5.3359 9.24543Z" fill="black"/>
      </svg>
      </div>
      <div>
        <button class="add-users">Add New </button>
      </div>
    </div>
    <LogisticsTable :data="orderData" />
  </div>
</template>

<script>
  export default {
    layout: 'AdminLayout',
    data (){
      return {
        orderData: {
        title: '',
        searchBy: undefined,
        rowPerPage: 10,
        headers: [
          { key: 'name', label: 'Name', type: 'string', isFilterable: true },
          { key: 'role', label: 'Role', type: 'string' , isFilterable: true },
          { key: 'number', label: 'Number', type: 'string', isFilterable: true },
          { key: 'email', label: 'Email Address', type: 'string', isFilterable: true },
          { key: 'date', label: 'Date Added', type: 'date', isFilterable: true },
        ],
        labels: [
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
          {
            name: 'Jide ayomide',
            role: 'Admin',
            number: '08035368293',
            email: 'jidesamuel267@gmail.com',
            date: '12/6/22',
          },
        ],
        bulkActions: undefined,
        styles: {
          fullWidth: true,
          actionText: undefined
        },
        iconType: 'three-dots'
      }
    }
  }
  }
</script>

<style scoped>
.main-container{
  padding: 6.5rem 0 0 3rem;
  background-color: #fffceb91;
}
.settings-links{
  display: flex;
  column-gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #F3F3F3;
}
a{
  text-decoration: none;
  color: #777777;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: 'DM Sans Regular';
}
.nuxt-link-exact-active{
  color: #000;
  border-bottom:  2px solid#D9B608;
  font-weight: 700;
}
.search-container{
  display: flex;
  column-gap: 15rem;
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
.add-users{
  width: 184px;
  height: 40px;
  text-align: center;
  border-radius: .5rem;
  background-color: #FFD60A;
  border: none;
  margin: 1.5rem 0 1.5rem 0;
  font-family: 'DM Sans Regular';
  font-weight: 400;
  line-height: 1.5rem;
  font-size: .8rem;
}
</style>