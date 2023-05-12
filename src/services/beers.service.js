import ServerDirections from '@/config/server-directions'
import { RequestService } from '@/services/request.service'

const requestService = new RequestService()

export class BeersRequests {
    getBeers(page, peerPage) {
        const url = ServerDirections.BEERS
        const method = 'get'
        const params = {
            page,
            peer_page: peerPage
        }
        
       return requestService.makePromise(url, method, { params }, data => data)
      }
}