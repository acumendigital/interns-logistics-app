import axios from "axios";

const getCsrfToken = async () => {
  const request = await axios.get(
    "https://xyz-logistics-api.herokuapp.com/api/v1/csrf-token"
  );
  axios.defaults.headers["X-CSRF-Token"] = request.csrfToken;
  return request.csrfToken;
};

export default function ({ $axios, store }, inject, error) {
  // Add configuration
  //   $axios.onRequest(async () => {
  //     try {
  //       const { data } = await $axios.get(`/api/v1/csrf-token`);
  //       $axios.setToken(data.getCsrfToken, "X-CSRF-Token");
  //       console.log("Intercepting API call");
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }),
  //     $axios.onError((error) => {
  //       nuxtError({
  //         statusCode: error.response.status,
  //         message: error.message,
  //       });
  //       return Promise.resolve(false);
  //     });

  $axios.onRequest(async (config) => {
    console.log("Making request to " + config.url);
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
    return Promise.reject(error);
  });
}
