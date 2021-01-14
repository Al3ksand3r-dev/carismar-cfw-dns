export default {
  async all(zone_id) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' + zone_id + '/dns_records',
      {
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
      },
    )
    const data = await resp.json()
    return data
  },
  async getOne(zone_id, dns_id) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' +
        zone_id +
        '/dns_records/' +
        dns_id,
      {
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
      },
    )
    const data = await resp.json()
    return data
  },
  async updateOne(zone_id, dns_id, body) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' +
        zone_id +
        '/dns_records/' +
        dns_id,
      {
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
        method: 'PATCH',
        body: JSON.stringify(await body.json()),
      },
    )
    const data = await resp.json()
    return data
  },
  async deleteOne(zone_id, dns_id) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' +
        zone_id +
        '/dns_records/' +
        dns_id,
      {
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
        method: 'DELETE',
      },
    )
    const data = await resp.json()
    return data
  },
  async create(zone_id, body) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' + zone_id + '/dns_records',
      {
        headers: {
          Authorization: 'Bearer ' + API_TOKEN,
        },
        method: 'POST',
        body: JSON.stringify(await body.json()),
      },
    )
    const data = await resp.json()
    return data
  },
}
