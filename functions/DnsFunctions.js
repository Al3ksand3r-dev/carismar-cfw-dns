export default {
  async all(id) {
    const resp = await fetch(
      'https://api.cloudflare.com/client/v4/zones/' + id + '/dns_records',
      {
        headers: {
          Authorization: 'Bearer 4LUGFkewUttYXj4NjbGmdVl04wVoUDGMBa4IKpai',
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
          Authorization: 'Bearer 4LUGFkewUttYXj4NjbGmdVl04wVoUDGMBa4IKpai',
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
          Authorization: 'Bearer VIMPp1IuXv8TVPpo7M-hFUHpinj_T6fstrQjYyNv',
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
          Authorization: 'Bearer VIMPp1IuXv8TVPpo7M-hFUHpinj_T6fstrQjYyNv',
        },
        method: 'DELETE',
      },
    )
    const data = await resp.json()
    return data
  },
}
