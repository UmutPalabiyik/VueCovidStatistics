import { api } from "src/boot/axios";

export default {
  setup() {
    function getSummary() {
      const config = {
        method: "get",
        url: "https://api.covid19api.com/summary",
        headers: {},
      };
      api(config)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return {
      getSummary,
    };
  },
};
