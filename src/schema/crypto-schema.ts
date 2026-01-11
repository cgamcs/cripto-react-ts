import {z} from 'zod'

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string()
})

export const CryptoCurrenciesResponseSchema = z.array(
  z.object({
    NAME: z.string(),
    SYMBOL: z.string()
  })
)

export const PairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string()
})