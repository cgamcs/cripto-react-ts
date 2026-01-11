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
  const url = `https://data-api.coindesk.com/index/cc/v1/latest/tick?market=cadli&instruments=${pair.criptocurrency}-${pair.currency}&apply_mapping=true&groups=CURRENT_DAY,VALUE`

  const {data : {Data}} = await axios(url)
  console.log(Data[`${pair.criptocurrency}-${pair.currency}`])
}