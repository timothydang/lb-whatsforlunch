import { observable, action } from 'mobx';
// import axios from 'axios';

export default class AppState {
  @observable authenticated: boolean;
  @observable authenticating: boolean;
  @observable items;
  @observable item;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};
  }

  async fetchData(pathname, id) {
    // let { data } = await axios.get(`https://jsonplaceholder.typicode.com${pathname}`);
    // console.log(data);
    // data.length > 0 ? this.setData(data) : this.setSingle(data);
  }

  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action authenticate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
