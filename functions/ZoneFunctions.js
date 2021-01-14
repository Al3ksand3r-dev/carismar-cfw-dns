export default {
  async all() {
    const resp = await fetch('https://api.cloudflare.com/client/v4/zones', {
      headers: {
        Authorization: 'Bearer ' + CFW_TOKEN,
      },
    })
    const data = await resp.json()
    return data
  },
}
