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
  VALUE: z.number().transform(val => val.toFixed(2)),
  CURRENT_DAY_HIGH: z.number().transform(val => val.toFixed(2)),
  CURRENT_DAY_LOW: z.number().transform(val => val.toFixed(2)),
  VALUE_FLAG: z.string()
})