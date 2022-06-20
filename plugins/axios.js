// import axios from "axios";

// const getCsrfToken = async () => {
//   try {
//     const request = await axios.get(
//       "https://xyz-logistics-api.herokuapp.com/api/v1/csrf-token"
//     );
//     console.log(request);
//     return request.data.csrfToken;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function ({ $axios, store }, inject, error) {
  // Add configuration

  $axios.onRequest(async (config) => {
    store.commit("updateLoadState", true);
    $axios.setHeader("Authorization", `Bearer ${store.state.token}`);
    return config;
  });

  $axios.onResponse((config) => {
    store.commit("updateLoadState", false);
    return config;
  });

  $axios.onError((config, error) => {
    store.commit("updateLoadState", false);
    return error;
  });
}
