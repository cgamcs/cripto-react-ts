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

export const CryptoPriceSchema = z.object({
  VALUE: z.number(),
  CURRENT_DAY_HIGH: z.number(),
  CURRENT_DAY_LOW: z.number(),
  VALUE_FLAG: z.string()
})