import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { CryptoCurrency, CryptoPrice, Pair } from "./types"
import { getCryptos, fetchCurrentCryptoProce } from './services/CryptoService'

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency
  result: CryptoPrice
  loading: boolean
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [],
  result: {
      VALUE: '',
      CURRENT_DAY_HIGH: '',
      CURRENT_DAY_LOW: '',
      VALUE_FLAG: ''
  },
  loading: false,
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  },
  fetchData: async (pair) => {
    set(() => ({
      loading: true
    }))
    const result = await fetchCurrentCryptoProce(pair)
    set(() => ({
      result,
      loading: false
    }))
  }
})))