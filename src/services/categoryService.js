import apiClient from './apiClient'

export async function getCategories() {
  return apiClient.get('/categories')
}
