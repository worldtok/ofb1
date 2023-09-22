'use server'
import axios from 'axios'

export const ip = async (ip: string) => {
  const def = {
    c: 'San Francisco',
    f: 'us'
  }
  if (!ip) return def
  try {
    const { data } = await axios.get(`https://ipapi.co/${ip}/json`)
    const city = data.city as string
    if (city?.match(/dubai|london/i)) return def
    return {
      c: data.city as string,
      f: (data.country_code as string).toLowerCase()
    }
  } catch {
    //
  }
  return def
}
