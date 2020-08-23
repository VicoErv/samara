import camelCase from 'lodash.camelcase'

export const createAsyncMutation = type => ({
  BASE: `${type}`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  PENDING: `${type}_PENDING`,
  loadingKey: `${camelCase(type)}Pending`,
  statusCode: `${camelCase(type)}StatusCode`,
  stateKey: `${camelCase(type)}Data`
})

const ig = createAsyncMutation('ig');

export const types = {
  ig
}
