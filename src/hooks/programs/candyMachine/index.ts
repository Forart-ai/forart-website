import useAnchorProvider from '../../useAnchorProvider'
import { useCallback, useMemo } from 'react'
import { Program } from '@project-serum/anchor'
import { CANDY_MACHINE_PROGRAM_ID } from './helpers/constant'
import { CandyMachineIdl } from './idl'
// @ts-ignore
import { getAssociatedTokenAddress, getAccount } from '@solana/spl-token'

const useCandyMachine = () => {
  const { provider } = useAnchorProvider()

  const program = useMemo(() => {
    return new Program<any>(CandyMachineIdl, CANDY_MACHINE_PROGRAM_ID, provider)
  }, [provider])




  return {
    program,

  }
}

export default useCandyMachine
