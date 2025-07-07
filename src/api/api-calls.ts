import { ApiBaseUrl } from '@/helper/functions'
import Cookies from 'js-cookie'
export const Api = {
  fetchJoBCategories: async () => {
    const res = await fetch(`${ApiBaseUrl}/categories`)
    const json = await res.json()

    return json.data
  },
  fetchJoBCategoriesAdmin: async () => {
    const res = await fetch(`${ApiBaseUrl}/admin/categories`)
    const json = await res.json()

    return json.data
  }
}