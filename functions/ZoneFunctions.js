export default {
  async all() {
    const resp = await fetch('https://api.cloudflare.com/client/v4/zones', {
      headers: {
        Authorization: 'Bearer Eg6ZD3z2xeuZL9Ows7l_WK9m2g8LnWTXXDEc8Ag2',
      },
    })
    const data = await resp.json()
    return data
  },
}
