import { Router } from 'itty-router'

import ZoneController from './controllers/ZoneController'
import DnsController from './controllers/DnsController'

const router = Router()

router
  .get('/api/zones', ZoneController.getAll)
  .get('/api/zones/:id/dns_records', DnsController.getAll)
  .get('/api/zones/:zone_id/dns_records/:dns_id', DnsController.getOne)
  .patch('/api/zones/:zone_id/dns_records/:dns_id', DnsController.updateOne)
  .delete('/api/zones/:zone_id/dns_records/:dns_id', DnsController.deleteOne)
  .post('/api/zones/:zone_id/dns_records', DnsController.create)
  .get('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = request => router.handle(request)
