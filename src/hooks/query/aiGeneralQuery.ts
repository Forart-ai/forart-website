import useCandyMachine from '../programs/candyMachine'
import { useQuery } from 'react-query'
import { GoblinCandyMachineAddress } from '../programs/candyMachine/helpers/constant'

const useMintedAmount = () => {
  const { program } = useCandyMachine()

  return useQuery(
    ['MINTED_AMOUNT'],
    async () => {

      const candyMachine: any = await program.account.candyMachine.fetch(GoblinCandyMachineAddress)

      const itemsRedeemed = candyMachine.itemsRedeemed.toNumber()

      console.log(itemsRedeemed)

      return Math.min(itemsRedeemed - 500)
    },
    { keepPreviousData: true }
  )
}

export default useMintedAmount
