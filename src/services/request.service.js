import axios from 'axios'

export class RequestService {
  pendingPromises = {}
  
  setPromise(route, method, body, params, promise, headers) {
    this.pendingPromises[route] = {
      promise,
      body,
      method,
      params,
      route,
      headers: JSON.stringify(headers),
    }
  }
  getPromise(route, method, body, params, headers) {
    const saved = this.pendingPromises[route]
    if (
      saved &&
      typeof saved !== 'undefined' &&
      saved.body === body &&
      saved.method === method &&
      saved.params === params &&
      saved.headers === JSON.stringify(headers)
    ) {
      return saved.promise
    } else {
      return null
    }
  }
  removePromise(route, method, body, params, headers) {
    const saved = this.pendingPromises[route]
    if (
      saved &&
      saved.body === body &&
      saved.method === method &&
      saved.params === params &&
      saved.headers === JSON.stringify(headers)
    ) {
      this.pendingPromises[route] = null
    }
  }
  async makePromise(
    route,
    method,
    { body, params, responseType, disableStatusHandling, additionalHeaders },
    mappingFunction
  ) {
    let headers = {}

    Object.assign(headers, headers, additionalHeaders)

    const currentPromise = this.getPromise(route, method, body, params, headers)
    if (currentPromise) {
      return currentPromise
    }
    // eslint-disable-next-line no-async-promise-executor
    const promise = new Promise(async (resolve, reject) => {
      if (method === 'get' || method === 'delete') {
        axios[method](route, {
          headers: headers || {},
          params: params || null,
          responseType: responseType || null,
          disableStatusHandling,
        })
          .then((response) => {
            resolve(mappingFunction(response.data, response.headers))
          })
          .catch((error) => {
            reject(error)
          })
          .finally(() => {
            this.removePromise(route, method, body, params, headers)
          })
      } else {
        axios[method](route, body, {
          headers: headers || {},
          params: params || null,
          disableStatusHandling,
        })
          .then((response) => {
            resolve(mappingFunction(response.data, response.headers))
          })
          .catch((error) => {
            reject(error)
          })
          .finally(() => {
            this.removePromise(route, method, body, params, headers)
          })
      }
    })
    this.setPromise(route, method, body, params, promise, headers)
    return promise
  }
}
