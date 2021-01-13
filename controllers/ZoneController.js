import ZoneFunctions from '../functions/ZoneFunctions'

const headers = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

const getAll = async () => {
  const body = JSON.stringify(await ZoneFunctions.all())
  return new Response(body, { headers })
}

export default { getAll }
