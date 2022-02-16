const baseUrl = "https://linkstagram-api.ga";
const baseHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const HTTP = {
  async post(endPoint, data) {
    return fetch(`${baseUrl}${endPoint}`, {
      method: "POST",
      headers: {
        ...baseHeaders,
      },
      body: JSON.stringify(data),
    });
  },
};

export default HTTP;
