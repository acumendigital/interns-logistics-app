import VuexPersistence from "vuex-persist";

function getPlugins() {
  const plugins = [];

  if (process.browser) {
    const vuexLocal = new VuexPersistence({
      storage: window.localStorage,
    });

    plugins.push(vuexLocal.plugin);
  }
  return plugins;
}

export const plugins = getPlugins();

export const state = () => ({
  userDetails: [],
  loading: false,
});

export const mutations = {
  addUserDetails(state, userDetails) {
    state.userDetails = userDetails;
  },
  updateLoadState(state, loadBool) {
    state.loading = loadBool;
  },
};

export const actions = {};

export const getters = {};
