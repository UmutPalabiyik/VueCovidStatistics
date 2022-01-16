import { api } from "../../boot/axios";

export const updateCovidSummary = async ({ commit }) => {
  const config = {
    method: "get",
    url: "https://api.covid19api.com/summary",
    headers: {},
  };

  try {
    const response = await api(config);
    commit("updateCovidSummary", response);
  } catch (error) {}
};
