import axios from 'axios'

export const doAsync = (store, {
  config,
  mutationTypes,
  callback
}) => {
  store.commit(mutationTypes.BASE, {
    type: mutationTypes.PENDING,
    value: true
  });

  return axios.request(config)
    .then(response => {
      let data = response.data

      if (callback) {
        data = callback(response.data)
      }

      store.commit(mutationTypes.BASE, {
        type: mutationTypes.SUCCESS,
        data,
        statusCode: response.status
      })

      store.commit(mutationTypes.BASE, {
        type: mutationTypes.PENDING,
        value: false
      })

      return response;
    })
    .catch(error => {
      store.commit(mutationTypes.BASE, {
        type: mutationTypes.FAILURE,
        data: error.response.data,
        statusCode: error.response.status
      });

      store.commit(mutationTypes.BASE, {
        type: mutationTypes.PENDING,
        value: false
      })

      throw error;
    })
};
