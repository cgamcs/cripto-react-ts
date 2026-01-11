import axios from "axios"
import { create } from "zustand"

async function getCryptos() {
  const url = 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=10&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,PRICE&toplist_quote_asset=USD'
  const { data : { Data : { LIST } } } = await axios(url)
  console.log(LIST)
}

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    getCryptos()
  }
}))