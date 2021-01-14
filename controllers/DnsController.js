import DnsFunctions from '../functions/DnsFunctions'

const headers = {
  'content-type': 'application/json; charset=utf-8"',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
}
const getAll = async req => {
  const body = JSON.stringify(await DnsFunctions.all(req.params.id))
  return new Response(body, { headers })
}
const getOne = async req => {
  const body = JSON.stringify(
    await DnsFunctions.getOne(req.params.zone_id, req.params.dns_id),
  )
  return new Response(body, { headers })
}
const updateOne = async req => {
  const body = JSON.stringify(
    await DnsFunctions.updateOne(req.params.zone_id, req.params.dns_id, req),
  )
  return new Response(body, { headers })
}
const deleteOne = async req => {
  const body = JSON.stringify(
    await DnsFunctions.deleteOne(req.params.zone_id, req.params.dns_id),
  )
  return new Response(body, { headers })
}
const create = async req => {
  const body = JSON.stringify(
    await DnsFunctions.create(req.params.zone_id, req),
  )
  return new Response(body, { headers })
}

export default { getAll, getOne, updateOne, deleteOne, create }
