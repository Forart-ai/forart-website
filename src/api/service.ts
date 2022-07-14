import axios from 'axios'

function onFulfilled(config: any) {
  const { data: responseBody } = config

  if (responseBody.code) {
    if (+responseBody.code === 200) {
      return responseBody.data
    }
    return Promise.reject(responseBody.message)
  }

  return config.data
}

function onRejected(error: any) {
  const responseData = error.response?.data

  if (!responseData) {
    return Promise.reject(error)
  }

  const { message, code } = responseData

  if (message && code) {
    return Promise.reject(message)
  }

  return Promise.reject(responseData)
}

const DefaultService = axios.create({
  baseURL: ''
})

const API_HOST = 'https://dev-api.forart.ai/'
// const API_HOST = 'https://api.forart.ai/api/forart/'

const ForartService = axios.create({
  baseURL: `${API_HOST}`
})

DefaultService.interceptors.response.use(
  onFulfilled, onRejected
)

ForartService.interceptors.response.use(
  onFulfilled, onRejected
)

export { DefaultService, ForartService }
