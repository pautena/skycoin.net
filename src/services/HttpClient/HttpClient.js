import axios from 'axios';

export default class HttpClient {
  constructor(baseUrl) {
    this.axios = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
    });
  }

  get(path, headers = {}) {
    return this.axios.get(path, { headers });
  }

  post(path, data, headers = {}) {
    return this.axios.post(path, data, { headers });
  }
}
