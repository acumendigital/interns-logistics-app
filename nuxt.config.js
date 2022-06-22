import axios from "axios";

export default {
  // generating links for dynamic pages
  // generate: {
  //   async routes() {
  //     let config = {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE2MmUyYWUzMDkxYzg4NmUxOGUwNTYiLCJpYXQiOjE2NTU3NTMxMDcsImV4cCI6MTY1NTgzOTUwN30.o4mRBAIpPvhe6FODVyY_pLEnWMZma_2Gn4LYC_fanJo`,
  //       },
  //     };
  //     const orderDetailsReq = await axios.get(
  //       `https://xyz-logistics-api.herokuapp.com/api/v1/requests/user?status=pending`,
  //       config
  //     );
  //     const orderDetailsArray = orderDetailsReq.data.data.map((data) => {
  //       return {
  //         route: "/orders/track-order/" + data._id,
  //       };
  //     });

  //     const routes = orderDetailsArray;
  //     return routes;
  //   },
  //   fallback: true,
  // },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "interns-logistics-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        defer: true,
        src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBBlFJRASRFySUX9F06Q4Z0sLc0eXaeKuI&libraries=places`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  styleResources: {
    scss: ["~/assets/styles/mixins.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios", { src: "~/plugins/vuex-persist", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // style resources
    "@nuxtjs/style-resources",
    "@nuxtjs/moment",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa

    "@nuxtjs/pwa",
    // Font Awesome

    // Nuxt Toast
    "@nuxtjs/toast",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-regular-svg-icons",
            icons: ["far"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://xyz-logistics-api.herokuapp.com",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
