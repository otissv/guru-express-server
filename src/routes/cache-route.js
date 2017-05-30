/*
* Resolver cache
*/

import { cleanObj } from '../utils';

export default class Cache {
  constructor () {
    this.data = {};
  }

  add ({ key, value }) {
    this.data = { ...this.data, [key]: value };
    return value;
  }

  addMany ({ key, value }) {
    // this.data = { ...this.data, [key]: value };
    // return value;
  }

  load ({ key }) {
    return this.data[key];
  }

  loadMany ({ key }) {
    // return this.data[key];
  }

  remove ({ key }) {
    this.data = cleanObj({ ...this.data, [key]: null });
  }

  removeMany ({ key }) {
    // this.data = cleanObj({ ...this.data, [key]: null });
  }
  
  store () {
    return this.data;
  }
}
