export class JsonPlaceholderApi {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() {
    this.page = 1;
  }

  fetchPosts() {
    return fetch(
      `${JsonPlaceholderApi.BASE_URL}/posts?_limit=20&_page=${this.page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
