import { types } from '../mutation-types';
import { doAsync } from "../async-util";

export default class Instagram {
  static getUser(store, username) {
    return doAsync(store, {
      config: {
        url: `/api/instagram/${username}`
      },
      mutationTypes: types.ig
    });
  }
}
