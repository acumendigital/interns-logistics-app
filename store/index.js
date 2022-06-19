import VuexPersistence from 'vuex-persist'

function getPlugins () {
  const plugins = []

  if (process.browser) {
    const vuexLocal = new VuexPersistence({
      storage: window.localStorage
    })

    plugins.push(vuexLocal.plugin)
  }
  return plugins
}

export const plugins = getPlugins()

export const state = () => ({
  userDetails: [],
  loading: false,
  token: '',
  pickUpRef: {},
  dropOffRef: {}
})

export const mutations = {
  addUserDetails (state, userDetails) {
    state.userDetails = userDetails
  },
  updateLoadState (state, loadBool) {
    state.loading = loadBool
  },
  setToken (state, token) {
    state.token = token
  },
  setPickUpRef (state, pickUpRef) {
    state.pickUpRef = pickUpRef
  },
  setDropOffRef (state, dropOffRef) {
    state.dropOffRef = dropOffRef
  }
}

export const actions = {}

export const getters = {}
