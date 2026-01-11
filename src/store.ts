import axios from "axios"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema"
import type { CryptoCurrency } from "./types"

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency
  fetchCryptos: () => Promise<void>
}

async function getCryptos() {
  const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,PRICE&toplist_quote_asset=USD'
  const { data : { Data : { LIST } } } = await axios(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(LIST)

  if (result.success) {
    return result.data
  }
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [],
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  }
})))