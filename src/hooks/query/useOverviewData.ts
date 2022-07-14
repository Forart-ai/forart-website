import { useQuery, UseQueryResult } from 'react-query'
import NFT_API from '../../api/nft'

export const useOverviewData = ():UseQueryResult<any> => {

  return useQuery(['OVERVIEW_DATA'],
    async () => {
      return NFT_API.getOverViewInAll().then(res => res)
    }
  )
}
