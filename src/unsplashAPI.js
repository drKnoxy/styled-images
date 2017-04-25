function _buildQuery(params) {
  const keys = Object.keys(params);
  return keys.map(k => `${k}=${params[k]}`).join('&');
}

export default class UnsplashAPI {
  constructor({ appID }) {
    this.appID = appID;

    this.fetchOptions = {
      method: 'GET',
      headers: new Headers({
        'Accept-Version': 'v1',
        Authorization: `Client-ID ${this.appID}`
      })
    };
  }

  baseURL = 'https://api.unsplash.com';

  _buildURL({path, params}) {
    const search = _buildQuery(params);
    return `${this.baseURL}${path}?${search}`;
  }

  request(path = '', params = {}) {
    const URL = this._buildURL({path, params});

    return fetch(URL, this.fetchOptions).then(r => r.json());
  }

  search = ({ query, page = 1, perPage = 20 }) => {
    const params = {
      query,
      page,
      per_page: perPage
    };

    return this.request('/search/photos', params);
  };
}
