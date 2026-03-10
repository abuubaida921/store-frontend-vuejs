import apiClient from './apiClient'

export async function getBanners() {
  return apiClient.get('/banners')
}
