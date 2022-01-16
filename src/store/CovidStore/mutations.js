export function updateCovidSummary(state, payload) {
  state.summary = payload.data.Countries
}
