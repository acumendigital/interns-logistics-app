import axios from "axios";

const getCsrfToken = async () => {
  try {
    const request = await axios.get(
      "https://xyz-logistics-api.herokuapp.com/api/v1/csrf-token"
    );
    console.log(request);
    return request.data.csrfToken;
  } catch (error) {
    console.log(error);
  }
};

export default function ({ $axios, store }, inject, error) {
  // Add configuration

  $axios.onRequest(async (config) => {
    store.commit("updateLoadState", true);
    return config;
  });

  $axios.onResponse((config) => {
    store.commit("updateLoadState", false);
    return config;
  });

  $axios.onError((config) => {
    store.commit("updateLoadState", false);
    return config;
  });
}
