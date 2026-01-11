import { z } from 'zod'
import { CurrencySchema, CryptoCurrenciesResponseSchema, PairSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrency = z.infer<typeof CryptoCurrenciesResponseSchema>

export type Pair = z.infer<typeof PairSchema>