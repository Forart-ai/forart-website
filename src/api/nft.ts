import { ForartService } from './service'

const NFT_API = {
  getOverViewInAll() {
    return ForartService.get('/nft/overview')
  },
}

export default NFT_API
