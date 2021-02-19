export const state = () => ({
  info: {},
  actual_guild: 0
})

export const mutations = {
  init (state, array) {
    state.info = array
  },
  setActualGuild (state, id) {
    state.actual_guild = id
  }
}
