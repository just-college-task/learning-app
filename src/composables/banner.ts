import { fetchBanners } from '@/api/banner'
import { useQuery } from 'vue-query'

export const useBannersQuery = () => useQuery('BANNERS', () => fetchBanners())
