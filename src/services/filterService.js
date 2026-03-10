import apiClient from './apiClient'

export async function getFilterOptions() {
  return apiClient.get('/filters')
}
