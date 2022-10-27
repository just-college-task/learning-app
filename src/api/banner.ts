import request from '@/utils/request'
import { Banner } from 'types/api'

const BANNER_BASE_URL = '/api'

export const fetchBanners = () => request.get<Banner[]>(`${BANNER_BASE_URL}/banner/list`)
