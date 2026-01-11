import axios from "axios"
import { CryptoCurrenciesResponseSchema } from "../schema/crypto-schema"
import type { Pair } from "../types"

export async function getCryptos() {
  const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,PRICE&toplist_quote_asset=USD'
  const { data : { Data : { LIST } } } = await axios(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(LIST)

  if (result.success) {
    return result.data
  }
}

export async function fetchCurrentCryptoProce(pair: Pair) {
  console.log(pair)
}