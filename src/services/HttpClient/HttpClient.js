import axios from 'axios';

export default class HttpClient {
  constructor(baseUrl) {
    this.axios = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
    });
  }

  url(path) {
    return `${this.baseUrl}${path}`;
  }

  get(path, headers = {}) {
    return axios.get(this.url(path), { headers });
  }

  post(path, data, headers = {}) {
    return axios.post(this.url(path), data, { headers });
  }
}
