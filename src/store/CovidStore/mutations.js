export function updateCovidSummary(state, payload) {
  state.summary = payload.data.Countries;
}

export function updateSummaryDataFetchStatus(state) {
  state.summaryDataFetchStatus = false;
}
